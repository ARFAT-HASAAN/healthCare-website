import React from "react";
import { useState } from "react";
import logo from "../../Images/logo/logo (4).png";

import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";

import UseAuth from "../context/UseAuth";
import "./SignIn.css";

const Sign = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPassword] = useState("");

  const getName = (e) => {
    const name = e.target.value;
    // console.log(name);
    setName(name);
  };

  const getEmail = (e) => {
    const email = e.target.value;
    // console.log(email);
    setEmail(email);
  };

  const getPass = (e) => {
    const pass = e.target.value;
    // console.log(pass);
    setPassword(pass);
  };

  const { NewUser, error, setUserName, setUser, setError } = UseAuth();

  const history = useHistory();
  const location = useLocation();
  const redirect_url = location.state?.from || "/home";
  const auth = (name, email, pass) => {
    NewUser(name, email, pass)
      .then((result) => {
        setUserName(name);
        setUser(result.user);
        history.push(redirect_url);

        //  setUser()
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const getForm = (e) => {
    e.preventDefault();
    auth(name, email, pass);
  };

  return (
    <div className="regester-form">
      <div className="form-container">
        <img
          className="text-center"
          style={{ width: "10%" }}
          src={logo}
          alt=""
        />
        <h2>Please Sign up</h2>
        <form onSubmit={getForm}>
          <input
            onBlur={getName}
            type="text"
            name="name"
            id="name"
            placeholder="Name"
          />
          <br />
          <input
            onBlur={getEmail}
            placeholder="Email"
            type="email"
            name="email"
            id="email"
          />
          <br />
          <input
            onBlur={getPass}
            placeholder="Password"
            type="password"
            name="pass"
            id="pass"
          />
          <br />

          <input className="submit-btn" type="submit" value="Sign up" />
        </form>

        <div className="existaccount">
          <p className="error">{error} </p>

          <p>
            Already have an account? Please <Link to="/login">login</Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sign;
