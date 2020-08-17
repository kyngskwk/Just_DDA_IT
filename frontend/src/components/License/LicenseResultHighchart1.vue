<template>
  <highcharts id="container" class="m-4 chart-text" :options="varialbepieOptions"></highcharts>
</template>

<script>
import { Chart } from "highcharts-vue";
import Highcharts from "highcharts";
import VariablePie from "highcharts/modules/variable-pie";

VariablePie(Highcharts);

export default {
  name: "LicenseResultHighchart1",
  components: {
    highcharts: Chart,
  },
  props: {
    acq_list: {
      type: Object
    }
  },
  mounted: function() {
    if (this.acq_list.length !== 0) {
      this.varialbepieOptions.series[0].data = this.acq_list  
    } else {
      this.varialbepieOptions.series[0].data = [
              {
                name: "미상",
                y: 6,
                z: 92,
              },
              {
                name: "전문대 재학",
                y: 8,
                z: 55,
              },
              {
                name: "전문대 졸업",
                y: 13,
                z: 124,
              },
              {
                name: "대학 재학",
                y: 51,
                z: 188,
              },
              {
                name: "대학 졸업",
                y: 28,
                z: 137,
              },
              {
                name: "기타",
                y: 4,
                z: 21,
              },
            ]
    }
  },
  computed: {
    percent: function() {
      let arr = this.varialbepieOptions.series[0].data
      let maxValue = 0
      for (var i = 0; i < arr.length; i++) {
        if (arr[i].y >= maxValue) {
          maxValue = arr[i].y
        }
      }
      return maxValue
    }
  },
  data: function () {
    return {
      // variablepie를 위한 옵션설정
      varialbepieOptions: {
        chart: {
          type: "variablepie",
        },
        title: {
          text:
            `취득자 별 정보`,
        },
        subtitle: {
          text:
            '출처: <a href="http://ec.europa.eu/eurostat/web/' +
            'labour-market/labour-costs/main-tables">공공데이터포털</a>',
        },
        tooltip: {
          headerFormat: "",
          pointFormat:
            '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
            "전체 수험생 중 비율: <b>{point.y} % </b><br/> " +
            "응시자 수: <b>{point.z}</b><br/>",
        },
        series: [
          {
            minPointSize: 10,
            innerSize: "20%",
            zMin: 0,
            name: "countries",
            data: [
              {
                name: "미상",
                y: 6,
                z: 92,
              },
              {
                name: "전문대 재학",
                y: 8,
                z: 55,
              },
              {
                name: "전문대 졸업",
                y: 13,
                z: 124,
              },
              {
                name: "대학 재학",
                y: 51,
                z: 188,
              },
              {
                name: "대학 졸업",
                y: 28,
                z: 137,
              },
              {
                name: "기타",
                y: 4,
                z: 21,
              },
            ],
          },
        ],
      },
    };
  },
};
</script>

<style scoped>
.chart-text {
  font-family: "Black Han Sans", sans-serif;
}
/* for highchart VariablePie */
#container {
  height: 500px;
}

.highcharts-figure,
.highcharts-data-table table {
  min-width: 320px;
  max-width: 800px;
  margin: 1em auto;
}

.highcharts-data-table table {
  font-family: Verdana, sans-serif;
  border-collapse: collapse;
  border: 1px solid #ebebeb;
  margin: 10px auto;
  text-align: center;
  width: 100%;
  max-width: 500px;
}
.highcharts-data-table caption {
  padding: 1em 0;
  font-size: 1.2em;
  color: #555;
}
.highcharts-data-table th {
  font-weight: 600;
  padding: 0.5em;
}
.highcharts-data-table td,
.highcharts-data-table th,
.highcharts-data-table caption {
  padding: 0.5em;
}
.highcharts-data-table thead tr,
.highcharts-data-table tr:nth-child(even) {
  background: #f8f8f8;
}
.highcharts-data-table tr:hover {
  background: #f1f7ff;
}
</style>