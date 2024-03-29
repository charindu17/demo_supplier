//configuring js
const express  = require("express"); //declaring variables and importing packages here
const mongoose = require("mongoose");
const bodyParser=require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 8070; //local computer this server

//body parser - because you have keys and their values in packege.json
app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL; //access url

mongoose.connect(URL, {
    useCreateIndex : true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify : false,
    
  });
//opening a function using arrows
const connection = mongoose.connection;
connection.once("open",()=> {
    console.log("MongoDB database connected successfully!");
});
//access Student.js adn import the Student .js file
const supplierRouter = require("./routes/supplier.js");

app.use("/supplier",supplierRouter);
//run in the port
app.listen(PORT , () => {
    console.log(`Server is running on port ${PORT}`);
});