<template>
  <div :id="id"></div>
</template>

<script>
import G2 from '@antv/g2'
export default {
  data () {
    return {
      chart: null
    }
  },
  props: {
    charData: {
      type: Array,
      default: function () {
        return {
          data: [{
            year: '1991',
            value: 3
          }, {
            year: '1992',
            value: 4
          }, {
            year: '1993',
            value: 3.5
          }, {
            year: '1994',
            value: 5
          }, {
            year: '1995',
            value: 4.9
          }, {
            year: '1996',
            value: 6
          }, {
            year: '1997',
            value: 7
          }, {
            year: '1998',
            value: 9
          }, {
            year: '1999',
            value: 13
          }]
        }
      }
    },
    id: String
  },
  mounted () {
    this.drawChart()
  },
  // 监听API接口传过来的数据  2018-08-21更新
  watch: {
    charData: function (val, oldVal) {
      console.log('new: %s, old: %s', val, oldVal)
      this.drawChart(val)
    }
  },
  methods: {
    drawChart: function (datas) {
      this.chart && this.chart.destory()
      this.chart = new G2.Chart({
        container: this.id,
        width: 600,
        height: 300
      })
      this.chart.source(datas)
      this.chart.scale('value', {
        min: 0
      })
      this.chart.scale('year', {
        range: [0, 1]
      })
      this.chart.tooltip({
        crosshairs: {
          type: 'line'
        }
      })
      this.chart.line().position('year*value')
      this.chart.point().position('year*value').size(4).shape('circle').style({
        stroke: '#fff',
        lineWidth: 1
      })
      this.chart.render()
    }
  }
}
</script>
