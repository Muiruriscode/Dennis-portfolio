import React, { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { links } from "./data";
import logo from "./img/logo.png";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [login, setLogin] = useState("Login");
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  const token = localStorage.getItem("muiruriscodetoken");

  const history = useHistory();

  useEffect(() => {
    token ? setLogin("Sign out") : setLogin("Log in");
  }, [token]);
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight + 20}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);

  const handleSignOut = () => {
    localStorage.removeItem("muiruriscodetoken");
    setLogin("Log out");
  };
  const handleLogin = () => {
    setLogin("Sign out");
    history.push("/login");
  };

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="logo" alt="logo" />
          <button className="nav-toggle" onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          {/* {token ? (
            <button type="button" onClick={handleSignOut} className="loginBtn">
              Sign out
            </button>
          ) : (
            <button type="button" onClick={handleLogin} className="loginBtn">
              Sign out
            </button>
          )} */}
          <button
            type="button"
            onClick={token ? handleSignOut : handleLogin}
            className="loginBtn"
          >
            {login}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
