<template>
    <el-carousel height="500px">
      <el-carousel-item v-for="(item, index) in headImgs" :key="index">
        <div :style="`background: url(${item});
            background-size: cover;
            width: 100%;
            height: 100%;
            background-repeat-x: no-repeat;`">
        </div>
      </el-carousel-item>
    </el-carousel>
</template>

<script>
export default {
    props: {
        headImgs: {
            type: Array,
            default() {
                return []
            }
        }
    }
}
</script>

<style>
.el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
</style>
