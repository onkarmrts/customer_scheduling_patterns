import React, { Component } from "react";
import Highcharts from "highcharts";
import drilldown from "highcharts/modules/drilldown.js";
import HighchartsReact from "highcharts-react-official";
import "./charts.css"

drilldown(Highcharts);

class TestingChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          type: "column",
          events: {
            drilldown: function (e) {
              if (!e.seriesOptions) {
                var chart = this;
                if (e.point.name === "ITEM_DATE") {
                  chart.addSingleSeriesAsDrilldown(e.point, {
                    name: "18th November",

                    color: "rgb(124, 181, 236)",
                    data: [
                      ["9am to 12pm", 1],
                      ["12pm to 3pm", 0],
                      ["3pm to 6pm", 1],
                      ["6pm to 9pm", 0]
                    ]
                  });
                  chart.addSingleSeriesAsDrilldown(e.point, {
                    name: "19th November",

                    color: "rgb(67, 67, 72)",
                    data: [
                      ["9am to 12pm", 0],
                      ["12pm to 3pm", 1],
                      ["3pm to 6pm", 1],
                      ["6pm to 9pm", 0]
                    ]
                  });
                  chart.addSingleSeriesAsDrilldown(e.point, {
                    name: "20th November",

                    color: "rgb(144, 237, 125)",
                    data: [
                      ["9am to 12pm", 2],
                      ["12pm to 3pm", 1],
                      ["3pm to 6pm", 1],
                      ["6pm to 9pm", 1]
                    ]
                  });
                }
                chart.applyDrilldown();
              }
            }
          }
        },

        title: {
          text: "Customer Scheduled",
          style: {
            fontSize: "15px",
            fontWeight: "bold",
            color: "#123E69"
          }
        },

        xAxis: {
         
          type: "category"
        },
        yAxis: {
          min: 0, 
          title: {
            text: "Schedules"
          }
        },
        legend: {
          enabled: true 
        },

        tooltip: {
          shared: true 
        },

        series: [
          {
            name: "18th November",
            data: [
              {
                name: "ITEM_DATE",
                y: 3,
                drilldown: true
              }
            ]
          },
          {
            name: "19th November",
            data: [
              {
                name: "ITEM_DATE",
                y: 2,
                drilldown: true
              }
            ]
          },
          {
            name: "20th November",
            data: [
              {
                name: "ITEM_DATE",
                y: 5,
                drilldown: true
              }
            ]
          }
        ]
      }
    };
  }

  render() {
    return (
      <HighchartsReact
        highcharts={Highcharts}
        options={this.state.options}
      />
    );
  }
}

export default TestingChart;