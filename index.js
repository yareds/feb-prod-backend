const express = require('express');
const mongoose= require("mongoose");
require('dotenv').config();
const cors = require("cors");

const productRoute = require ("./routes/product")
const app = express();

mongoose
.connect(process.env.MONGODB_URL).then(() => {
    console.log("Database connection is successful")
}).catch((err) => {
    console.log(err)
})

app.use("/api/products", productRoute)
app.use(express.json());
app.use(cors({ origin: "*"}));
/*setting up server*/
app.listen (5000, () => {
    console.log ("Our server is up and running")
})


