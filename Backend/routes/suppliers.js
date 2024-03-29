const router = require("express").Router();
let Supplier =require("../models/Supplier");

//creating routes according to your crud operations
//the reason you wont use get method is because it is less secured . data can be accesd when passing data to the database
router.route("/add").post((req,res)=>{
const suppliername= req.body.suppliername;
const supplieremail= req.body.supplieremail;
const supplierid= req.body.supplierid;
const date= Date(req.body.date);
const supplierphone= req.body.supplierphone;
const equipment= req.body.equipment;
const price = req.body.price;

const newSupplier = new Supplier({
    suppliername,
    supplieremail,
    supplierid,
    date,
    supplierphone,
    equipment,
    price,
})
 newSupplier.save().then(()=>{        //javascript promise
    res.json("Supplier added") 
 }).catch((err)=>{
    console.log(err);  //actually this an exception handling here
 })
})

router.route("/").get((req,res)=>{
    Supplier.find().then((suppliers)=>{
res.json(suppliers)
    }).catch((err)=>{
        console.log(err)
    })
})
module.exports = router;