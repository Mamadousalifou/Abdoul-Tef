import mongoose from "mongoose";


let isConnected = false;

export const connectToDatabase = async () => {


    mongoose.set('strictQuery',true);

    if(isConnected) {

         console.log("im already connected to my database");
         return;
    }

    try{

        const connection = await mongoose.connect("mongodb+srv://mamadousalifou01:AGgaK6pWK8rvp4Mc@cluster0.ya8roj4.mongodb.net/?retryWrites=true&w=majority",{
              dbName:'Mscademy'
        })

       
        isConnected = true;
        console.log("connection established");

    }catch(error){

         throw new Error({
             "message":error.message,
             "stack":error.stack
         })
    }

}


export const disconnectFromDatabase = async() => {

    console.log(mongoose.connections);
    await mongoose.connections[0].close();
    console.log("connection closed");
    return;
}