import dbConnect from "./dbConnect.js";

const collectionName = "restaurants"

// Get
export async function getAllRestaurants(req,res){
    const db = dbConnect();
    const collection = db.collection(collectionName).get();
    const restaurants = collection.doc.map((doc) =>{
        return rest = doc.data();
    })
    res.send (restaurants)
};
// Rest ID
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
    const newRestaurant = req.body;
    await db.collection("collectionName").add(newRestaurant)
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