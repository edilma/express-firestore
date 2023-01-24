import dbConnect from "./dbConnect.js";

export function getAllRestaurants(req,res){
    const db = dbConnect();
    res.send (`All Restaurants`)
};

export function getAllRestaurantById (req,res){
    const db = dbConnect();
    const {restId} = req.params;
    res.send(`Got restaurant : ` + restId);
};

export function createRestaurant(req, res){
    const db = dbConnect();
    const newRestaurant = req.body;
    res.status(201).send (`Added restaurant`);
}

