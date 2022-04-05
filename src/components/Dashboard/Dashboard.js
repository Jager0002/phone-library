import React, { useEffect, useState } from "react";
import Barchart from "../Barchart/Barchart";
import Piechart from "../Piechart/Piechart";
import "./Dashboard.css";

const Dashboard = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className="w-3/4 mx-auto grid grid-cols-1 md:grid-cols-2 items-center">
      <Barchart data={data}></Barchart>
      <Piechart data={data}></Piechart>
    </div>
  );
};

export default Dashboard;
