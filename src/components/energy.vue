<template>
  <div :id="id">
  </div>
</template>

<script>
import G2 from '@antv/g2'

export default {
  name: 'energy',
  data () {
    return {
      chart: null
    }
  },
  props: {
    chartData: {
      type: Array,
      default: function () {
        return {
          data: [{
            'vehicle': '1',
            'energy': 1.312497623
          },
          {
            'vehicle': '2',
            'energy': 0.008526807
          },
          {
            'vehicle': '3',
            'energy': 0.307542662
          },
          {
            'vehicle': '4',
            'energy': 0.012967101
          },
          {
            'vehicle': '5',
            'energy': 0.015034389
          }]
        }
      }
    },
    id: String
  },
  watch: {
    chartData: function (val, oldVal) {
      console.log('new: %s, old: %s', val, oldVal)
      this.drawChart(val)
    }
  },
  mounted () {
    this.drawChart()
  },
  methods: {
    drawChart (dataes) {
      this.chart && this.chart.destroy()
      let data = dataes
      this.chart = new G2.Chart({
        id: this.id,
        width: 1000,
        height: 250
      })
      this.chart.source(data)
      this.chart.scale('energy', {
        min: 0
      })
      this.chart.scale('vehicle', {
        range: [0, 1]
      })
      this.chart.tooltip({
        crosshairs: {
          type: 'line'
        }
      })
      this.chart.line().position('vehicle*energy')
      this.chart.point().position('vehicle*energy').size(4).shape('circle').style({
        stroke: '#fff',
        lineWidth: 1
      })
      this.chart.render()
    }
  }
}
</script>

<style scoped>

</style>
