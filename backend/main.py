from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
from predict import predict_one

app = FastAPI(
    title="Alzheimer Risk Prediction API",
    description="API for predicting Alzheimer's risk using clinical features",
    version="1.0.0"
)

# --- Updated CORS for Production ---
# Replace these URLs with your actual Hostinger domain and Vercel URL
origins = [
    "http://localhost:3000",        # Local development
    "https://NeuroScan.lumatlas.com",     # Your Hostinger domain 
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins, 
    allow_credentials=True,
    allow_methods=["GET", "POST"], # Restrict to necessary methods
    allow_headers=["*"],
)

class PatientInput(BaseModel):
    MMSCORE: float = Field(..., ge=0, le=30)
    APOE4_count: int = Field(..., ge=0, le=2)
    AGE: int = Field(..., ge=40, le=100)
    PTGENDER: int = Field(..., ge=0, le=1)
    PTEDUCAT: int = Field(..., ge=0, le=30)

@app.get("/")
def home():
    return {"status": "online", "message": "Alzheimer Risk Prediction API"}

@app.post("/predict")
def predict(payload: PatientInput):
    try:
        result = predict_one(payload.model_dump())
        return result
    except ValueError as ve:
        raise HTTPException(status_code=400, detail=str(ve))
    except Exception as e:
        raise HTTPException(status_code=500, detail="Internal Server Error")