<template>
  <div class="mix-chart">
    <h2>Mixed Chart(Bar & Line)</h2>
    <Bar
      :chart-options="chartOption"
      :chart-data="chartData"
      :width="400"
      :height="400"
      :plugins="plugins"
    />
    <!-- <img src="../assets/logo.png" alt=""> -->
  </div>
</template>
<script setup lang="ts">
import { Bar } from "vue-chartjs";
import { Chart, LineController, PointElement, LineElement } from "chart.js";
import dataLabels from "chartjs-plugin-datalabels";
Chart.register(LineController, PointElement, LineElement);

// const canvas = document.getElementById('doughnut') as HTMLCanvasElement

const img = new Image();
img.src = "https://picsum.photos/id/237/200/300";

const chartData = {
  labels: ["jan", "feb", "march", "april", "may", "june", "july"],
  datasets: [
    {
      type: "bar",
      label: "Bar Component",
      data: [10, 20, 30],
      // backgroundColor: fillPattern,
      backgroundColor: "#ff6384",
      order: 2,
    },
    {
      type: "line",
      label: "Line Component",
      data: [30, 25, 0],
      backgroundColor: "#36a2eb",
      borderColor: "#36a2eb",
      order: 1,
    },
  ],
};
const chartOption = {
  plugins: {
    legend: {
      display: true,
      position: "right",
      align: "start",
      labels: {
        boxWidth: 20,
        boxHeight: 20,
        font: {
          size: 14,
          style: "italic",
          weight: "bold",
          lineHeight: 1,
        },
        padding: 20,
      },
    },
    datalabels: {
      borderRadius: 4,
      font: {
        weight: "bold",
      },
      formatter: Math.round,
      padding: 6,
      listeners: {
        enter: function (context: any, event: any) {
          context.hovered = true;
          return true;
        },
        leave: function (context: any, event: any) {
          context.hovered = false;
          return true;
        },
      },
      color: function (context: any) {
        return context.hovered ? context.dataset.backgroundColor : "white";
      },
      backgroundColor: function (context: any) {
        return context.hovered ? "white" : context.dataset.backgroundColor;
      },
    },
  },
  animations: {
    tension: {
      duration: 1000,
      easing: "linear",
      from: 1,
      to: 0,
      loop: true,
    },
  },
  scales: {
    y: {
      grid: {
        display: false,
        color: "#000000",
      },
      max: 60, //show min and max for y-axis
      min: 0,
      ticks: {
        display: true,
        padding: 10,
        stepSize: 5,
        color: "#36a2eb",
        font: {
          weight: "bold",
        },
        beginAtZero: 0,
        callback: function (v: any, index: any, value: any) {
          return ("amount - " + v).toUpperCase();
        },
      },
    },
    x: {
      grid: {
        display: false,
      },
      ticks: {
        padding: 0,
        color: "#ff6384",
        font: {
          weight: "bold",
        },
      },
    },
  },
};

const plugins = [dataLabels];
</script>

<style lang="sass" scoped>
.mix-chart
  width: 600px,
  margin: 0 auto,
  padding-bottom: 50px,

  h2
    margin: 30px 0,
</style>
