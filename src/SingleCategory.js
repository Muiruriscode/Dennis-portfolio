import React, { useState } from "react";
import { Link } from "react-router-dom";

const SingleCategory = ({ name, description }) => {
  return (
    <Link to={`/job/${name}`}>
      <div className="category">
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </Link>
  );
};

export default SingleCategory;
