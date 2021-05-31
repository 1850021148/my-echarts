import * as echarts from 'echarts'

export default {
  tooltip: {
    trigger: 'axis',
    backgroundColor: 'rgba(50, 50, 50, .8)',
    borderColor: 'rgba(50, 50, 50, .8)',
    textStyle: {
      color: 'white'
    }
  },
  legend: {
    data: ['播放量', '转发量'],
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
    data: ["01","02","03","04","05","06","07","08","09","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30"],
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
      name: '播放量',
      type: 'line',
      data: [30,40,30,40,30,40,30,60,20,40,20,40,30,40,30,40,30,40,30,60,20,40,20,40,30,60,20,40,20,40],
      smooth: true,
      areaStyle: {
        color: new echarts.graphic.LinearGradient(
          0, 
          0, 
          0, 
          1, 
          [
              {
                  offset: 0,
                  color: 'rgba(1, 132, 213, .8)' // 渐变的起始颜色
              }, 
              {
                  offset: 0.8,
                  color: 'rgba(1, 132, 213, 0.1)' // 渐变的结束颜色
              }
          ],
          false
        ),
        shadowColor: 'rgba(1, 132, 213, 0.1)'
      },
      symbol: 'circle',
      showSymbol: false,
      symbolSize: 10,
      itemStyle: {
        color: '#0184D5',
        borderWidth: 10,
        borderColor: 'rgba(200,200,200,.2)'
      }
    },
    {
      name: '转发量',
      type: 'line',
      data: [50,30,50,60,10,50,30,50,60,40,60,40,80,30,50,60,10,50,30,70,20,50,10,40,50,30,70,20,50,10,40],
      smooth: true,
      areaStyle: {
        color: new echarts.graphic.LinearGradient(
          0, 
          0, 
          0, 
          1, 
          [
              {
                  offset: 0,
                  color: 'rgba(0, 216, 135, .8)' // 渐变的起始颜色
              }, 
              {
                  offset: 0.8,
                  color: 'rgba(0, 216, 135, 0.1)' // 渐变的结束颜色
              }
          ],
          false
        ),
        shadowColor: 'rgba(1, 132, 213, 0.1)'
      },
      symbol: 'circle',
      showSymbol: false,
      symbolSize: 10,
      itemStyle: {
        color: '#00D887',
        borderWidth: 10,
        borderColor: 'rgba(200,200,200,.2)'
      }
    },
  ]
};