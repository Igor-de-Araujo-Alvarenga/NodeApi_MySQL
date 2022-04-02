import * as dotenv from "dotenv";
import express from "express";
import * as bodyParser from "body-parser";
import {pessoaRouter} from "./routes/routes";

const app = express();
dotenv.config();

app.use(bodyParser.json());
app.use("/pessoa", pessoaRouter);

app.listen(process.env.PORT, () => {
console.log("Node server started running");
});