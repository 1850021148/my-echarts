import { $, $$ } from './js/utils.js'
import './js/echarts-index.js'
import './index.less'
import img_map from './images/map.png'
import img_internetMap from './images/internet-map.png'
import img_arrow from './images/arrow.png'
import img_grid from './images/grid.png'

// 处理html中img[src]的导入
$('.img_map').src = img_map
$('.img_internet-map').src = img_internetMap
$('.img_arrow').src = img_arrow
$$('.echarts-item .inner').forEach(item => item.style.backgroundImage = `url('${img_grid}')`)

// renderTime
function renderTime() {
  const now = new Date()
  $('.time').textContent = '当前时间: ' + now.toLocaleDateString() + ' ' + now.toLocaleTimeString()
}
renderTime()
setInterval(renderTime, 1000)