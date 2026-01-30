# Alzheimer Risk Prediction API

## Input (JSON)
- MMSCORE (float) : 0–30
- APOE4_count (int) : 0, 1, 2
- AGE (int) : 40–100
- PTGENDER (int) : 0=Male, 1=Female
- PTEDUCAT (int) : 0–30

## Output (JSON)
- prediction : 0=Non-AD, 1=AD
- probability_ad : float [0,1]
- label : "AD" | "Non-AD"

## Notes
- Ne PAS faire de scaling côté frontend
- Utiliser le pipeline joblib
