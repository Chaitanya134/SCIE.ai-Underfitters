from fastapi import FastAPI, File, UploadFile
from pydantic import BaseModel
import aiofiles

app = FastAPI()

class Student(BaseModel):
    name: str
    age: int
    email: str
    address: str

@app.get("/")
def index():
    return {"message": "Hello World"}


@app.post("/predict")
async def predict(image: UploadFile = File(...)):
    img = await image.read()

    async with aiofiles.open("predict.jpg", "wb") as f:
        await f.write(img)
    return {"message": str(type(image))}