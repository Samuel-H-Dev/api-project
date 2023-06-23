
import { onRequest } from "firebase-functions/v2/https";
import logger from "firebase-functions/logger";
import express from "express"
import cors from "cors"
import { getAllCars, addNewCar, updateCarsByID } from "./src/cars.js"

const app = express();
app.use(cors())
app.use(express.json())

app.get("/test", (req, res) => res.send("its working"))


app.get("/cars", getAllCars);
app.post("/cars", addNewCar);
app.patch("/cars/:carsID", updateCarsByID)




export const api =  onRequest({ maxInstances: 10}, app);