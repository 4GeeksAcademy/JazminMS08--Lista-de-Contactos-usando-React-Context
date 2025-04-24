import React from 'react'
import { Link } from "react-router-dom";
const EditContact = () => {
  return (
    <div className="container">
 

      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">Full Name</label>
        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Full Name" />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">Email </label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter email" />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">Phone</label>
        <input type="tel" className="form-control" id="exampleFormControlInput1" placeholder="Enter phone" />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">Address</label>
        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter address" />
      </div>
      <Link to="/">
        <button className="btn btn-primary align-items-center justify-content-center">save</button>
      </Link>
    </div>   
  );
}

export default EditContact
