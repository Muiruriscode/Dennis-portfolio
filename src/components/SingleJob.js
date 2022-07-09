import React from "react";
import {} from "react-icons";
const SingleJob = ({
  name,
  basic,
  standard,
  premium,
  desc,
  price,
  title,
  setMyPackage,
  setPrice,
}) => {
  return (
    <div className="jobDiv">
      <h1 className="jobMainHeader center">{name}</h1>
      {basic && (
        <div
          className="service"
          onClick={(e) => {
            setMyPackage("Basic");
            setPrice(basic.price);
          }}
        >
          <h2 className="jobHeading">{basic.title}</h2>
          <p>{basic.basicDesc}</p>
          <p>{basic.price}</p>
        </div>
      )}
      {standard && (
        <div
          className="service"
          onClick={() => {
            setMyPackage("Standard");
            setPrice(standard.price);
          }}
        >
          <h2 className="jobHeading">{standard.title}</h2>
          <p>{standard.stndDesc}</p>
          <p>{standard.price}</p>
        </div>
      )}
      {premium && (
        <div
          className="service"
          onClick={() => {
            setMyPackage("Premium");
            setPrice(premium.price);
          }}
        >
          <h2>{premium.title}</h2>
          <p>{premium.prmDesc}</p>
          <p>{premium.price}</p>
        </div>
      )}
      {desc && (
        <div
          className="service"
          onClick={() => {
            setMyPackage(title);
            setPrice(price);
          }}
        >
          <h2>{title}</h2>
          <p>{desc}</p>
          <p>{price}</p>
        </div>
      )}
    </div>
  );
};

export default SingleJob;
