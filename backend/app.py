from flask import Flask, jsonify
from flask_cors import CORS
import json
import os

app = Flask(__name__)
CORS(app)  # Allow CORS for frontend access

DATA_PATH = os.path.join(os.path.dirname(__file__), 'data')

@app.route('/api/prices')
def get_price_data():
    try:
        with open(os.path.join(DATA_PATH, 'cleaned_prices.json')) as f:
            return jsonify(json.load(f))
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/api/change-point')
def get_change_point_data():
    try:
        with open(os.path.join(DATA_PATH, 'change_point_results.json')) as f:
            return jsonify(json.load(f))
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/api/events')
def get_event_data():
    try:
        with open(os.path.join(DATA_PATH, 'events_data.json')) as f:
            return jsonify(json.load(f))
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
