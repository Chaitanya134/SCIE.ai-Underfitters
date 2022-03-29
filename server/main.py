from fastapi import FastAPI, File, UploadFile
import aiofiles
from tensorflow import keras
from PIL import Image,ImageOps
import numpy as np
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

origins = ["http://localhost:3000", "https://scieai.netlify.app"]

app.add_middleware(CORSMiddleware, allow_origins=origins, allow_credentials=True, allow_methods=["*"], allow_headers=["*"])

@app.get("/")
def index():
    return {"message": "Hello World"}


@app.post("/predict")
async def predict(image: UploadFile = File(...)):
    img = await image.read()

    async with aiofiles.open("predict.jpg", "wb") as f:
        await f.write(img)
        model = keras.models.load_model("model.h5")

        img = Image.open("predict.jpg")

        newsize = (1074, 984)
        img = img.resize(newsize)
        
        img = ImageOps.grayscale(img)
        img = np.asarray(img)
        
        img=img.reshape(-1, 984, 1074, 1)

        y_pred = model.predict(img)

        prediction = y_pred[0][0]

    return {"message": str(prediction)}