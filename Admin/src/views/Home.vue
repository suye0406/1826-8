<template>
  <div id="Home">
    <div class="header">
      <p>商家后台</p>
      <p>退出</p>
      <p>注：两个小时候token过期</p>
    </div>
    <div class="conten">
      <div class="left">
        <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick" style="width: 100%;height: 100%;"></el-tree>
      </div>
      <div class="right">
        <!--<div id="myChart" :style="{width: '300px', height: '300px'}"></div>-->
        <InterList></InterList>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import InterList from '@/components/List/InterList';

export default {
  name: 'home',
  components: {
    HelloWorld,InterList
  },
  data() {
    return {
      data: [{
        label: '积分商城',
        children: [{
          label: '商品管理',
        }]
      }, {
        label: '会员商城',
        children: [{
          label: '商品管理',
        }, ]
      }, {
        label: '钱包',
        children: [{
          label: '用户充值',
        }, {
          label: '会员列表',
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    };
  },
  created(){
  },
  methods: {
    handleNodeClick(data) {
      // data.$treeNodeId
      console.log(data.$treeNodeId)
      switch(data.$treeNodeId)
      {
        case 2:
          // this.$router.push()
          break;
        case 2:
          break;
        default:
      }
    },
    drawLine(){
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('myChart'))
      // 绘制图表
      myChart.setOption({
        title: { text: '在Vue中使用echarts' },
        tooltip: {},
        xAxis: {
          data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      });
    }
  }
}
</script>

<style scoped lang="scss">
  #Home{
    width: 100%;
    height: 100%;
    overflow: hidden;
  .header{
    width: 100%;
    height: 80px;
    background-color: #23262E;
    p{
      /*float: left;*/
      line-height: 80px;
      color: white;
    }
    p:nth-child(1){
      float: left;
      text-indent: 24px;
    }
    p:nth-child(2){
      float: right;
      margin-right: 50px;
      margin-left: 50px;
    }
    p:nth-child(3){
      float: right;
    }
  }
  .conten{
    width: 100%;
    height: 100%;
    background-color: silver;
    display: flex;
    .left{
      width: 230px;
      height: 100%;
      background-color: #393D49;
      float: left;
      .el-tree-node__content:hover {
        background-color: #4E5465 !important;
        color: white !important;
      }
    }
    .right{
      width: 100%;
      height: 100%;
    }
  }
  }
</style>
