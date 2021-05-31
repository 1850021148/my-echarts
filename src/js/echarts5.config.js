export default {
  grid: {
    left: '5%',
    right: '5%',
    top: '5%',
    bottom: '5%',
    containLabel: true
  },
  xAxis: {
    show: false
  },
  yAxis: [
    {
      type: 'category',
      data: ['NODE', 'VUE', 'javascript', 'CSS3', 'HTML5'],
      axisLabel: {
        color: 'white'
      },
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
    },
    {
      data: [664, 793, 610, 350, 702],
      axisLabel: {
        color: 'white'
      },
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
    }
  ],
  series: [
    {
      type: 'bar',
      data: [66, 79, 61, 35, 70],
      barWidth: '30%',
      itemStyle: {
        barBorderRadius: 100,
        color(params) {
          const colors = ['#8B78F6', '#F8B448', '#56D0E3', 'rgb(245,116,116)', 'rgb(16,137,231)']
          return colors[params.dataIndex]
        }
      },
      label: {
        show: true,
        formatter: '{c}%'
      },
      yAxisIndex: 1,
    },
    {
      type: 'bar',
      data: [100, 100, 100, 100, 100],
      barWidth: '50%',
      itemStyle: {
        borderRadius: 100,
        borderColor: '#00C1DE',
        borderWidth: 2,
        color: 'none'
      },
      yAxisIndex: 0,
    }
  ]
}