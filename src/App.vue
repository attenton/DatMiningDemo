<template>
  <div>
    <energy :chartData="energyData" :id="'c1'"></energy>
    <G2Line :charData="serverData" :id="'c2'"></G2Line>
    <temperature :chartData="temperatureData" :id="'c3'"></temperature>
    <mileage :chartData="mileageData" :id="'c3'"></mileage>
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
      energyData: [{
        'vehicle': '1',
        'predict_energy': 0.012497623,
        'actual_energy': 0.047443
      },
      {
        'vehicle': '2',
        'predict_energy': 0.008526807,
        'actual_energy': 0.07567443
      },
      {
        'vehicle': '3',
        'predict_energy': 0.307542662,
        'actual_energy': 0.07863443
      },
      {
        'vehicle': '4',
        'predict_energy': 0.012967101,
        'actual_energy': 0.0234443
      },
      {
        'vehicle': '5',
        'predict_energy': 0.015034389,
        'actual_energy': 0.03423443
      }],
      serverData: [{
        year: '2010',
        value: 3
      }, {
        year: '2011',
        value: 4
      }, {
        year: '2012',
        value: 3.5
      }, {
        year: '2013',
        value: 5
      }, {
        year: '2014',
        value: 4.9
      }, {
        year: '2015',
        value: 6
      }, {
        year: '2016',
        value: 7
      }, {
        year: '2017',
        value: 9
      }, {
        year: '2018',
        value: 13
      }],
      temperatureData:[
        {
          vehicle: '1',
          max: 24,
          min: 12
        },
        {
          vehicle: '2',
          max: 20,
          min: 9
        },
        {
          vehicle: '3',
          max: 27,
          min: 10
        },
        {
          vehicle: '4',
          max: 33,
          min: 24
        },
        {
          vehicle: '5',
          max: 10,
          min: -2
        }
      ],
      mileageData: [
        {

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
</style>
