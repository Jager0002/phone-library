import React from "react";
import { Pie, PieChart, Tooltip } from "recharts";

const Piechart = ({ data }) => {
  return (
    <div>
      <PieChart width={1000} height={400}>
        <Pie
          dataKey="investment"
          isAnimationActive={false}
          data={data}
          cx={200}
          cy={200}
          outerRadius={80}
          fill="#8884d8"
          label
        />
        <Pie
          dataKey="revenue"
          isAnimationActive={false}
          data={data}
          cx={500}
          cy={200}
          innerRadius={40}
          outerRadius={80}
          fill="#82ca9d"
          label
        />
        <Tooltip />
      </PieChart>
      <p className="text-center">Investment Vs Revenue</p>
    </div>
  );
};

export default Piechart;
