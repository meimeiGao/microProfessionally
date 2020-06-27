<template>
  <div id="app">
    <el-container class="container">
      <el-aside class="aside">
        <AsideMenu />
      </el-aside>
      <el-container class="main-container">
        <el-header class="header">Header</el-header>
        <el-main class="main">
          <div class="eight-queen">
            <div class="title">八皇后问题</div>
            <div class="row" v-for="(row,rIndex) in grids" :key="rIndex">
              <div class="cell" v-for="(cell,cIndex) in row" :key="cIndex" @click="select(rIndex,cIndex)">
                <span v-if="cell.ok">Q</span>
              </div>
            </div>
          </div>
        </el-main>
        <el-footer class="footer">Footer</el-footer>
      </el-container>
    </el-container>
  
  </div>
</template>

<script>
  import AsideMenu from './components/AsideMenu/AsideMenu.vue'
  export default {
    name: 'App',
    components:{
      AsideMenu,
    },
    data() {
      return {
        grids: null
      }
    },
    methods: {
      getGrids() {
        this.grids = new Array(8).fill(1).map((row, rIndex) => {
          return new Array(8).fill(1).map((cell, cIndex) => {
            return {
              key: `key-${rIndex * 8 + cIndex}`,
              ok: false
            }
          })
        })
  
        console.log('grids',this.grids);
      },
      select1(rIndex,cIndex){
        this.grids[rIndex][cIndex].ok = true
      },
      select(rIndex, cIndex) {
        if (this.validate(rIndex, cIndex)) {
          this.grids[rIndex][cIndex].ok = !this.grids[rIndex][cIndex].ok;
          console.log(111,this.grids[rIndex][cIndex].ok);
        } else {
          alert("当前位置不能放置皇后");
        }
      },
      validate(rIndex, cIndex) {
        // 横
        for (let i = 0; i < this.grids[rIndex].length; i++) {
          if (this.grids[rIndex][i].ok) {
            return false;
          }
        }
    
        // 竖
        for (let i = 0; i < this.grids.length; i++) {
          if (this.grids[i][cIndex].ok) {
            return false;
          }
        }
    
        // 撇
        for (let i = 0; i < this.grids[0].length; i++) {
          let y = rIndex + cIndex - i;
          if (y >= 0 && y < this.grids.length && this.grids[y][i].ok) {
            return false;
          }
        }
    
        // 捺
        for (let i = 0; i < this.grids[0].length; i++) {
          let y = rIndex - cIndex + i;
          if (y >= 0 && y < this.grids.length && this.grids[y][i].ok) {
            return false;
          }
        }
    
        return true;
      }
    },
    mounted() {
      this.getGrids()
    }
  }
</script>

<style lang="less">
  html, body {
    width: 100%;
    height: 100%;
    
    #app {
      width: 100%;
      height: 100%;
      
      .container {
        width: 100%;
        height: 100%;
        
        .aside {
          width: 200px !important;
          background-color: #f5f5f5;
        }
        
        .main-container {
          .header {
          
          }
          
          .main {
            .eight-queen {
              width: 400px;
              height: 400px;
              margin: 0 auto;
              display: flex;
              flex-direction: column;
              .title{
                height: 40px;
                line-height: 40px;
                text-align: center;
              }
              .row {
                flex-grow: 1;
                display: flex;
                flex-direction: row;
                
                &:nth-child(2n){
                  .cell:nth-child(2n){
                    flex-grow: 1;
                    background-color: #e3e3e3;
                  }
                  .cell:nth-child(2n+1){
                    flex-grow: 1;
                    background-color: #c0c0c0;
                  }
                }
                &:nth-child(2n+1){
                  .cell:nth-child(2n){
                    flex-grow: 1;
                    background-color: #c0c0c0;
                  }
                  .cell:nth-child(2n+1){
                    flex-grow: 1;
                    background-color:  #e3e3e3;
                  }
                }
                .cell{
                  height: 50px;
                  width: 50px;
                  line-height: 50px;
                  cursor: pointer;
                  text-align: center;
                }
              }
            }
          }
          
          .footer {
          
          }
        }
      }
    }
  }

</style>
