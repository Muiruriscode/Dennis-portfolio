import React from "react";
import aboutImg from "./img/dennis.JPG";
import "./App.css";
import { Link } from "react-router-dom";

export const About = () => {
  const token = localStorage.getItem("muiruriscodetoken");
  return (
    <section id="about" className="aboutSection padding">
      <h1 className="heading">About Me</h1>
      <div className="grid__2">
        <div>
          <img src={aboutImg} alt="dennis's photo" className="aboutImg" />
        </div>
        <div>
          <article className="aboutMe">
            <h1>About Me</h1>
            <p>
              I am a graduate from Machakos University in Computer Science.
              Certified in{" "}
              <strong>
                Responsive Design, Javascript Data Structures and Algorithms and
                Frontend development libraries
              </strong>
              .
            </p>
            <p>
              I use web development to ensure that organisations and individuals
              have an online prescence. My websites aim at ensuring that my
              client's information is accessible to their clients on the
              internet.
            </p>
            <p>
              I offer Frontend, backend and fullstack website development. My
              work follows the best practice of the industry and moves toward
              value addition to my clients.
            </p>
          </article>
          <div className="about">
            <Link to="/resume">
              <button className="aboutBtn">Download Cv</button>
            </Link>
            {
              <Link to={token ? "/services" : "/login"}>
                <button className="aboutbtn">Hire Me</button>
              </Link>
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
