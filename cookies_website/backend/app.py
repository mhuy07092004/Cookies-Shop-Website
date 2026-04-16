from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return "Flask backend running"

@app.route("/api/register", methods=["POST"])
def register():
    print("Register API called")
    
    data =request.json
    print("Data:", data)
    return jsonify({"message": "User registered successfully"})
    print(data)
@app.route("/api/cookies")
def cookies():
    data = [
        {"id":1, "name":"Chocolate Cookie"},
        {"id":2, "name":"Oatmeal Cookie"}
    ]
    
    return jsonify(data)

if __name__ == "__main__":
    app.run(debug=True)