const mongoose = require('mongoose')//inorder to connect with mongo db you need this package
const Schema = mongoose.Schema; //attributes of supplier are inside the schema

//creating an object and gives supplier properties
const supplierSchema = new Schema ({
suppliername :{
    type :String,
    required :true
},
supplieremail:{
    type :String,
    required :true
},
supplierid :{
    type :String,
    required :true
},
date :{
    type :Date,
    required :true
},
supplierphone :{
    type :String,
    required :true
},
equipment :{
    type :String,
    required :true
},
price :{
    type :String,
    required :true
},
})
const Student =  mongoose.model("Supplier",supplierSchema);
module.exports = Supplier;