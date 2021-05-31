export default {
  color: ['#00F2F1', '#ED3F35'],
  tooltip: {
    trigger: 'axis',
    backgroundColor: 'rgba(50, 50, 50, .8)',
    borderColor: 'rgba(50, 50, 50, .8)',
    textStyle: {
      color: 'white'
    }
  },
  legend: {
    data: ['新增粉丝', '新增游客'],
    right: '10px',
    textStyle: {
      color: '#4895F6'
    },
  },
  grid: {
    left: '5%',
    right: '5%',
    top: '18%',
    bottom: '5%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    axisLabel: {
      color: 'lightgray'
    },
    axisLine: {
      show: false,
    },
    axisTick: {
      show: false,
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: '#343A53'
      }
    },
  },
  yAxis: {
    type: 'value',
    axisLabel: {
      color: 'lightgray'
    },
    axisLine: {
      show: false,
    },
    axisTick: {
      show: false,
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: '#343A53'
      }
    },
  },
  series: [
    {
      name: '新增粉丝',
      type: 'line',
      data: [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
      smooth: true,
    },
    {
      name: '新增游客',
      type: 'line',
      data: [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79],
      smooth: true,
    },
  ]
};