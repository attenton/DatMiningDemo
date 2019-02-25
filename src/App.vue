<template>
  <div id="app">
    <h1>新能源汽车充电能量预测</h1>
    <div id>
      <div style="margin: 20px auto">
        <el-select v-model="vId" filterable style="margin: 0 10px 0" placeholder="请选择车辆">
            <el-option value="1" label="1.车辆一">1.车辆一</el-option>
            <el-option value="2" label="2.车辆二">2.车辆二</el-option>
            <el-option value="3" label="3.车辆三">3.车辆三</el-option>
            <el-option value="4" label="4.车辆四">4.车辆四</el-option>
            <el-option value="5" label="5.车辆五">5.车辆五</el-option>
            <el-option value="6" label="6.车辆六">6.车辆六</el-option>
            <el-option value="7" label="7.车辆七">7.车辆七</el-option>
            <el-option value="8" label="8.车辆八">8.车辆八</el-option>
            <el-option value="9" label="9.车辆九">9.车辆九</el-option>
            <el-option value="10" label="10.车辆十">10.车辆十</el-option>
            <el-option value="11" label="11.车辆十一">11.车辆十一</el-option>
            <el-option value="12" label="12.车辆十二">12.车辆十二</el-option>
            <el-option value="13" label="13.车辆十三">13.车辆十三</el-option>
            <el-option value="14" label="14.车辆十四">14.车辆十四</el-option>
            <el-option value="15" label="15.车辆十五">15.车辆十五</el-option>
            <el-option value="16" label="16.车辆十六">16.车辆十六</el-option>
            <el-option value="17" label="17.车辆十七">17.车辆十七</el-option>
            <el-option value="18" label="18.车辆十八">18.车辆十八</el-option>
            <el-option value="19" label="19.车辆十九">19.车辆十九</el-option>
            <el-option value="20" label="20.车辆二十">20.车辆二十</el-option>
            <el-option value="21" label="20">21.车辆二十一</el-option>
          </el-select>
        <el-select v-model="mId" filterable placeholder="请选择模型">
          <el-option value="0" label="1.线性回归模型">1.线性回归模型</el-option>
          <el-option value="2" label="2.SVR(线性核)模型">2.SVR(线性核)模型</el-option>
          <el-option value="4" label="3.SVR(RBF核)模型预测值">3.SVR(RBF核)模型预测值</el-option>
          <el-option value="5" label="4.决策树回归模型预测值">4.决策树回归模型预测值</el-option>
          <el-option value="6" label="5.自适应增强决策树模型预测值">5.自适应增强决策树模型预测值</el-option>
          <el-option value="7" label="6.随机森林模型预测值">6.随机森林模型预测值</el-option>
          <el-option value="8" label="7.极端随机森林模型预测值">7.极端随机森林模型预测值</el-option>
          <el-option value="9" label="8.打包回归模型预测值">8.打包回归模型预测值</el-option>
          <el-option value="10" label="9.梯度提升模型预测值">9.梯度提升模型预测值</el-option>
          <el-option value="11" label="10.X梯度提升模型预测值">10.X梯度提升模型预测值</el-option>
          <el-option value="12" label="11.多层神经网络模型预测值">11.多层神经网络模型预测值</el-option>
        </el-select>
      </div>
      <div class="block">
        <span class="demonstration"></span>
        <el-date-picker
          v-model="time"
          type="datetimerange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        value-format="timestamp"
        style="margin: 0 20px 0">
        </el-date-picker>
          <el-button @click="getData">查询</el-button>
      </div>
    </div>
    <div id="chart">
      <energy class="chart" :chartData="energyData" :id="'c1'"></energy>
      <temperature class="chart" :chartData="temperatureData" :id="'c3'"></temperature>
      <mileage class="chart" :chartData="mileageData" :id="'c4'"></mileage>
      <voltage_current class="chart" :chartData="voltageCurrentData" :id="'c5'"></voltage_current>
    </div>
  </div>
</template>

<script>
import G2Line from './components/G2Line.vue'
import energy from './components/energy.vue'
import axios from 'axios'
import qs from 'qs'

export default {
  name: 'App',
  comments: {
    G2Line,
    energy
  },
  data () {
    return {
      energyData: [],
      temperatureData: [],
      mileageData: [],
      voltageCurrentData: [],
      vId: null,
      mId: null,
      type: 1,
      time: []
    }
    //   energyData: [],
    //   temperatureData: [],
    //   mileageData: [],
    //   voltageCurrentData: []
    // }
  },
  methods: {
    getData () {
      axios({
        url: 'http://10.131.247.210:8081/dmpj/getData',
        // url: 'http://10.222.220.205:8081/dmpj/getData',
        method: 'post',
        // data: qs.stringify({vId: 4, mId: 1, type: 1, sTime: 1513273411, eTime: 1513393411}),
        data: qs.stringify({vId: this.vId, mId: this.mId, type: this.type, sTime: this.time[0] / 1000, eTime: this.time[1] / 1000}),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        // .post('http://10.131.247.206:8081/dmpj/getData', {'vId': 4, 'mId': 1, 'type': 4, 'sTime': 1510993411, 'eTime': 1513393411})
        .then(response => {
          this.energyData = response.data.data.energyData
          this.temperatureData = response.data.data.temperatureData
          this.voltageCurrentData = response.data.data.voltageCurrentData
          this.mileageData = response.data.data.mileageData
          console.log(response.data)
          console.log(this.time[0] / 1000)
          console.log(this.time[1] / 1000)
        })
        .catch(error => (console.log(error)))
    }
  },
  mounted () {
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
#chart{
  margin: 0 auto;
  width: 90%;
}
.chart{
  float: left;
  margin: 20px;
}
</style>
