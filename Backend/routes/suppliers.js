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

//first find the supplier that you want to update without affecting others
//when you use asynchronous performance gets higher 
router.route("/update/:id").put(async(req,res)=>{
   let userid = req.params.id;
   //destructor to get all constant variables of the supplier profiles
  
   const {suppliername,supplieremail,supplierid,date,supplierphone,equipment,price}=req.body;
   const updateSupplier ={
    suppliername,
    supplieremail,
    supplierid,
    supplierphone,
    equipment,
    date,
    price
   }
   const update = await Supplier.findByIdAndUpdate(userid,updateSupplier).then(()=>{
    res.status(200).send({status : "User updated", user :update})
   }).catch((err)=>{
console.log(err);
res.status(500).send({status : "Error with updating data", error : err.message});
   })
   
})


module.exports = router;