import React from "react";
import {
  BarChart,
  Bar,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Barchart = ({ data }) => {
  return (
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="revenue" fill="#8884d8" />
      <Bar dataKey="sell" fill="#82ca9d" />
    </BarChart>
  );
};

export default Barchart;
