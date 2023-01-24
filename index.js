import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import { createRestaurant, getAllRestaurants,getAllRestaurantById } 
    from "./src/restaurants.js";


const app = express();
app.use(cors());
app.use(express.json());
// in case that we can't connect to the .env we use the or 3030 (short circuiting)
const PORT = process.env.PORT || 3030;

//set up routes
//because the function take the 2 parameters that we are passing we don't need to take them
app.get ("/restaurants", getAllRestaurants);
app.get ("/restaurants/:restId", getAllRestaurantById);
app.post("/restaurants", createRestaurant);


//listen to port

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT} ...`)
})