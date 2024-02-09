// import mongoose from "mongoose";

// export default async function conn(){
//     const URL=(process.env.MONGO_URL+process.env.DB_NAME)
//     const db=mongoose.connect(URL)
//     console.log("datbase conected");
//     return db;
// }




import mongoose from "mongoose";
 export default async function conection(){
    const URL=(process.env.MONGO_URL+process.env.DB_NAME)
    const db=mongoose.connect(URL)
    console.log("Database started");
 }