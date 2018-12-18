<template>
  <div>
    <energy class="chart" :chartData="energyData" :id="'c1'"></energy>
    <temperature class="chart" :chartData="temperatureData" :id="'c3'"></temperature>
    <mileage class="chart" :chartData="mileageData" :id="'c4'"></mileage>
    <voltage_current class="chart" :chartData="voltage_currentData" :id="'c5'"></voltage_current>
  </div>
</template>

<script>
import G2Line from './components/G2Line.vue'
import energy from './components/energy.vue'

export default {
  name: 'App',
  comments: {
    G2Line,
    energy
  },
  data () {
    return {
      energyData: [
        {
          'time': '2015/12/12/12:13-2015/12/12/13:13',
          start_soc: 10,
          end_soc: 20,
          predict_energy: 0.08526807,
          actual_energy: 0.07567443
        },
        {
          'time': '2015/12/12/14:13-2015/12/12/15:13',
          start_soc: 20,
          end_soc: 30,
          predict_energy: 0.012967101,
          actual_energy: 0.0234443
        },
        {
          'time': '2015/12/12/15:17-2015/12/12/15:19',
          start_soc: 10,
          end_soc: 40,
          predict_energy: 0.015034389,
          actual_energy: 0.03423443
        },
        {
          'time': '2015/12/12/16:13-2015/12/12/17:13',
          start_soc: 10,
          end_soc: 45,
          predict_energy: 0.012497623,
          actual_energy: 0.047443
        },
        {
          'time': '2015/12/12/18:13-2015/12/12/19:13',
          start_soc: 10,
          end_soc: 35,
          predict_energy: 0.0607542662,
          actual_energy: 0.07863443
        }
      ],
      temperatureData: [
        {
          'time': '2015/12/12/12:13-2015/12/12/13:13',
          max_temperature: 34,
          min_temperature: 12
        },
        {
          'time': '2015/12/12/14:13-2015/12/12/15:13',
          max_temperature: 20,
          min_temperature: 9
        },
        {
          'time': '2015/12/12/15:17-2015/12/12/15:19',
          max_temperature: 27,
          min_temperature: 10
        },
        {
          'time': '2015/12/12/16:13-2015/12/12/17:13',
          max_temperature: 33,
          min_temperature: 24
        },
        {
          'time': '2015/12/12/18:13-2015/12/12/19:13',
          max_temperature: 10,
          min_temperature: -2
        }
      ],
      mileageData: [
        {
          'time': '2015-12-12 13:13',
          mileage: 12
        },
        {
          'time': '2015-12-12 14:13',
          mileage: 15
        },
        {
          'time': '2015-12-12 15:13',
          mileage: 20
        },
        {
          'time': '2015-12-12 16:13',
          mileage: 29
        },
        {
          'time': '2015-12-12 19:13',
          mileage: 40
        }
      ],
      voltage_currentData: [
        {
          time: '2015-12-12 13:13',
          start_voltage: 34,
          end_voltage: 38,
          start_current: 12,
          end_current: 6
        },
        {
          time: '2015-12-12 14:13',
          start_voltage: 12,
          end_voltage: 34,
          start_current: 45,
          end_current: 34
        },
        {
          time: '2015-12-12 15:13',
          start_voltage: 12,
          end_voltage: 23,
          start_current: 18,
          end_current: 10
        },
        {
          time: '2015-12-12 16:13',
          start_voltage: 4,
          end_voltage: 15,
          start_current: 22,
          end_current: 6
        },
        {
          time: '2015-12-12 19:43',
          start_voltage: 2,
          end_voltage: 33,
          start_current: 2,
          end_current: 26
        }
      ]
    }
  },
  methods: {
    // 此处省略从服务器获取数据并且赋值给this.serverData
    // 推荐使用axios请求接口
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 100%;
  height: 100%;
}
.chart{
  float: left;
}
</style>
