from fastapi import FastAPI
from app.routes.consents import router as consent_router

app = FastAPI(
    title="Open Banking Consent Flow Explorer"
)

app.include_router(consent_router)

@app.get("/")
def root():
    return {
        "message": "Open Banking Consent API Running"
    }