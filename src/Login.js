import axios from "axios";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://cors-anywhere.herokuapp.com/https://dennis-muiruri-portfolio.herokuapp.com/api/v1/login",
        { email, password }
      );
      if (data.token) {
        localStorage.setItem("muiruriscodetoken", data.token);
        history.push("/services");
      }
      console.log(data);
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <section className="content">
      <div className="registerContent">
        <h1 className="detailsHeading ">Login</h1>
        <form>
          <input
            type="email"
            className="contact email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email..."
          />
          <input
            type="password"
            className="contact subject"
            placeholder="Password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button id="submitBtn" type="submit" onClick={handleLogin}>
            Login
          </button>
          <Link to="/register" className="link">
            Create Account
          </Link>
        </form>
      </div>
    </section>
  );
};

export default Login;
