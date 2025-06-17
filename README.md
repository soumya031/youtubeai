# 🎬 YouTube Transcript Summarizer Web App

This project is a web application that takes a YouTube video URL and returns a concise summary of its transcript using the power of generative AI.

![Demo](./demo.gif) <!-- Optional: Add a GIF showing the app in action -->

## 🚀 Features

- 🔗 Input YouTube video URL
- 🧠 Generates transcript using `youtube-transcript-api`
- ✨ Summarizes content using Gemini/GPT API
- 📦 FastAPI backend
- 🖥️ React frontend

## 🛠️ Tech Stack

- **Frontend:** React.js
- **Backend:** FastAPI
- **AI Model:** Google Gemini / OpenAI GPT
- **Transcript:** `youtube-transcript-api`
- **Deployment:** (Optional: Vercel / Render / Railway)

## 📦 Installation

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/youtube-summarizer.git
cd youtube-summarizer


## Setup

1. Create a virtual environment:
```bash
python -m venv .venv
```

2. Activate the virtual environment:
- Windows:
```bash
.venv\Scripts\activate
```
- Unix/MacOS:
```bash
source .venv/bin/activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Create a `.env` file in the root directory and add your Gemini API key:
```
GOOGLE_API_KEY=your_gemini_api_key_here
```

## Running the Backend

1. Start the server:
```bash
cd backend
uvicorn main:app --reload
```

The server will start at `http://localhost:8000`

## API Endpoints

- `GET /`: Welcome message
- `POST /api/chat`: Chat endpoint that accepts messages and returns AI responses

### Example API Usage

```python
import requests

response = requests.post(
    "http://localhost:8000/api/chat",
    json={"message": "Your message here"}
)
print(response.json())
```

## Documentation

Once the server is running, you can access the automatic API documentation at:
- Swagger UI: `http://localhost:8000/docs`
- ReDoc: `http://localhost:8000/redoc` 
