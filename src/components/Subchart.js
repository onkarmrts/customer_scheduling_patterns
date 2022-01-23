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

class Subchart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: [
          "9am to 12am",
          "12pm to 3pm",
          "3pm to 6pm",
          "6pm to 9pm",
          "9pm to 12pm",
          
          
        ],
        datasets: [
          {
            label: "18th November",
            data: [2, 4, 2, 5, 2, 6],
            backgroundColor: [
              "#f7786b",
             
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
          marginLeft:60,
          padding: 15
        }}
      >
        <Bar data={this.state.chartData} options={{}} />
      </div>
    );
  }
}

export default Subchart;
