import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "TEAM A",
          type: "column",
          data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
        },
        {
          name: "TEAM B",
          type: "area",
          data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
        },
        {
          name: "TEAM C",
          type: "line",
          data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
        },
      ],
      options: {
        chart: {
          height: 350,
          type: "line",
          stacked: false,
        },
        stroke: {
          width: [0, 2, 5],
          curve: "smooth",
        },
        plotOptions: {
          bar: {
            columnWidth: "50%",
          },
        },

        fill: {
          opacity: [0.85, 0.25, 1],
          gradient: {
            inverseColors: false,
            shade: "light",
            type: "vertical",
            opacityFrom: 0.85,
            opacityTo: 0.55,
            stops: [0, 100, 100, 100],
          },
        },
        labels: [
          "01/01/2003",
          "02/01/2003",
          "03/01/2003",
          "04/01/2003",
          "05/01/2003",
          "06/01/2003",
          "07/01/2003",
          "08/01/2003",
          "09/01/2003",
          "10/01/2003",
          "11/01/2003",
        ],
        markers: {
          size: 0,
        },
        xaxis: {
          type: "datetime",
        },
        yaxis: {
          title: {
            text: "Points",
          },
          min: 0,
        },
        tooltip: {
          shared: true,
          intersect: false,
          y: {
            formatter: function (y) {
              if (typeof y !== "undefined") {
                return y.toFixed(0) + " points";
              }
              return y;
            },
          },
        },
      },
    };
  }
  render() {
    return (
      <div className="relative flex flex-col min-w-0 break-words bg-lightBlue-900 w-full mb-6 sshadow-2xl rounded-lg">
        <div className="text-white rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className=" relative w-full px-4 max-w-full flex-grow flex-1">
              <h3   style={{color:"#ff8c00"}} className="font-semibold text-base text-center uppercase">
                History Price
              </h3>
            </div>
          </div>
        </div>
        <div className="bg-white block w-full overflow-hidden">
          <div id="chart">
            <ReactApexChart
              options={this.state.options}
              series={this.state.series}
              type="line"
              height={350}
            />
          </div>{" "}
        </div>
      </div>
    );
  }
}
