from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import os
from routes.chatbot_routes import router as chatbot_router
from functions import router as functions_router  # Import the functions router
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Initialize FastAPI app
app = FastAPI(
    title="Concert Chatbot API",
    description="API for a bilingual concert ticket booking chatbot",
    version="1.0.0"
)

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # For production, specify your frontend domain
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(chatbot_router, tags=["chatbot"])
app.include_router(functions_router, tags=["functions"])  # Include the functions router

# Create a health check endpoint
@app.get("/health", tags=["health"])
async def health_check():
    return {"status": "ok"}

# Create necessary directories
os.makedirs("audio", exist_ok=True)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)