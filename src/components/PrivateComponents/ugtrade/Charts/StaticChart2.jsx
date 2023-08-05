import React from "react";
import ReactApexChart from "react-apexcharts";
import { Typography } from "@mui/material";

function MyChart() {
  // Sample data for the chart
  const chartData = {
    options: {
      xaxis: {
        categories: [
          "Jan 01",
          "Jan 02",
          "Jan 03",
          "Jan 04",
          "Jan 05",
          "Jan 06",
          "Jan 07",
          "Jan 08",
          "Jan 09",
          "Jan 10",
          "Jan 11",
          "Jan 12",
          "Jan 13",
          "Jan 14",
          "Jan 15",
          "Jan 16",
          "Jan 17",
          "Jan 18",
          "Jan 19",
          "Jan 20",
          "Jan 21",
          "Jan 22",
          "Jan 23",
          "Jan 24",
          "Jan 25",
          "Jan 26",
          "Jan 27",
          "Jan 28",
          "Jan 29",
          "Jan 30",
          "Jan 31",
        ],
      },
    },
    series: [
      {
        name: "Sales",
        data: [
          30, 40, 25, 50, 49, 60, 70, 91, 125, 100, 90, 80, 30, 40, 25, 50, 49,
          60, 70, 91, 125, 100, 90, 80, 60, 70, 91, 125, 100, 90, 80,
        ],
      },
      {
        name: "Expenses",
        data: [
          60, 60, 45, 70, 69, 80, 90, 111, 145, 120, 110, 100, 60, 60, 45, 70,
          69, 80, 90, 111, 145, 120, 110, 100, 80, 90, 111, 145, 120, 110, 100,
        ],
      },
      {
        name: "Damages",
        data: [
          60, 60, 45, 70, 69, 80, 90, 111, 145, 120, 110, 100, 60, 60, 45, 70,
          69, 80, 90, 111, 145, 120, 110, 100, 80, 90, 111, 145, 120, 110, 100,
        ],
      },
    ],
  };

  return (
    <div style={{ width: "45%", marginTop: "5px", marginLeft: "160px" }}>
      <Typography
        sx={{
          color: "Black",
          fontSize: 28,
          fontWeight: "Bold",
          fontStyle: "Poppins",
          marginBottom: "20px",
          marginTop: "10px",
        }}
      >
        Monthly Data
      </Typography>
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="area" // Change the type to "area" for Spline Line Chart
        height={350}
      />
    </div>
  );
}

export default MyChart;
