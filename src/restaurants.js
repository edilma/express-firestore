import { FieldValue } from "firebase-admin/firestore";
import dbConnect from "./dbConnect.js";

const collectionName = "restaurants"

// Get All
export async function getAllRestaurants(req,res){
    const db = dbConnect();
    const collection = await db.collection(collectionName)
    .orderBy("createdAt","desc").get();
    const restaurants = collection.docs.map(doc =>({...doc.data(),restId:doc.id}));
    res.send (restaurants)
};
// Get Doc ID
export async function getAllRestaurantById (req,res){
    const db = dbConnect();
    const {restId} = req.params;
    const doc = db.collection(collectionName).doc(restId).get();
    const rest = (await doc).data();
    res.send(`Got restaurant : ` + restId);
};

//Create
export async function createRestaurant(req, res){
    const db = dbConnect();
    let newRestaurant = req.body;
    //add a time stamp to the new restaurant before i save it
    newRestaurant.createdAt = FieldValue.serverTimestamp();
    await db.collection(collectionName).add(newRestaurant)
    res.status(201).send (`Added restaurant`);
}


//update
export async function updateRestaurantById (req, res){
    const {restId} = req.params;
    const updateInfo = req.body;

    const db = dbConnect();
    await db.collection(collectionName).doc(restId).update(updateInfo);
    res.status(202).send("Restaurant Updated");
}

// delete
export async function deleteRestaurant(req, res){
    const {restId}= req.params;

    const db = dbConnect();
    await db.collection(collectionName).doc(restId).delete();
    res.send(`Restaurant Delete`);
}