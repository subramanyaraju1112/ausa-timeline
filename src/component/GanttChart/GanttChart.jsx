"use client";

import React from "react";
import ReactApexChart from "react-apexcharts";
// import Timeline from "react-visjs-timeline";
// import "./Gantt.style.css";

const GanttChart = () => {
  //   const options = {
  //     width: "100%",
  //     stack: false,
  //     stackSubgroups: false,
  //     showMajorLabels: true,
  //     showCurrentTime: true,
  //     zoomMin: 0,
  //     zoomable: true,
  //     selectable: true,
  //   };

  //   const groups = [
  //     {
  //       id: "a_583ef9c4-7a9e-42cd-8c61-3e0483be9b58",
  //       content: "Actual/Remaining",
  //     },
  //     {
  //       id: "b_583ef9c4-7a9e-42cd-8c61-3e0483be9b58",
  //       content: "Base Line",
  //     },
  //     {
  //       id: "583ef9c4-7a9e-42cd-8c61-3e0483be9b58",
  //       content: "MV-RHZ358-R02B",
  //       nestedGroups: [
  //         "a_583ef9c4-7a9e-42cd-8c61-3e0483be9b58",
  //         "b_583ef9c4-7a9e-42cd-8c61-3e0483be9b58",
  //       ],
  //       showNested: true,
  //     },
  //     // Add more groups as needed
  //   ];

  //   const items = [
  //     {
  //       id: "583ef9c4-7a9e-42cd-8c61-3e0483be9b58_1",
  //       start: "2024-02-12T12:00:00Z",
  //       end: "2024-02-20T14:30:00Z",
  //       group: "a_583ef9c4-7a9e-42cd-8c61-3e0483be9b58",
  //       subgroup: "a_sg_583ef9c4-7a9e-42cd-8c61-3e0483be9b58",
  //       style: "background-color: orange",
  //     },
  //     {
  //       id: "583ef9c4-7a9e-42cd-8c61-3e0483be9b58_2",
  //       start: "2024-01-12T09:30:00Z",
  //       end: "2024-02-29T16:00:00Z",
  //       group: "b_583ef9c4-7a9e-42cd-8c61-3e0483be9b58",
  //       subgroup: "b_sg_583ef9c4-7a9e-42cd-8c61-3e0483be9b58",
  //       style: "background-color: #FFCC00",
  //     },
  //     // Add more items as needed
  //   ];

  const series = [
    // George Washington
    {
      name: "Appointment",
      data: [
        {
          x: "Condition",
          y: [new Date(1789, 3, 30).getTime(), new Date(1797, 2, 4).getTime()],
        },
      ],
    },
    // John Adams
    {
      name: "John Adams",
      data: [
        {
          x: "Condition",
          y: [new Date(1797, 2, 4).getTime(), new Date(1801, 2, 4).getTime()],
        },
      ],
    },
    // Thomas Jefferson
    {
      name: "Thomas Jefferson",
      data: [
        {
          x: "Condition",
          y: [new Date(1801, 2, 4).getTime(), new Date(1809, 2, 4).getTime()],
        },
      ],
    },
  ];

  const options = {
    chart: {
      height: 120,
      type: "rangeBar",
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      labels: {
        show: false, // Set this to false to hide x-axis labels
      },
      tickAmount: 0,
    },
    yaxis: {
      labels: {
        show: false, // Set this to false to hide y-axis labels
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "30%",
        rangeBarGroupRows: true,
      },
      rangeBar: {
        dataLabels: {
          enabled: false, // Hide data labels for rangeBar chart
        },
      },
    },
    colors: [
      "#10DEC6",
      "#FFC700",
      "#008FFB",
      "#00E396",
      "#FEB019",
      "#FF4560",
      "#775DD0",
      "#3F51B5",
      "#546E7A",
      "#D4526E",
      "#8D5B4C",
      "#F86624",
      "#D7263D",
      "#1B998B",
      "#2E294E",
      "#F46036",
      "#E2C044",
    ],
    fill: {
      type: "solid",
    },

    // xaxis: {
    //   //   type: "datetime",
    //   label: {
    //     show: false,
    //   },
    //   axisBorder: {
    //     show: false,
    //   },
    // },

    // yaxis: {
    //   label: {
    //     show: false,
    //   },
    //   axisBorder: {
    //     show: false,
    //   },
    // },

    legend: {
      position: "right",
    },

    // tooltip: {
    //   custom: function (opts) {
    //     const fromYear = new Date(opts.y1).getFullYear();
    //     const toYear = new Date(opts.y2).getFullYear();

    //     const w = opts.ctx.w;
    //     let ylabel = w.globals.labels[opts.dataPointIndex];
    //     let seriesName = w.config.series[opts.seriesIndex].name
    //       ? w.config.series[opts.seriesIndex].name
    //       : "";
    //     const color = w.globals.colors[opts.seriesIndex];

    //     return (
    //       '<div class="apexcharts-tooltip-rangebar">' +
    //       '<div> <span class="series-name" style="color: ' +
    //       color +
    //       '">' +
    //       (seriesName ? seriesName : "") +
    //       "</span></div>" +
    //       '<div> <span class="category">' +
    //       ylabel +
    //       ' </span> <span class="value start-value">' +
    //       fromYear +
    //       '</span> <span class="separator">-</span> <span class="value end-value">' +
    //       toYear +
    //       "</span></div>" +
    //       "</div>"
    //     );
    //   },
    // },
  };

  return (
    <>
      {/* test
      <Timeline options={options} initialGroups={groups} initialItems={items} /> */}
      <div>
        <div id="chart">
          <ReactApexChart
            options={options}
            series={series}
            type="rangeBar"
            height={120}
          />
        </div>
        <div id="html-dist"></div>
      </div>
    </>
  );
};

export default GanttChart;
