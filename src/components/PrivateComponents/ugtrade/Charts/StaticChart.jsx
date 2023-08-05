import React from "react";
import ReactApexChart from "react-apexcharts";
import { Typography } from "@mui/material";

function MyChart() {
  // Sample data for the chart
  const chartData = {
    options: {
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
    },
    series: [
      {
        name: "Sales",
        data: [30, 40, 25, 50, 49, 60, 70, 91, 125, 100, 90, 80],
      },
      {
        name: "Expenses",
        data: [60, 60, 45, 70, 69, 80, 90, 111, 145, 120, 110, 100],
      },
      {
        name: "Damages",
        data: [60, 60, 45, 70, 69, 80, 90, 111, 145, 120, 110, 100],
      },
    ],
  };

  return (
    <div style={{ width: "45%", marginTop: "10px", marginLeft: "160px" }}>
      <Typography
        sx={{
          color: "Black",
          fontSize: 28,
          fontWeight: "Bold",
          fontStyle: "Poppins",
          marginBottom: "20px",
        }}
      >
        Yearly Data
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
