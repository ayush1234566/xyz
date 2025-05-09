from flask import Flask, jsonify, request
from flask_cors import CORS
import mysql.connector

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Database connection
def get_db_connection():
    return mysql.connector.connect(
        host="127.0.0.1",
        user="root",
        password="12345",
        database="team"
    )

# Route: Get all teams
@app.route("/teams", methods=["GET"])
def get_teams():
    try:
        conn = get_db_connection()
        cursor = conn.cursor(dictionary=True)
        cursor.execute("SELECT * FROM teams")
        teams = cursor.fetchall()
        cursor.close()
        conn.close()
        return jsonify(teams)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Route: Get leaderboard
@app.route("/api/leaderboard", methods=["GET"])
def get_leaderboard():
    try:
        conn = get_db_connection()
        cursor = conn.cursor(dictionary=True)
        cursor.execute("""
            SELECT team_name, points 
            FROM leaderboard l 
            JOIN teams t ON l.team_id = t.team_id 
            ORDER BY points DESC
        """)
        data = cursor.fetchall()
        cursor.close()
        conn.close()
        return jsonify(data)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Route: Register new team
@app.route("/api/register", methods=["POST"])
def register_team():
    try:
        data = request.get_json()
        print("Received from frontend:", data)

        team_name = data.get("team_name")
        players = data.get("players")

        if not team_name or not players or len(players) != 4:
            return jsonify({"error": "Invalid team name or number of players"}), 400

        conn = get_db_connection()
        cursor = conn.cursor()

        cursor.execute("INSERT INTO teams (team_name) VALUES (%s)", (team_name,))
        team_id = cursor.lastrowid

        for player in players:
            cursor.execute(
                "INSERT INTO players (team_id, player_name) VALUES (%s, %s)", 
                (team_id, player)
            )

        conn.commit()
        cursor.close()
        conn.close()

        return jsonify({"message": "Team registered successfully!"}), 200

    except Exception as e:
        print("Error during registration:", e)
        import traceback
        traceback.print_exc()
        return jsonify({"error": str(e)}), 500

# Route: Welcome/Home
@app.route("/")
def home():
    return "Welcome to eSportsWeb Backend!"

if __name__ == "__main__":
    app.run(debug=True)
