from flask import Flask

app = Flask(__name__)

@app.route("/")
def home():
    return "Hello, Flask is running with auto-reload!"

if __name__ == "__main__":
    app.run(debug=True)
