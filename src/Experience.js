import React from "react";
import { FaBuilding, FaCertificate, FaFreeCodeCamp } from "react-icons/fa";

const Experience = () => {
  return (
    <section id="experience" className="padding">
      <h1 className="heading">Experience</h1>
      <hr />
      <h1>
        <FaBuilding />
        Work
      </h1>
      <h2>Freelance</h2>
      <p>
        <strong>Freelance Web Developer: </strong>Oct 2021 - date
      </p>
      <h2>Discovery Publishers</h2>
      <p>
        <strong>Supervior/Accountant</strong> Jan 2012 - Oct 2021
      </p>
      <p>
        <strong>IT support</strong> July 2019 - Jan 2021
      </p>
      <p>
        <strong>Graphic design</strong> July 2019 - Jan 2021
      </p>
      <h2>Postal Corporation of Kenya</h2>
      <p>
        <strong>IT intern: </strong> Jan 2017 - April 2017
      </p>
      <hr />
      <h1>
        <FaCertificate /> Certifications
      </h1>
      <a href="https://www.freecodecamp.org/certification/fccbd94d7f6-c521-4c62-87c1-836a7eef5ec7/responsive-web-design" className="certificateLink">
        <strong>Responsive Design: </strong>
        <FaFreeCodeCamp /> Freecodecamp
      </a>
      <br />
      <a href="https://www.freecodecamp.org/certification/fccbd94d7f6-c521-4c62-87c1-836a7eef5ec7/javascript-algorithms-and-data-structures" className="certificateLink">
        <strong>Javascript Data Stractures and Algorithms: </strong>
        <FaFreeCodeCamp /> Freecode Camp
      </a>
      <br />
      <a href="https://www.freecodecamp.org/certification/fccbd94d7f6-c521-4c62-87c1-836a7eef5ec7/front-end-development-libraries" className="certificateLink">
        <strong>Front End Development Libraries: </strong>
        <FaFreeCodeCamp /> Freecodecamp
      </a>
      <br />
    </section>
  );
};

export default Experience;
