from fastapi import FastAPI
from .routes import auth, activities
from .db import connect_db, close_db

app = FastAPI(title="AutismAI Care - Backend")

app.add_event_handler("startup", connect_db)
app.add_event_handler("shutdown", close_db)

app.include_router(auth.router, prefix="/api/auth", tags=["auth"])
app.include_router(activities.router, prefix="/api/activities", tags=["activities"])

@app.get("/")
async def root():
    return {"msg": "AutismAI Care backend running"}
