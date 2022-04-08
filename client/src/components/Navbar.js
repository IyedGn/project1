import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../Js/userSlice";
const Navbar = () => {
  const isAuth = localStorage.getItem("token");
  const dispatch = useDispatch();
  let navigate = useNavigate();

  return (
    <div className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Register">Register</Link>
        </li>

        {!isAuth ? (
          <li>
            <Link to="/login">Login</Link>
          </li>
        ) : (
          <li
            className="logout"
            onClick={() => {
              dispatch(logout());
              navigate("/");
            }}
          >
            Logout
          </li>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
