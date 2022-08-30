import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";

const app = express()
dotenv.config()

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB);
        console.log("Connected to MongoDb");
    } catch (error) {
        throw error; // When the MongoDb is not connected then there is no need to connect to the server as no database is connected yet.
                    // So this will throw an error here.....Also it will only connect when the Database is connected.....
    }
};

mongoose.connection.on("disconnected", () => {
    console.log("MongoDb Disconnected");
})

app.get("/", (req, res) =>{
    res.send("First Request!")
})

//....Middlewares....

app.use(express.json())

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);



app.listen(8000, () => {
    connect();
    console.log("Connected to Backend!!")
});