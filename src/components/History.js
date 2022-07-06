import React from "react";

const History = ({ category, description, myPackage, price, status }) => {
  return (
    <div className="historyDiv">
      <h3>{category}</h3>
      <p>{myPackage}</p>
      <p>{price}</p>
      <p className={`status-${status}`}>{status}</p>
      <p>{description}</p>
    </div>
  );
};

export default History;
