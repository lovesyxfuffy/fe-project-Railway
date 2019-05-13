<template>
    <el-main class="excellent-list">
    <el-row :gutter="10" style="display: flex;flex-wrap: wrap;">
        <el-col :span="8" v-for="(o, index) in listData" :key="index">
            <el-card :body-style="{ padding: '0px' }" @click.native="toDetails(o.id)">
                <img :src="o.imgUrl" class="image">
                <div style="padding: 14px;">
                    <span style="font-weight: bold">{{o.title}}</span>
                    <div class="bottom clearfix">
                    <div class="time">{{ o.subtitle }}</div>
                    </div>
                </div>
            </el-card>
        </el-col>
    </el-row>
    </el-main>
</template>

<script>
export default {
    data() {
        return {
            listData: []
        }
    },
    created() {
        this.getList()
    },
    methods: {
        getList() {
            this.$models.home.getExcellent()
                .then((result) => {
                    if(result.data.status === 1) {
                        this.listData =  result.data.data
                    }
                }).catch((err) => {
                });
        },
        toDetails(id) {
            this.$router.push({
                name: 'article',
                query: {
                    id: id || 0
                }
            })
        }
    }
}
</script>

<style lang="less">
.excellent-list {
    .block {
        float: right;
        margin-top: 20px;
    }
.el-col {
    margin-bottom: 30px;
    & .e-col:last-child {
    margin-bottom: 0;
    }
}
.time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    height: 300px;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
}
</style>
