import express from "express";
import cookieParser from "cookie-parser";
import http from "http"
import cors from "cors"
import mongoose from "mongoose";
import "dotenv/config";
import routes from "./src/routes/index.js"



const app = express();

app.use(cors());
app.use(express.json());
app.use(express(express.urlencoded({ extended: false })));
app.use(cookieParser());

app.use("/api/v1", routes);

const port = process.env.PORT || 5000

const server = http.createServer(app)

mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log("database connected");
    server.listen(port, () => {
        console.log(`app listening at ${port}`);
    })
}).catch((err) => {
    console.log({ err });
    process.exit(1);
})