from motor.motor_asyncio import AsyncIOMotorClient
import os
from dotenv import load_dotenv

load_dotenv()
MONGODB_URI = os.getenv("MONGODB_URI") or "mongodb://localhost:27017/autismai"

client: AsyncIOMotorClient | None = None

db = None

async def connect_db():
    global client, db
    client = AsyncIOMotorClient(MONGODB_URI)
    db = client.get_default_database()
    print("Connected to MongoDB")

async def close_db():
    global client
    if client:
        client.close()
        print("MongoDB connection closed")
