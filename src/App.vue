<template>
  <div>
    <energy :chartData="serverData" :id= "'c1'" ></energy>
    <G2Line :charData="serverData" :id="'c2'"></G2Line>
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
      serverData: []
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
