<template>
  <div class="hello">
    <div class="bar_chart">
      <h1>Multiple Bar Chart</h1>
      <Bar
        :chart-options="chartOptions"
        :chart-data="multiplechartData"
        :chart-id="chartId"
        :width="chartWidth"
        :height="chartHeight"
      />
    </div>
    <div class="bar_chart">
      <h1>Single Bar Chart</h1>
      <Bar
        :chart-options="chartOptions"
        :chart-data="singleChartData"
        :chart-id="chartId"
        :width="chartWidth"
        :height="chartHeight"
      />
    </div>
    <div class="bar_chart">
      <h1>Horizontal Bar Chart with Disable Tooltip and Hide Legend</h1>
      <Bar
        :chart-options="horizontalChartOptions"
        :chart-data="horizontalSingleChartData"
        :chart-id="chartId"
        :width="chartWidth"
        :height="chartHeight"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  PluginOptionsByType,
} from "chart.js";
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);
import pattern from "patternomaly"; // use patternomaly

export default defineComponent({
  name: "BarChart",
  components: { Bar },
  setup() {
    // multiple Bar Chart Data [ data ]
    const multipleData = [
      { x: "Jan", net: 100, cogs: 50, gm: 50 },
      { x: "Feb", net: 120, cogs: 55, gm: 75 },
      { x: "Mar", net: 50, cogs: 55, gm: 75 },
      { x: "April", net: 45, cogs: 55, gm: 30 },
    ];
    const multiplechartData = {
      labels: ["Jan", "Feb", "Mar", "April"],
      datasets: [
        {
          label: "Net sales",
          data: multipleData,
          parsing: {
            yAxisKey: "net",
          },
          backgroundColor: "#ff6384",
        },
        {
          label: "Cost of goods sold",
          data: multipleData,
          parsing: {
            yAxisKey: "cogs",
          },
          backgroundColor: "#cc65fe",
        },
        {
          label: "Gross margin",
          data: multipleData,
          parsing: {
            yAxisKey: "gm",
          },
          backgroundColor: "#36a2eb",
        },
      ],
    };

    // single Bar Chart Data with patternomaly package [ data ]
    const singleChartData = {
      labels: ["January", "February", "March", "April"],
      datasets: [
        {
          label: "Single",
          data: [40, 20, 12, 33],
          // data: [{x: 10, y: 20}, {x: 15, y: null}, {x: 20, y: 10}], // hide bar chart
          backgroundColor: pattern.draw("diamond", "#17becf"), // use patternomaly
          borderColor: "#ff6384",
          borderWidth: 2,
          borderSkipped: false, // skip border (TRBL)
          // borderRadius: 2,
          inflateAmount: "auto", // start index pixel get by number
          barPercentage: 0.5, // bar width
          // barThickness: 6,
          // maxBarThickness: 8,
          // minBarLength: 2,
        },
      ],
    };

    // common data [ options ]
    const chartOptions = {
      responsive: true,
      layout: {
        padding: {
          left: 10, // padding-left in canvas
        },
      },
      animation: true, // animation for bar data in initial state
      // interaction: {
      //   mode: 'index' // seen in hover effect (tootip)
      // },
      scales: {
        x: {
          grid: {
            offset: true,
          },
        },
      },
    };
    const chartWidth = 400;
    const chartHeight = 400;
    const chartId = "bar-chart";

    const horizontalSingleChartData = {
      labels: ["January", "February", "March", "April"],
      datasets: [
        {
          label: "Single",
          data: [40, 20, 12, 33],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(255, 205, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
          ],
          barThickness: 20,
        },
      ],
    };
    const horizontalChartOptions = {
      responsive: true,
      indexAxis: "y",
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          enabled: false,
        },
      },
      scales: {
        x: {
          // display: false,
          grid: {
            display: false, // show/hide grid line in x-axis
          },
        },
        y: {
          categorySpacing: 0
        }
      },
    };

    return {
      multiplechartData,
      singleChartData,
      chartOptions,
      chartId,
      chartWidth,
      chartHeight,
      horizontalSingleChartData,
      horizontalChartOptions,
    };
  },
});
</script>

<style lang="sass" scoped>
.hello
  display: flex,
  justify-content: space-around,
  flex-wrap: wrap,

  .bar_chart
    width: 450px,
    margin-top: 50px,
</style>


