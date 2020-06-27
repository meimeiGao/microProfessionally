<template>
  <el-submenu>
    <template slot="title">{{menu.title}}</template>
    <Submenu v-for="menu.children && menu.children.length"/>
    <el-menu-item >选项1</el-menu-item>
    <!--<el-submenu index="2-4">
      <template slot="title">选项4</template>
      <el-menu-item index="2-4-1">选项1</el-menu-item>
      <el-menu-item index="2-4-2">选项2</el-menu-item>
      <el-menu-item index="2-4-3">选项3</el-menu-item>
    </el-submenu>-->
    
  </el-submenu>
</template>
<script>
  export default {
    name:'Submenu',
    prop:{
      menu:Object
    },
    data(){
      return{
      
      }
    }
  }
</script>

<style lang="less" rel='stylesheet/less'>

</style>
