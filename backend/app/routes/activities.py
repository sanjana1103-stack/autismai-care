from fastapi import APIRouter, HTTPException
from ..db import db
from ..schemas import ActivityIn
from bson import ObjectId

router = APIRouter()

@router.post("/sessions")
async def create_activity_session(payload: ActivityIn):
    doc = payload.dict()
    res = await db["activity_sessions"].insert_one(doc)
    return {"id": str(res.inserted_id)}

@router.get("/sessions/{child_id}")
async def list_sessions(child_id: str):
    cursor = db["activity_sessions"].find({"child_id": child_id}).sort("_id", -1).limit(50)
    out = []
    async for d in cursor:
        d["id"] = str(d["_id"])
        d.pop("_id", None)
        out.append(d)
    return out
