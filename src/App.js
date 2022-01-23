import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Chart from "./components/Chart";

function app() {
  return (
    <div>
    <div>
      <Navbar />
      <div style={{ display: "flex" }} className="chart">
        
        <Chart />
      </div>
      <div className="subheading">
        Kindly Click<span>&#128070;</span> on any sheduled bar to know the Exact
        Time Sheduling of that particular day:)
      </div>
      
    </div>
    <div className="footer"> Built by @OnkarMathapati</div>
    </div>
  );
}

export default app;
