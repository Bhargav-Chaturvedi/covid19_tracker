import React, { useEffect, useState } from "react";
import "./covid.css";
const Covid = () => {
  const [data, setData] = useState([]);
  const getCovidData = async () => {
    try {
      const res = await fetch("https://data.covid19india.org/data.json");
      const actualData = await res.json();
      console.log(actualData.statewise[0]);
      setData(actualData.statewise[0]);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getCovidData();
  }, []);
  return (
    <section>
      <h1>LIVE..!!!</h1>
      <h2>COVID-19 LIVE TRACKER</h2>
      <ul>
        <li
          className="card"
          style={{ backgroundColor: "#07ffbd4f", color: "#333" }}
        >
          <div className="card_main row">
            <div className="card_inner col-lg-4 col-md-4 col-sm-6">
              <p className="card_name">
                <span>OUR</span> Country
              </p>
              <p className="card_total card_small">INDIA</p>
            </div>
          </div>
        </li>
        <li
          className="card"
          style={{ backgroundColor: "#4de84787", color: "#333" }}
        >
          <div className="card_main row">
            <div className="card_inner col-lg-4 col-md-4 col-sm-6">
              <p className="card_name">
                <span>TOTAL</span> Recovered
              </p>
              <p className="card_total card_small">{data.recovered}</p>
            </div>
          </div>
        </li>

        <li
          className="card"
          style={{ backgroundColor: "#4771e89e", color: "#333" }}
        >
          <div className="card_main row">
            <div className="card_inner col-lg-4 col-md-4 col-sm-6">
              <p className="card_name">
                <span>Total</span> Confirmed
              </p>
              <p className="card_total card_small">{data.confirmed}</p>
            </div>
          </div>
        </li>
        <li
          className="card"
          style={{ backgroundColor: "#eaabe087", color: "#333" }}
        >
          <div className="card_main row">
            <div className="card_inner col-lg-4 col-md-4 col-sm-6">
              <p className="card_name">
                <span>TOTAL</span> Deaths
              </p>
              <p className="card_total card_small">{data.deaths}</p>
            </div>
          </div>
        </li>
        <li
          className="card"
          style={{ backgroundColor: "#95e9b7", color: "#333" }}
        >
          <div className="card_main row">
            <div className="card_inner col-lg-4 col-md-4 col-sm-6">
              <p className="card_name">
                <span>TOTAL</span> Active
              </p>
              <p className="card_total card_small">{data.active}</p>
            </div>
          </div>
        </li>
        <li
          className="card"
          style={{ backgroundColor: "#ffdddd", color: "#333" }}
        >
          <div className="card_main row">
            <div className="card_inner col-lg-4 col-md-4 col-sm-6">
              <p className="card_name">
                <span>LAST</span> Updated
              </p>
              <p className="card_total card_small">{data.lastupdatedtime}</p>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Covid;
