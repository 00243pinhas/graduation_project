from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from sqlalchemy.dialects.sqlite import BLOB


db = SQLAlchemy()

class Item(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    category = db.Column(db.String(50), nullable=False)
    description = db.Column(db.Text, nullable=False)
    image = db.Column(db.String(200)) 
    is_found = db.Column(db.Boolean, default=False)
    location = db.Column(db.String(120))
    date_reported = db.Column(db.DateTime, default=datetime.utcnow)
    features = db.Column(BLOB)

    def __repr__(self):
        return f"<Item {self.name} - {'Found' if self.is_found else 'Lost'}>"
