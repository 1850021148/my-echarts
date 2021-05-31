export default {
  color: ['#065AAB', '#066EAB', '#0682AB', '#0696AB', '#06A0AB'],
  tooltip: {
    trigger: 'item',
    formatter: '{a}<br />{b}: {c} ({d}%)',
    backgroundColor: 'rgba(50,50,50,0.7)',
    borderColor: '#333',
    textStyle: {
      color: 'white'
    }
  },
  legend: {
    bottom: '5%',
    left: 'center',
    orient: 'horizontal',
    itemWidth: 10,
    itemHeight: 10,
    textStyle: {
      color: 'lightgray'
    }
  },
  series: [
    {
      name: '年龄分布',
      type: 'pie',
      radius: ['40%', '60%'],
      center: ['50%', '40%'],
      avoidLabelOverlap: false,
      label: {
        show: false,
        // position: 'center'
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 1, name: '0岁以下' },
        { value: 4, name: '20-29岁' },
        { value: 2, name: '30-30岁' },
        { value: 2, name: '40-49岁' },
        { value: 1, name: '50岁以上' }
      ]
    }
  ]
}