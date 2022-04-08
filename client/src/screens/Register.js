import e from "cors";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../Js/userSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleregister = (e) => {
    dispatch(register(user));
    e.preventDefault();
    toast("registered successfully !!");
  };
  return (
    <div className="container">
      <div className="card">
        <div className="card-image">
          <h2 className="card-heading">
            Register
            <small>Let us create your account</small>
          </h2>
        </div>
        <form className="card-form">
          <div className="input">
            <input
              type="text"
              className="input-field"
              required
              onChange={(e) => setUser({ ...user, name: e.target.value })}
            />
            <label className="input-label">Full name</label>
          </div>
          <div className="input">
            <input
              type="text"
              className="input-field"
              required
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
            <label className="input-label">Email</label>
          </div>
          <div className="input">
            <input
              type="password"
              className="input-field"
              required
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
            <label className="input-label">Password</label>
          </div>
          <div className="action">
            <button className="action-button" onClick={handleregister}>
              Get started
            </button>
          </div>
        </form>
        <div className="card-info">
          <p>By signing up you are agreeing to our </p>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />{" "}
    </div>
  );
};

export default Register;
