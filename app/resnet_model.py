# app/resnet_model.py

import numpy as np
from PIL import Image
import tensorflow as tf
from tensorflow.keras.applications.resnet50 import ResNet50, preprocess_input
from tensorflow.keras.preprocessing import image as keras_image
import numpy as np
import io

# Load the pretrained model once
model = ResNet50(weights='imagenet', include_top=False, pooling='avg')

def extract_features(img_path):

    if isinstance(img_path,Image.Image):
        img= img_path.resize((224,224))
        img_array = keras_image.img_to_array(img)
        img_array=np.expand_dims(img_array, axis=0)
        img_array = preprocess_input(img_array)
        features = model.predict(img_array)
        return features.flatten()
    else:
        raise TypeError("Expected a PIL.Image.Image")


    # img = keras_image.load_img(img_path, target_size=(224, 224))
    # x = keras_image.img_to_array(img)
    # x = np.expand_dims(x, axis=0)
    # x = preprocess_input(x)
    # features = model.predict(x)



    # print(features)
    # return features[0]  # Flattened 2048-dim vector
