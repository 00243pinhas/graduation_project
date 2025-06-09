from app import create_app
from app.models import db

from flask_cors import CORS

app = create_app()

CORS(app)

with app.app_context():
    db.create_all()
    print("db is done ")



if __name__ == '__main__':
    app.run(debug=True)
