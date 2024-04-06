from flask import request
from flask import Flask
from flask_cors import CORS, cross_origin
import os
import requests

app = Flask(__name__)
CORS(app, resources={r"/upload_sans": {"origins": "http://localhost:5173"}})
app.config['CORS_HEADERS'] = 'Content-Type'

# Initialize a counter
upload_counter = 0
API_URL = "https://api-inference.huggingface.co/models/Tarakki100/sanskrit"
headers = {"Authorization": "Bearer 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"}

@cross_origin()
@app.route('/upload_sans', methods=['POST'])
def upload_audio():
    global upload_counter  # Use the global upload_counter variable
    audio_file = request.files['audio_data']
    if audio_file:
        filename = f"recorded_audio_{upload_counter}.wav"
        # Specify the folder path where you want to save the audio files
        folder_path = os.path.join(app.root_path, "recordings")
        os.makedirs(folder_path, exist_ok=True)  # Create the folder if it doesn't exist
        audio_file.save(os.path.join(folder_path, filename))
        upload_counter += 1  # Increment the counter for the next upload
        with open(os.path.join(folder_path, filename), "rb") as f:
            data = f.read()
        response = requests.post(API_URL, headers=headers, data=data)
        # print(response.json()["text"])
        return response.json()
    
    else:
        return 'No audio file received!', 400

if __name__ == '__main__':
    app.run(debug=True)
