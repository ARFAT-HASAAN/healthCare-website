import React from "react";
import { useState } from "react";
import { useHistory, useLocation } from "react-router";
import UseAuth from "../context/UseAuth";
import "./Login.css";
import logo from "../../Images/logo/logo (4).png";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setpass] = useState("");

  const { signInWithEmail, SignWithGoogle, setError, setUser, error } =
    UseAuth();

  const getEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
    // console.log(email);
  };

  const getPass = (e) => {
    const pass = e.target.value;
    setpass(pass);
    // console.log(pass);
  };
  const history = useHistory();
  const location = useLocation();

  const redirect_url = location.state?.from || "/home";

  const auth = (email, pass) => {
    signInWithEmail(email, pass)
      .then((result) => {
        setUser(result.user);
        history.push(redirect_url);
        setError("");
      })
      .catch((err) => {
        setError(err.message);
      });
  };
  const formSumit = (e) => {
    e.preventDefault();
    auth(email, pass);
  };

  const GoogleLogin = () => {
    SignWithGoogle().then((result) => {
      history.push(redirect_url);
    });
  };
  return (
    <div className="login-container">
      <div className="login-form">
        <img
          className="text-center"
          style={{ width: "10%" }}
          src={logo}
          alt=""
        />
        <h2>Please Login </h2>
        <form onSubmit={formSumit}>
          <input
            onBlur={getEmail}
            placeholder="Email"
            type="email"
            name=""
            id=""
          />
          <input
            onBlur={getPass}
            placeholder="Password"
            type="password"
            name=""
            id=""
          />
          <input className="login-btn" type="submit" value="Login" />
        </form>

        <p>{error}</p>
        <div>
          <p>
            Don't have any account? Please <Link to="/SignIn">Sign up</Link>{" "}
          </p>
          <h2>--or--</h2>
          <button onClick={GoogleLogin} className="google-btn">
            {" "}
            Sign With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
