import React, { Component } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import Chart from "chart.js/auto";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

class chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: [
          "18th November",
          "19th November",
          "20th November",
          "21th November",
          "22th November",
          "23th November",
          
        ],
        datasets: [
          {
            label: "Scheduled",
            data: [2, 2, 4, 6, 2, 1],
            backgroundColor: [
              "#f7786b",
              "#034f84",
              "#92a8d1",
              "#80ced6",
              "#618685",
              "#ffef96",
              
            ],
          },
        ],
      },
    };
  }

  render() {
    return (
      <div
        className="chart"
        style={{
          width: "700px",
          height: "500px",
          display: "flex",
          alignItems: "center",
          padding:15
        }}
      >
        <Bar data={this.state.chartData} options={{}} />
      </div>
    );
  }
}

export default chart;
