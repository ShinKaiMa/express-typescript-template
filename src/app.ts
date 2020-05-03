import * as bodyParser from 'body-parser';
import express = require('express');
import cors from 'cors';
import helmet from 'helmet';
import * as dotenv from 'dotenv';
import productController from "./controller/product.controller";

dotenv.config();

let app = express();
app.use(cors({
    // origin: config.corsOrigin,
    optionsSuccessStatus: 200
}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(helmet());
app.use("/api/product", productController);

export default app;