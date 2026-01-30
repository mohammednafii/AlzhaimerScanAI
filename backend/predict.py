import joblib
import pandas as pd
import warnings

# Suppress version warnings for cleaner output
warnings.filterwarnings("ignore", category=UserWarning)

PIPELINE_PATH = "models/alzheimer_inference_pipeline3.joblib"
# These are the 5 features your XGBoost model expects at the end
FEATURES = ['MMSCORE', 'APOE4_count', 'PTGENDER', 'PTEDUCAT', 'AGE']

# Load the pipeline
pipeline = joblib.load(PIPELINE_PATH)

def validate_inputs(x: dict) -> dict:
    # Required fields for the logic
    required = ["MMSCORE", "APOE4_count", "AGE", "PTGENDER", "PTEDUCAT"]
    for k in required:
        if k not in x:
            raise ValueError(f"Missing field: {k}")

    # Conversions and Sanity Checks
    clean = {
        "MMSCORE": float(x["MMSCORE"]),
        "APOE4_count": int(x["APOE4_count"]),
        "AGE": int(x["AGE"]),
        "PTGENDER": int(x["PTGENDER"]),
        "PTEDUCAT": int(x["PTEDUCAT"])
    }

    if not (0 <= clean["MMSCORE"] <= 30): raise ValueError("MMSCORE must be 0-30")
    if clean["APOE4_count"] not in (0, 1, 2): raise ValueError("APOE4_count must be 0, 1, or 2")
    if not (40 <= clean["AGE"] <= 100): raise ValueError("AGE must be 40-100")
    if clean["PTGENDER"] not in (0, 1): raise ValueError("PTGENDER must be 0 or 1")
    return clean

def predict_one(user_input: dict) -> dict:
    clean = validate_inputs(user_input)
    
    # 1. Prepare data for the SCALER (expects 4 specific columns)
    scaler_cols = ['MMSCORE', 'AGE', 'PTEDUCAT', 'APOE4_count']
    X_4 = pd.DataFrame([[clean[c] for c in scaler_cols]], columns=scaler_cols)
    
    # 2. Transform using the Scaler step
    scaler = pipeline.named_steps['scaler']
    X_scaled_array = scaler.transform(X_4) # Returns a numpy array
    
    # 3. Build the final 5-column DataFrame for XGBoost
    # XGBoost expects: ['MMSCORE', 'APOE4_count', 'PTGENDER', 'PTEDUCAT', 'AGE']
    # Based on scaler_cols, the array indices are: 0:MMSCORE, 1:AGE, 2:PTEDUCAT, 3:APOE4_count
    
    final_data = {
        'MMSCORE': X_scaled_array[0][0],
        'APOE4_count': X_scaled_array[0][3],
        'PTGENDER': clean['PTGENDER'], # This was NOT scaled
        'PTEDUCAT': X_scaled_array[0][2],
        'AGE': X_scaled_array[0][1]
    }
    
    # Create DF with exact order required by XGBoost
    X_final = pd.DataFrame([final_data])[FEATURES]
    
    # 4. Predict using the MODEL step
    model = pipeline.named_steps['model']
    pred = int(model.predict(X_final)[0])
    proba = float(model.predict_proba(X_final)[:, 1][0])

    return {
        "prediction": pred,
        "probability_ad": round(proba, 4),
        "label": "AD" if pred == 1 else "Non-AD"
    }

if __name__ == "__main__":
    test_data = {
        "MMSCORE": 22.0,
        "AGE": 75,
        "PTGENDER": 0,
        "PTEDUCAT": 12,
        "APOE4_count": 1
    }
    try:
        result = predict_one(test_data)
        print("--- Test Result ---")
        print(result)
    except Exception as e:
        print(f"Error during prediction: {e}")