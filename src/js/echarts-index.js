import * as echarts from 'echarts'
import { $ } from './utils.js'

for (let i = 1; i < 8; i++) {
  import(`./echarts${i}.config.js`).then(({default: result}) => {
    const el = $(`#echarts${i}`)
    const myChart = echarts.init(el)
    myChart.setOption(result)
    window.addEventListener('resize', myChart.resize)
  })
}