import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { login } from "../Js/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handlelogin = (e) => {
    dispatch(login(user));
    e.preventDefault();
    toast("login successfully !!");
    setTimeout(() => {
      navigate("/profile");
    }, 2000);
  };
  return (
    <div className="container">
      <div className="card">
        <div className="card-image">
          <h2 className="card-heading">
            Login
            <small>Let us create your account</small>
          </h2>
        </div>
        <form className="card-form">
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
            <button className="action-button" onClick={handlelogin}>
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

export default Login;
