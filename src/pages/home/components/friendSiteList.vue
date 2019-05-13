<template>
    <div class="friend-wrap">
        <el-row class="friendly-title">
            <img src="@imgs/friendly.png">
        </el-row>
        <div class="link-list">
            <el-row :style="`width:${$constants.containerWidth};margin: 0 auto; padding: 30px 0`">
                <el-col :span="5"  v-for="(item, index) in list" :key="index">
                    <span @click="toRoute(item.value)" style="cursor: pointer;">{{item.name}}</span>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        list: {
            type: Array,
            default() {
                return []
            }
        }
    },
    methods: {
        toRoute(item) {
            console.log(item)
            window.open(item)
        }
    }
}
</script>

<style lang="less">
.friend-wrap {
    background: #f5f5f5;
    .friendly-title {
        img {
            margin: 0 auto;
            padding: 20px 0;
            display: block;
        }
    }
    .link-list {
        background-image: url("../../../assets/images/bottom.png");
        background-size: cover;
        background-repeat: no-repeat;
        height: 200px;
        .el-col {
           span {
                color: #ffffff;
                padding-bottom: 5px;
                border-bottom: 2px solid #ffffff;
           }
        }
    }
}
</style>
