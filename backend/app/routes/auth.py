from fastapi import APIRouter, HTTPException, Depends
from ..db import db
from ..models import User
from ..schemas import UserCreate, UserOut, Token
from passlib.context import CryptContext
from jose import jwt
import os

router = APIRouter()
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
SECRET_KEY = os.getenv("SECRET_KEY", "dev-secret")

@router.post("/register", response_model=UserOut)
async def register(user: UserCreate):
    existing = await db["users"].find_one({"email": user.email})
    if existing:
        raise HTTPException(status_code=400, detail="User already exists")
    hashed = pwd_context.hash(user.password)
    doc = {"email": user.email, "hashed_password": hashed, "role": user.role}
    res = await db["users"].insert_one(doc)
    return {"id": str(res.inserted_id), "email": user.email, "role": user.role}

@router.post("/login")
async def login(user: UserCreate):
    doc = await db["users"].find_one({"email": user.email})
    if not doc or not pwd_context.verify(user.password, doc["hashed_password"]):
        raise HTTPException(status_code=401, detail="Invalid credentials")
    token = jwt.encode({"sub": user.email}, SECRET_KEY, algorithm="HS256")
    return {"access_token": token, "token_type": "bearer"}
