<template>
  <highcharts 
    id="container"
    class="m-4 chart-text" 
    :options="variwideOptions"
    >
  </highcharts>
</template>

<script>
import {Chart} from 'highcharts-vue'
import Highcharts from 'highcharts'
import Variwide from 'highcharts/modules/variwide'
import ExportData from 'highcharts/modules/export-data'
import Exporting from 'highcharts/modules/exporting'
import Accessibility from 'highcharts/modules/accessibility'


Variwide(Highcharts)
ExportData(Highcharts)
Exporting(Highcharts)
Accessibility(Highcharts)

export default {
  name: 'LicenseResultHighchart2',
  components: {
    highcharts: Chart
  },
  props:{
    avgObject: {
      type: Object
    }
  },
  data: function() {
    return {
      // variwide를 위한 옵션 설정
      variwideOptions: {
        chart: {
    type: 'variwide'
  },

  title: {
    text: '아시나요? 합격자의 57퍼센트는 120시간 이상 공부했습니다.'
  },

  xAxis: {
    type: 'category'
  },

  caption: {
    text: '하루 공부 시간'
  },

  legend: {
    enabled: false
  },

  series: [{
    name: '공부량',
    data: [
      ['4%', 180, 60],
      ['12%', 169, 117],
      ['11%', 142, 143],
      ['24%', 127, 350],
      ['42%', 114, 220],
      ['19%', 102, 206],
      ['7%', 89, 180],
    ],
    dataLabels: {
      enabled: true,
      format: '{point.y:.0f}시간'
    },
    tooltip: {
      pointFormat: '하루 공부 시간: <b> {point.y}시간</b><br>' +
        '인원: <b> {point.z}명</b><br>'
    },
    colorByPoint: true
  }]
      
      
      
      }
    }
  }

}
</script>

<style scoped>
/* for highchart VariablePie */
#container {
  height: 500px;
} 

.highcharts-figure,
.highcharts-data-table table {
  min-width: 320px;
  max-width: 700px;
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