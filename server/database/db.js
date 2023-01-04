import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const USERNAME=process.env.DB_USERNAME;
const PASSWORD=process.env.DB_PASSWORD;



const Connection =async ()=>{
    const URL = `mongodb://${USERNAME}:${PASSWORD}@ac-ofthvez-shard-00-00.b7iocrv.mongodb.net:27017,ac-ofthvez-shard-00-01.b7iocrv.mongodb.net:27017,ac-ofthvez-shard-00-02.b7iocrv.mongodb.net:27017/?ssl=true&replicaSet=atlas-pv1g5e-shard-0&authSource=admin&retryWrites=true&w=majority`
    try {
       await mongoose.connect(URL, { useUnifiedTopology: true })
       console.log("database connected sucessfully");
    } catch (error) {
        console.log("error in connecting database",error.message);
    }
}

export default Connection;
