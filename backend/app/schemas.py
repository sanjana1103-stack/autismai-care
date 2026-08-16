from pydantic import BaseModel
from typing import Optional, List

class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    email: Optional[str] = None

class UserCreate(BaseModel):
    email: str
    password: str
    role: Optional[str] = "parent"

class UserOut(BaseModel):
    id: str
    email: str
    role: str

class ActivityIn(BaseModel):
    child_id: str
    activity_id: str
    attempts: int
    correct: int
    incorrect: int
    duration_seconds: Optional[float]

class ActivityOut(BaseModel):
    id: str
    child_id: str
    activity_id: str
