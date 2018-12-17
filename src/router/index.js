import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import energy from '@components/energy'
import mileage from '@components/mileage'
import temperature from '@components/temperature'
import voltage_current from '@components/voltage_current'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'energy',
      component: energy
    },
    {
      path: '/',
      name: mileage,
      component: mileage
    },
    {
      path: '/',
      name: 'temperature',
      component: temperature
    },
    {
      path: '/',
      name: 'voltage_current',
      component: voltage_current
    }
  ]
})
