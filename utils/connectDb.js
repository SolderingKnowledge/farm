import mongoose from "mongoose";
const connection = {}

async function connectDb(){
    if(connection.isConnected){
        console.log("Was connected to DB");
        return;
    }
   const db = await mongoose.connect(process.env.MONGO_SRV, {
        useCreateIndex: true,
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true,

    });
    console.log("Connected to MongoDB");
    connection.isConnected = db.connection[0].readyState;
};

export default connectDb;