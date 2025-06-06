from flask import Blueprint, request, jsonify
from .models import db, Item
import os
from werkzeug.utils import secure_filename
from .resnet_model import extract_features
import pickle
import io
from PIL import Image
import numpy as np



main = Blueprint("main", __name__)

# Create an item
@main.route('/api/items', methods=['POST'])
def add_item():
    name =request.form.get('name')
    category =request.form.get('category')
    description =request.form.get('description')
    location = request.form.get('location')
    is_found = request.form.get('is_found', 'false').lower() == 'true'

    image_file = request.files.get('image')
    image_filename = None

    
    
    if image_file:
        image_filename = secure_filename(image_file.filename)  
        upload_folder = 'app/static/uploads'
        os.makedirs(upload_folder, exist_ok=True)
        image_path = os.path.join(upload_folder, image_filename)
        image_file.save(image_path)
        features = extract_features(image_path)
        features_blob = pickle.dumps(features)

    item = Item(
        name=name,
        category=category,
        description=description,
        location=location,
        is_found=is_found,
        image=image_filename,
        features= features_blob
    )

    db.session.add(item)
    db.session.commit()

    return jsonify({"message": "Item added successfully"}), 201



@main.route('/api/items', methods=['GET'])
def get_items():
    items = Item.query.all()
    output = []

    for item in items:
        output.append({
            'id': item.id,
            'name': item.name,
            'category': item.category,
            'description': item.description,
            'location': item.location,
            'is_found': item.is_found,
            'image': f"/static/uploads/{item.image}" if item.image else None,
            'date_reported': item.date_reported.strftime("%Y-%m-%d")
        })

    return jsonify(output)


@main.route('/api/match',methods=['POST'])
def match_item():

    uploaded_file = request.files.get('image')
    
    if not uploaded_file:
        return jsonify({"error": "No image uploaded"}), 400

    image = Image.open(uploaded_file.stream).convert('RGB')

    uploaded_features = extract_features(image)  

    items = Item.query.all()
    best_match = None
    min_distance = float('inf')

    for item in items:
        if item.features:
            db_features = pickle.loads(item.features)
            distance = np.linalg.norm(uploaded_features - db_features)
            if distance < min_distance:
                min_distance = distance
                best_match = item

    if best_match:
        return jsonify({
            "match_found": True,
            "id": best_match.id,
            "name": best_match.name,
            "location": best_match.location,
            "category": best_match.category,
            "image": f"/static/uploads/{best_match.image}",
            "similarity_score": float(min_distance)
        })
    else:
        return jsonify({"match_found": False})
