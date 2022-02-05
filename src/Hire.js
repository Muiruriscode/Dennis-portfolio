import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { categories } from "./data";
import SingleCategory from "./SingleCategory";
import History from "./History";

const Hire = () => {
  const [response, setResponse] = useState();
  const token = localStorage.getItem("muiruriscodetoken");
  const url = `https://dennis-muiruri-portfolio.herokuapp.com/api/v1/job`;

  const getJobs = useCallback(async () => {
    try {
      const { data } = await axios.get(url, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setResponse(data.jobs);
    } catch (error) {
      console.log(error.response);
    }
  }, [token, url]);
  useEffect(() => {
    getJobs();
  }, [getJobs]);
  return (
    <section className="padding">
      <div className="backHome">
        <h1 className="heading hireHeading">Hire me</h1>
      </div>
      <div className="hireDivFlex">
        <div className="hireDetails">
          <h2 className="center">Category of Websites</h2>
          <p className="center select">Click on the service to select</p>
          <div className="grid__2">
            {categories.map((item, index) => {
              const { name, description } = item;
              return (
                <SingleCategory
                  key={index}
                  name={name}
                  description={description}
                />
              );
            })}
          </div>
          <div></div>
        </div>
        <aside className="history">
          <h2>History</h2>
          <div className="historyResponse">
            {response &&
              response.map((item, index) => {
                const { category, description, myPackage, price, status } =
                  item;
                return (
                  <History
                    key={index}
                    category={category}
                    description={description}
                    myPackage={myPackage}
                    price={price}
                    status={status}
                  />
                );
              })}
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Hire;
