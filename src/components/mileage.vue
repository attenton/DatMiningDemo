<template>
  <div :id="id">
  </div>
</template>

<script>
import G2 from '@antv/g2'
import DataSet from '@antv/data-set'

export default {
  name: 'mileage',
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
          data: []
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
    drawChart () {
      this.chart && this.chart.destroy()
      this.chart = new G2.Chart({
        container: this.id,
        width: 600,
        height: 300
      })
      let ds = new DataSet()
      let dv = ds.createView().source(this.chartData)
      dv.transform({
        type: 'fold',
        fields: ['max', 'min'],
        key: 'Max_Min',
        value: 'temperature'
      })
      this.chart.source(dv, {
        'vehicle': {
          range: [0, 1]
        }
      })
      this.chart.tooltip({
        crosshairs: {
          type: 'line'
        }
      })
      this.chart.line().position('vehicle*temperature').color('Max_Min').shape('smooth')
      this.chart.point().position('vehicle*temperature').color('Max_Min').size(4).shape('circle').style({
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
