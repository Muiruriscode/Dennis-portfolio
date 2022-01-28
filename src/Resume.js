import React from "react";
import { Link } from "react-router-dom";
import file from "./resume/resume.pdf";

const Resume = () => {
  return (
    <section>
      <div className="backHome">
        <h1>Resume</h1>
        <Link>
          <button>Back Home</button>
        </Link>
      </div>
      <iframe
        style={{ width: "100%", height: "85vh" }}
        src={file}
        type="application/pdf"
        title="Resume"
      />
    </section>
  );
};

export default Resume;
