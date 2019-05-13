<template>
    <div style=" background: #f5f5f5;">
        <el-row :style="`width:${$constants.containerWidth};margin: 0 auto;`" >
            <img src="@imgs/excellent.png" style="width: 160px">
        </el-row>
        <div class="excellent-wrap">
            <el-carousel :interval="4000" type="card" height="200px" :style="`width:${$constants.containerWidth};margin: 0 auto;`">
                <el-carousel-item v-for="(item, index) in excellentData.slice(0,6)" :key="index" 
                @click.native="toRoute(item)"
                :style="`background: url(${item.imgUrl});
                    background-size: cover;
                    height: 100%;
                    background-repeat-x: no-repeat;`">
                    <h1> {{item.title}}</h1>
                    <h3> {{item.subtitle}}</h3>
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        excellentData: {
            type: Array,
            default() {
                return []
            }
        }
    },
    methods: {
        toRoute(data) {
            this.$router.push({
                name: 'article',
                query: {
                    id: data.id
                }
            })
        }
    }
}
</script>

<style lang="less">
.excellent-wrap {
    background-color: #dbdbdd;
}
.el-carousel__item h1 {
    opacity: 0.75;
    // line-height: 200px;
    margin: 70px 0 5px 0;
    text-align: center;
    font-size: 30px;
  }
  .el-carousel__item h3 {
      font-size: 20px;
      text-align: center;
      color: #475669;
      margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
