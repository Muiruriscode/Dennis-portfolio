import axios from "axios";
import React, { useState, useRef, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState("success");
  const [heading, setHeading] = useState("message");
  const msgRef = useRef();
  const history = useHistory();
  const url = "https://dennis-muiruri-portfolio.herokuapp.com/api/v1/login";

  useEffect(() => {
    const timer = setTimeout(() => {
      msgRef.current.style.display = "none";
    }, 3000);
    return clearTimeout(timer);
  }, [url]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(url, { email, password });
      if (data.token) {
        localStorage.setItem("muiruriscodetoken", data.token);
        history.push("/services");
      }
      setHeading(data.msg);
      msgRef.current.style.display = "block";
      if (data.success) {
        setAlert("success");
      } else if (!data.success) {
        setAlert("danger");
      }
    } catch (error) {
      msgRef.current.style.display = "block";
      setHeading(error.response.data.msg);
      setAlert("danger");
      console.log("error", error.response);
    }
  };
  return (
    <section className="content">
      <div className="registerContent">
        <h1 className="detailsHeading ">Login</h1>
        <form>
          <p
            id="message"
            className={`center alert alert-${alert}`}
            dangerouslySetInnerHTML={{ __html: heading }}
            ref={msgRef}
          ></p>
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
