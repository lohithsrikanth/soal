import React from "react";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const BarRepresentation = ({ data, dataBar, dataLine }) => {
  return (
    <ComposedChart
      width={500}
      height={400}
      data={data}
      margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20,
      }}
      style={{ margin: "auto" }}
    >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis dataKey="name" scale="band" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey={dataBar} barSize={20} fill="#413ea0" />
      <Line type="monotone" dataKey={dataLine} stroke="#ff7300" />
    </ComposedChart>
  );
};

export default BarRepresentation;
