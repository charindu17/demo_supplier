import React,{useState} from "react";

export default function AddSupplier(){
    return(
        <div className="container" color="blue">
            <form>
     <div class="form-group">
    <label for="id">Supplier ID</label>
    <input type="text" class="form-control" id="id"  placeholder="Enter supplier id"></input>
    
  </div>
  <div class="form-group">
    <label for="date">Date</label>
    <input type="date" class="form-control" id="date"  placeholder="Enter date in which the equipments were received"></input>
    
  </div>
  <div class="form-group">
    <label for="name">Supplier Name</label>
    <input type="text" class="form-control" id="name"  placeholder="Enter supplier name"></input>
    
  </div>
  <div class="form-group">
    <label for="email">Email</label>
    <input type="email" class="form-control" id="email" placeholder="Supplier email"></input>
  </div>
  <div class="form-group">
    <label for="phone">Supplier Phone</label>
    <input type="text" class="form-control" id="phone"  placeholder="Enter supplier phone"></input>
    
  </div>
  <div class="form-group">
    <label for="name">Equipment</label>
    <input type="text" class="form-control" id="equipment"  placeholder="Enter equipment"></input>
    
  </div>
  <div class="form-group">
    <label for="price">Price</label>
    <input type="text" class="form-control" id="price"  placeholder="Enter supplier name"></input>
    
  </div>
  
  <button type="submit" class="btn btn-primary">Add Supplier</button>
</form>
        </div>
    )

  }