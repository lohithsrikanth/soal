import React from "react";
import { PieChart, Pie, Tooltip } from "recharts";

const PieRepresentation = ({ data1, data2 }) => {
  return (
    <PieChart width={500} height={400} style={{ margin: "auto" }}>
      <Pie
        data={data1}
        dataKey="value"
        cx={200}
        cy={200}
        outerRadius={60}
        fill="#8884d8"
      />
      <Pie
        data={data2}
        dataKey="value"
        cx={200}
        cy={200}
        innerRadius={70}
        outerRadius={90}
        fill="#82ca9d"
        label
      />
      <Tooltip />
    </PieChart>
  );
};

export default PieRepresentation;
