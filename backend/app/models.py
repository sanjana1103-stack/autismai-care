from pydantic import BaseModel, Field
from typing import Optional, List
from datetime import datetime

class User(BaseModel):
    id: Optional[str]
    email: str
    hashed_password: str
    role: str = "parent"
    created_at: Optional[datetime]

class ChildProfile(BaseModel):
    id: Optional[str]
    name: str
    age: Optional[int]
    preferred_companion: Optional[str]
    interests: Optional[List[str]] = []
    created_at: Optional[datetime]

class ActivitySession(BaseModel):
    id: Optional[str]
    child_id: str
    activity_id: str
    attempts: int = 0
    correct: int = 0
    incorrect: int = 0
    duration_seconds: Optional[float]
    created_at: Optional[datetime]
