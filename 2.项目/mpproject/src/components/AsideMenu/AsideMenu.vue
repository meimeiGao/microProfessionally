<!--左边菜单栏组件-->
<template>
  <el-menu :dafault-active="$route.path" unique-opened>
    <template v-for="item in menuList" :index="item.title">
      <!-- 有二级菜单时  -->
      <el-submenu v-if="item.children" :index="item.index" :key="item.title">
        <!-- 添加一级菜单图标与菜单名  -->
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>{{item.name}}</span>
        </template>
        <!--
          此时index的值需要绑定的是 "citem.path" ，结合<el-menu>中的 :dafault-active="$route.path" 才可以实现刷新后当前路由高亮
          之前绑定的是 "citem.index" 的值，一直不生效
          相应的，如果只有一级菜单，也需要进行对应的修改
        -->
        <router-link v-for="(citem,cindex) in item.children" :index="citem.path" :to="citem.path" :key="title">
          <el-menu-item :index="citem.path" :key="title">
            <!-- 添加二级菜单图标与菜单名  -->
            <template slot="title">
              <i class="el-icon-tickets"></i>
              <span>{{item.name}}</span>
            </template>
          </el-menu-item>
        </router-link>
      </el-submenu>
      <!-- 只有一级菜单 -->
      <!-- 此处index的值需要绑定的也是path -->
      <el-menu-item v-else :index="item.path" :key="item.title">
        <template slot="title">
          <router-link :to="item.path">
            <i class="el-icon-menu"></i>
            <span>{{item.name}}</span>
          </router-link>
        </template>
      </el-menu-item>
    </template>
  </el-menu>
</template>
<script>
  import menuList from '../../assets/menuConfig.js'
  // import Submenu from '../Submenu/Submenu.vue'
	export default {
  /*  components:{
      Submenu
    },*/
		data() {
      console.log('menuList',menuList)
			return {
        activeIndex:'1'
      }
		},
    methods:{
		  //展开
      handleSelect(){
      
      },
      //折叠
      handleClose(){
      
      }
    }
	}
</script>

<style lang='less' rel='stylesheet/less'>

</style>
