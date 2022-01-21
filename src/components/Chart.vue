<template>
  <div class="chart">
    <label class="chart__label" for="charts">Select a chart type</label>
    <select
      class="chart__select"
      name="charts"
      id="charts"
      v-model="selectedChartType"
    >
      <option
        class="chart__option"
        v-for="(chartType, index) in chartTypes"
        :key="index"
        :value="chartType"
      >
        {{ chartType }}
      </option>
    </select>
    <button class="chart__btn" @click.prevent="insertChart(selectedChartType)">
      Insert
    </button>
    <highcharts
      v-if="isChart"
      :options="allChartOptions[selectedChartType].chartOptions"
    ></highcharts>
  </div>
</template>

<script>
import { Chart } from "highcharts-vue";

export default {
  components: {
    highcharts: Chart,
  },
  data() {
    return {
      isChart: false,
      chartTypes: ["pie", "bar", "line"],
      selectedChartType: "",
      allChartOptions: {
        pie: {
          chartOptions: {
            chart: {
              type: null,
            },
            title: {
              text: "Points scored",
            },
            tooltip: {
              pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
            },
            plotOptions: {
              pie: {
                allowPointSelect: true,
                cursor: "pointer",
                dataLabels: {
                  enabled: true,
                  format: "<b>{point.name}</b>: {point.percentage:.1f} %",
                },
              },
            },
            series: [
              {
                name: "Score",
                colorByPoint: true,
                data: [
                  { name: "Team 1", y: 21.8 },
                  { name: "Team 2", y: 32.7 },
                  { name: "Team 3", y: 10.9 },
                  { name: "Team 4", y: 34.6 },
                ],
              },
            ],
            credits: {
              enabled: false,
            },
          },
        },
        bar: {
          chartOptions: {
            chart: {
              type: null,
            },
            title: {
              text: "Points scored",
            },
            xAxis: {
              categories: ["Team 1", "Team 2", "Team 3", "Team 4"],
              title: {
                text: null,
              },
            },
            yAxis: {
              title: {
                text: "",
              },
            },
            plotOptions: {
              bar: {
                allowPointSelect: true,
                cursor: "pointer",
                dataLabels: {
                  enabled: true,
                },
              },
            },
            series: [
              {
                name: "Period 1",
                data: [
                  {
                    name: "Team 1",
                    y: 24,
                  },
                  { name: "Team 2", y: 40 },
                  { name: "Team 3", y: 15 },
                  { name: "Team 4", y: 35 },
                ],
              },
              {
                name: "Period 2",
                data: [
                  {
                    name: "Team 1",
                    y: 90,
                  },
                  { name: "Team 2", y: 24 },
                  { name: "Team 3", y: 30 },
                  { name: "Team 4", y: 60 },
                ],
              },
            ],
            credits: {
              enabled: false,
            },
            legend: {
              layout: "vertical",
              align: "right",
              verticalAlign: "top",
              x: 0,
              y: 40,
              floating: true,
              borderWidth: 1,
              borderColor: "#fff",
              backgroundColor: "#fff",
              shadow: true,
            },
          },
        },
        line: {
          chartOptions: {
            chart: {
              type: null,
            },
            title: {
              text: "Points scored",
            },
            xAxis: {
              categories: ["Team 1", "Team 2", "Team 3", "Team 4"],
              title: {
                text: null,
              },
            },
            yAxis: {
              title: {
                text: "",
              },
            },
            plotOptions: {
              line: {
                allowPointSelect: true,
                cursor: "pointer",
                dataLabels: {
                  enabled: true,
                },
              },
            },
            series: [
              {
                name: "Period 1",
                data: [
                  {
                    name: "Team 1",
                    y: 24,
                  },
                  { name: "Team 2", y: 40 },
                  { name: "Team 3", y: 15 },
                  { name: "Team 4", y: 35 },
                ],
              },
              {
                name: "Period 2",
                data: [
                  {
                    name: "Team 1",
                    y: 90,
                  },
                  { name: "Team 2", y: 24 },
                  { name: "Team 3", y: 30 },
                  { name: "Team 4", y: 60 },
                ],
              },
            ],
            credits: {
              enabled: false,
            },
            legend: {
              layout: "vertical",
              align: "right",
              verticalAlign: "top",
              x: 0,
              y: 40,
              floating: true,
              borderWidth: 1,
              borderColor: "#fff",
              backgroundColor: "#fff",
              shadow: true,
            },
          },
        },
      },
    };
  },

  methods: {
    insertChart(selectedChartType) {
      this.allChartOptions[selectedChartType].chartOptions.chart.type =
        this.selectedChartType;
      this.isChart = true;
    },
  },
};
</script>

<style lang="scss">
.chart {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;

  &__label,
  &__select,
  &__btn {
    margin: 5px 20px;
  }

  &__label {
    text-transform: uppercase;
    font-weight: 500;
  }

  &__select {
    width: 150px;
    text-transform: uppercase;
  }

  &__option {
    text-transform: uppercase;
    text-align: center;
  }

  &__btn {
    text-transform: uppercase;
    padding: 5px;
    width: 150px;
    background: hsl(0, 0%, 20%);
    color: hsl(0, 0%, 100%);
    border: 1px solid transparent;
    transition: all 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
      color: hsl(0, 0%, 20%);
      border: 1px solid hsl(0, 0%, 20%);
      background: hsl(0, 0%, 100%);
    }
  }
}
</style>
