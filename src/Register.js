import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import { Link, useHistory } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [alert, setAlert] = useState("success");
  const [heading, setHeading] = useState("message");
  const [confirmPass, setConfirmPass] = useState("");
  const msgRef = useRef();
  const url = "https://dennis-muiruri-portfolio.herokuapp.com/api/v1/register";

  const history = useHistory();
  useEffect(() => {
    const timer = setTimeout(() => {
      msgRef.current.style.display = "none";
    }, 3000);
    return clearTimeout(timer);
  }, [url]);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(url, {
        email,
        password,
        name,
        confirmPass,
      });
      if (data.token) {
        localStorage.setItem("muiruriscodetoken", data.token);
        history.push("/login");
      }
      console.log(data);
    } catch (error) {
      msgRef.current.style.display = "block";
      setHeading("Enter the correct values");
      setAlert("danger");
      console.log(error);
    }
  };
  return (
    <section className="content">
      <div className="registerContent">
        <h1 className="detailsHeading ">Register</h1>
        <form>
          <p
            id="message"
            className={`center alert alert-${alert}`}
            dangerouslySetInnerHTML={{ __html: heading }}
            ref={msgRef}
          ></p>
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
