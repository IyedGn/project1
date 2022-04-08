import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./screens/Home";
import Register from "./screens/Register";
import Login from "./screens/Login";
import Profile from "./screens/Profile";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { current } from "./Js/userSlice";
import PrivateRoute from "./routes/PrivateRoute";
function App() {
  const dispatch = useDispatch();
  const isAuth = localStorage.getItem("token");
  useEffect(() => {
    if (isAuth) {
      dispatch(current());
    }
  }, []);

  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
