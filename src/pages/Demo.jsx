// Import necessary components from react-router-dom and other parts of the application.
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";  // Custom hook for accessing the global state.

export const Demo = () => {
  // Access the global state and dispatch function using the useGlobalReducer hook.
  const { store, dispatch } = useGlobalReducer()

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
};