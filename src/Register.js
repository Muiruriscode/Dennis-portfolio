import axios from "axios";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const history = useHistory();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://cors-anywhere.herokuapp.com/https://dennis-muiruri-portfolio.herokuapp.com/api/v1/register",
        {
          email,
          password,
          name,
          confirmPass,
        }
      );
      if (data.token) {
        localStorage.setItem("muiruriscodetoken", data.token);
        history.push("/login");
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="content">
      <div className="registerContent">
        <h1 className="detailsHeading ">Register</h1>
        <form>
          <input
            type="text"
            value={name}
            placeholder="Username..."
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="contact subject"
            placeholder="Password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            className="contact subject"
            placeholder="confirm Password..."
            value={confirmPass}
            onChange={(e) => setConfirmPass(e.target.value)}
          />
          <button id="submitBtn" type="submit" onClick={handleRegister}>
            Register
          </button>
          <Link to="/login" className="link">
            Already have an account?
          </Link>
        </form>
      </div>
    </section>
  );
};

export default Register;
