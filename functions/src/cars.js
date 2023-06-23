


import { db } from "./connectDB.js";
const coll = db.collection("cars");
const toArray = (collection) => collection.docs.map(doc => ({id: doc.id, ...doc.data() }))


export async function getAllCars(req, res){
try{
    const allCars = await coll.get()
    res.send(toArray(allCars))

}
catch(err){
    res.status(500).send(err)
}
}
export async function addNewCar(req, res){
    try{
        const newCar = req.body
        await coll.add(newCar)
        getAllCars(req,res) 
    }
    catch(err){
        res.status(500).send(err)
    }
    }
export async function updateCarsByID(req,res){
    try{
        const { carsID } = req.params;    
        const updatedInfo = req.body;      
        await coll.doc(carsID).update(updatedInfo)     
        getAllCars(req,res);
    }
    catch(err){
        res.status(500).send(err);
    }
}







