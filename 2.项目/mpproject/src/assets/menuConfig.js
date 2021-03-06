const menuList = [
  {
    title: '首页', // 菜单标题名称
    key: '/home', // 对应的 path
    icon: 'home', // 图标名称
  },
  {
    title: 'vue语法',
    key: '/vue/grammar',
    icon: 'icon-tuichu',
    children: [ // 子菜单列表
      {
        title: 'vue 自定义事件',
        key: '/direction',
        icon: 'icon-tuichu'
      },
      {
        title: '商品管理',
        key: '/product',
        icon: 'icon-tuichu',
      },
    ]
  },
  {
    title: '用户管理',
    key: '/user',
    icon: 'icon-user'
  },
  {
    title: '角色管理',
    key: '/role',
    icon: 'safety',
  },
  {
    
    title: '图形图表',
    key: '/charts',
    icon: 'area-chart',
    children: [
      {
        title: '柱形图',
        key: '/charts/bar',
        icon: 'bar-chart'
      },
      {
        title: '折线图',
        key: '/charts/line',
        icon: 'line-chart'
      },
      {
        title: '饼图',
        key: '/charts/pie',
        icon: 'pie-chart'
      },
    ]
  },
]
export default menuList
