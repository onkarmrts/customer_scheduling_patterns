import React from "react";
import "./App.css";
import Chart from "./components/Chart";
import Subchart from "./components/Subchart";

function app() {
  return (
    <div>
      <h2 className="heading">CUSTOMER SCHEDULING PATTERN</h2>
      <div style={{ display: "flex" }}>
        <Chart />
        <Subchart />
      </div>
      <div className="subheading">
        Kindly Click<span>&#128070;</span> on any date or the sheduled bar to
        know the Exact Time Sheduling of that particular day:)
      </div>
    </div>
  );
}

export default app;
