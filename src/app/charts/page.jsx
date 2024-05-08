"use client";

import GanttChart from "@/component/GanttChart/GanttChart";
import StackedAreaChart from "../../component/StackedAreaChart/StackedAreaChart";
import React from "react";

const Charts = () => {
  return (
    <div className="w-[80%] flex flex-col items-center">
      <GanttChart />
      <StackedAreaChart />
    </div>
  );
};

export default Charts;
