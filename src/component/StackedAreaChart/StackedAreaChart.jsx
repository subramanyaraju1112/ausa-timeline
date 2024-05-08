"use client";

import React, { useState } from "react";
import Image from "next/image";
import InformationIcon from "../../../public/svg/information.svg";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Brush,
  ResponsiveContainer,
} from "recharts";

const StackedAreaChart = () => {
  const data = [
    {
      day: "Apr 22",
      mbp: 122,
      bp: "170/98 mm Hg",
      temperature: 36.8,
    },
    {
      day: "Apr 23",
      mbp: 117,
      bp: "161/95 mm Hg",
      temperature: 37.2,
    },
    {
      day: "Apr 24",
      mbp: 128.33,
      bp: "175/105 mm Hg",
      temperature: 36.9,
    },
    {
      day: "Apr 25",
      mbp: 113,
      bp: "155/92 mm Hg",
      temperature: 37.5,
    },
    {
      day: "Apr 26",
      mbp: 130,
      bp: "172/109 mm Hg",
      temperature: 37.0,
    },
    {
      day: "Apr 27",
      mbp: 113,
      bp: "153/93 mm Hg",
      temperature: 38.1,
    },
    {
      day: "Apr 28",
      mbp: 129.33,
      bp: "172/108 mm Hg",
      temperature: 37.3,
    },
    {
      day: "Apr 29",
      mbp: 114.67,
      bp: "160/92 mm Hg",
      temperature: 37.6,
    },
    {
      day: "Apr 30",
      mbp: 129.67,
      bp: "173/108 mm Hg",
      temperature: 37.8,
    },
    {
      day: "May 1",
      mbp: 131.33,
      bp: "176/109 mm Hg",
      temperature: 36.7,
    },
    {
      day: "May 2",
      mbp: 126.67,
      bp: "170/105 mm Hg",
      temperature: 37.9,
    },
    {
      day: "May 3",
      mbp: 123.7,
      bp: "165/102 mm Hg",
      temperature: 36.5,
    },
    {
      day: "May 4",
      mbp: 120.74,
      bp: "161/100 mm Hg",
      temperature: 38.2,
    },
    {
      day: "May 5",
      mbp: 117.78,
      bp: "156/98 mm Hg",
      temperature: 37.4,
    },
    {
      day: "May 6",
      mbp: 114.81,
      bp: "152/96 mm Hg",
      temperature: 38.5,
    },
    {
      day: "May 7",
      mbp: 111.85,
      bp: "147/93 mm Hg",
      temperature: 37.1,
    },
    {
      day: "May 8",
      mbp: 108.89,
      bp: "143/91 mm Hg",
      temperature: 38.7,
    },
    {
      day: "May 9",
      mbp: 105.93,
      bp: "138/89 mm Hg",
      temperature: 36.6,
    },
    {
      day: "May 10",
      mbp: 102.96,
      bp: "134/87 mm Hg",
      temperature: 39.0,
    },
    {
      day: "May 11",
      mbp: 100,
      bp: "170/98 mm Hg",
      temperature: 37.7,
    },
    {
      day: "May 12",
      mbp: 102.96,
      bp: "130/85 mm Hg",
      temperature: 38.3,
    },
    {
      day: "May 13",
      mbp: 97,
      bp: "125/83 mm Hg",
      temperature: 36.4,
    },
    {
      day: "May 14",
      mbp: 100,
      bp: "124/88 mm Hg",
      temperature: 38.9,
    },
    {
      day: "May 15",
      mbp: 99.67,
      bp: "139/80 mm Hg",
      temperature: 37.5,
    },
    {
      day: "May 16",
      mbp: 98.33,
      bp: "121/87 mm Hg",
      temperature: 38.6,
    },
    {
      day: "May 17",
      mbp: 99,
      bp: "125/86 mm Hg",
      temperature: 36.8,
    },
    {
      day: "May 18",
      mbp: 97.33,
      bp: "130/81 mm Hg",
      temperature: 39.2,
    },
    {
      day: "May 19",
      mbp: 103,
      bp: "135/87 mm Hg",
      temperature: 37.2,
    },
    {
      day: "May 20",
      mbp: 98.33,
      bp: "135/80 mm Hg",
      temperature: 38.0,
    },
    {
      day: "May 21",
      mbp: 98.67,
      bp: "120/88 mm Hg",
      temperature: 36.9,
    },
  ];

  const processBPGraphData = (data) => {
    data.forEach((eachData) => {
      let MBP = eachData.mbp;
      let tooltip = "";
      let temperature = "";
      if (MBP < 70) {
        MBP = 11;
        tooltip = "Hypotension (Low Blood Pressure)";
        console.log("Hypotension (Low Blood Pressure)");
      } else if (MBP >= 120) {
        MBP = 11;
        tooltip = "Hypertensive Crisis";
        console.log("Hypertensive Crisis");
      } else if (MBP >= 110) {
        MBP = 9;
        tooltip = "Hypertension Stage 2";
        console.log("Hypertension Stage 2");
      } else if (MBP >= 100) {
        MBP = 7;
        tooltip = "Hypertension Stage 1";
        console.log("Hypertension Stage 1");
      } else if (MBP >= 90) {
        MBP = 5;
        tooltip = "Elevated Blood Pressure";
        console.log("Elevated Blood Pressure");
      } else if (MBP < 90) {
        MBP = 3;
        tooltip = "Normal Blood Pressure";
        console.log("Normal Blood Pressure");
      } else {
        console.log("Invalid Blood Pressure Values");
      }

      // Assign the new value to eachData.mbp
      eachData.mbp = MBP;
      eachData.tooltip = tooltip;
    });
    console.log(data, "DATA");
    return data;
  };

  function categorizeBloodPressure(MAP) {
    if (MAP < 70) {
      return "Hypotension (Low Blood Pressure)";
    } else if (MAP >= 120) {
      return "Hypertensive Crisis";
    } else if (MAP >= 110) {
      return "Hypertension Stage 2";
    } else if (MAP >= 100) {
      return "Hypertension Stage 1";
    } else if (MAP >= 90) {
      return "Elevated Blood Pressure";
    } else if (MAP < 90) {
      return "Normal Blood Pressure";
    } else {
      return "Invalid Blood Pressure Values";
    }
  }

  const processTempGraphData = (data) => {
    data.forEach((eachData) => {
      let temp = "";
      let tempTooltip = eachData.temperature + "°C";
      if (eachData.temperature <= 37.2 && eachData.temperature >= 36.1) {
        temp = 4;
      }
      if (eachData.temperature <= 38 && eachData.temperature >= 37.2) {
        temp = 8;
      } else {
        temp = 12;
      }
      eachData.temperature = temp;
      eachData.tempInCelsius = tempTooltip;
    });
    return data;
  };

  const processAllData = (data) => {
    data = processBPGraphData(data);
    data = processTempGraphData(data);
    return data;
  };

  const [tooltipActiveIndex, setTooltipActiveIndex] = useState(null);

  const CustomToolTip = ({ active, payload, label }) => {
    console.log(active, payload[0], label, "DATA");
    let bpType = categorizeBloodPressure(payload[0]?.payload?.mbp);
    return (
      <div className="px-4 py-2 flex flex-col gap-2 rounded-lg bg-[#ff5c00]/20 border border-[#ff5c00] transform translate-x-848 translate-y-419 rotate-180 scale-x-[-1]">
        <div className="flex gap-1 items-center">
          <Image
            src={InformationIcon}
            alt="information-icon"
            width={16}
            height={16}
          />
          <span className="text-xs font-semibold text-[#1c274c]">
            {payload[0]?.payload?.bp}
          </span>
        </div>
        <div className="flex gap-1 items-center">
          <Image
            src={InformationIcon}
            alt="information-icon"
            width={16}
            height={16}
          />
          <span className="text-xs font-semibold text-[#1c274c]">
            {payload[0]?.payload?.tempInCelsius}
          </span>
        </div>
      </div>
    );
  };
  return (
    <div>
      <ResponsiveContainer
        width="100%"
        height={600}
        className="bg-white transform rotate-180 scale-x-[-1]"
      >
        <AreaChart
          width={500}
          height={400}
          data={processAllData(data)}
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" horizontal="" vertical="true" />
          <XAxis
            dataKey="day"
            axisLine={false}
            orientation={"bottom"}
            tick={false}
            width={75}
          />
          <YAxis axisLine={false} tick={false} hide domain={[0, 30]} />
          <Tooltip
            content={<CustomToolTip />}
            onActive={(active) => {
              console.log(active);
              return setTooltipActiveIndex(
                active ? active.payload[0].dataIndex : null
              );
            }}
          />
          <Area
            type="monotone"
            dataKey="mbp"
            stackId="1"
            stroke="#FFA49C"
            fill="#FFA49C"
            className="opacity-50"
          />
          <Area
            type="monotone"
            dataKey="temperature"
            stackId="1"
            stroke="#FFC7FB"
            fill="#FFC7FB"
            className="opacity-50"
          />
        </AreaChart>
          {/* <Brush
            dataKey="mbp"
            height={30}
            stroke="#FF9500"
            className=""
          /> */}
      </ResponsiveContainer>
    </div>
  );
};

export default StackedAreaChart;
