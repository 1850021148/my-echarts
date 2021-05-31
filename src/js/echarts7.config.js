const colors = ['#006CFF', '#60CDA0', '#ED8884', '#FF9F7F', '#0096FF', '#9FE6B8', '#32C5E9', '#1D9DFF']

export default {
  color: colors,
  legend: {
    bottom: '5%',
    itemWidth: 10,
    itemHeight: 10,
    textStyle: {
      color: 'lightgray',
      fontSize: '10px'
    }
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a}<br />{b}: {c} ({d}%)',
    backgroundColor: 'rgba(50,50,50,0.7)',
    borderColor: 'rgba(50,50,50,0.7)',
    textStyle: {
      color: 'white'
    }
  },
  series: [
    {
      name: '地区分布',
      type: 'pie',
      roseType: 'radius',
      radius: ['10%', '60%'],
      center: ['50%', '40%'],
      data: [
        { value: 20, name: '云南' },
        { value: 26, name: '北京' },
        { value: 24, name: '山东' },
        { value: 25, name: '河北' },
        { value: 20, name: '江苏' },
        { value: 25, name: '浙江' },
        { value: 30, name: '深圳' },
        { value: 42, name: '广东' }
      ],
      labelLine: {
        smooth: 0.2,
        length: 6,
        length2: 8
      },
      label: {
        textBorderWidth: 0,
        fontSize: 10,
        color: colors
      },

      animationType: 'scale',
      animationEasing: 'elasticOut',
      animationDelay: function (idx) {
        return Math.random() * 200;
      }
    }
  ]
}