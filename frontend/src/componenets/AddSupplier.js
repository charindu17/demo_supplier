//funtional componenet
import React,{useState} from "react";

export default function AddSupplier(){

  const [id,setId] = useState("");
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [date,setDate] = useState("");
  const [phone,setPhone] = useState("");
  const [equipment,setEquipment] = useState("");
  const [price,setPrice] = useState("");
    return(
        <div className="container" color="blue">
            <form>
     <div class="form-group">
    <label for="id">Supplier ID</label>
    <input type="text" class="form-control" id="id"  placeholder="Enter supplier id" onChange={(e)=>{
                    setId(e.target.value);
                }}/>
    
  </div>
  <div class="form-group">
    <label for="date">Date</label>
    <input type="date" class="form-control" id="date"  placeholder="Enter date in which the equipments were received" onChange={(e)=>{
                    setDate(e.target.value);
                }}/>
    
  </div>
  <div class="form-group">
    <label for="name">Supplier Name</label>
    <input type="text" class="form-control" id="name"  placeholder="Enter supplier name" onChange={(e)=>{
                    setName(e.target.value);
                }}/>
    
  </div>
  <div class="form-group">
    <label for="email">Email</label>
    <input type="email" class="form-control" id="email" placeholder="Supplier email" onChange={(e)=>{
                    setEmail(e.target.value);
                }}/>
  </div>
  <div class="form-group">
    <label for="phone">Supplier Phone</label>
    <input type="text" class="form-control" id="phone"  placeholder="Enter supplier phone" onChange={(e)=>{
                    setPhone(e.target.value);
                }}/>
    
  </div>
  <div class="form-group">
    <label for="equipment">Equipment</label>
    <input type="text" class="form-control" id="equipment"  placeholder="Enter equipment"onChange={(e)=>{
                    setEquipment(e.target.value);
                }}/>
    
  </div>
  <div class="form-group">
    <label for="price">Price</label>
    <input type="text" class="form-control" id="price"  placeholder="Enter supplier name"onChange={(e)=>{
                    setPrice(e.target.value);
                }}/>
    
  </div>
  
  <button type="submit" class="btn btn-primary">Add Supplier</button>
</form>
        </div>
    )

  }