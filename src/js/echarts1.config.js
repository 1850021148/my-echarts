export default {
  color: ['rgb(69,128,212)'],
  tooltip: {
    trigger: 'axis',
    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
      type: 'shadow',
    },
    formatter: '{a}<br />{b}: {c}',
    backgroundColor: 'rgba(50,50,50,0.7)',
    borderColor: 'rgba(50,50,50,0.7)',
    textStyle: {
      color: 'white'
    }
  },
  grid: {
    left: '5%',
    right: '5%',
    bottom: '10%',
    top: '10%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    data: ['旅游行业', '教育培训', '游戏行业', '医疗行业', '电商行业', '社交行业', '金融行业'],
    axisTick: {
      alignWithLabel: true
    },
    axisLabel: {
      color: 'lightgray',
      fontSize: '12px'
    },
    axisLine: {
      show: false,
    },
    axisTick: {
      show: false
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
    splitLine: {
      lineStyle: {
        color: '#343A53'
      }
    },
    axisTick: {
      show: false
    }
  },
  series: [
    {
      name: '就业行业',
      type: 'bar',
      barWidth: '32%',
      data: [10, 52, 200, 334, 390, 330, 220],
      itemStyle: {
        borderRadius: [5,5,0,0]
      }
    },
  ]
}