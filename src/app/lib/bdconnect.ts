import mongoose from "mongoose";


type connectionObject = {
    isConnected?: number
}

const connection: connectionObject = {}
async function bdconnected(): Promise<void> {
    if (connection.isConnected) {
        console.log("Databse alerdy connected ");

    }

    try {
        const bdconnected = await mongoose.connect(process.env.MONGOBDURL || "", {})
        connection.isConnected = bdconnected.connections[0].readyState;
        console.log("Database connected");
    } catch (error) {
        console.log("Databse connection fail", error);

        process.exit(1);
    }
}


export default bdconnected;