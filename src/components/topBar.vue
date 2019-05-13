<template>
    <el-row type="flex" class="top-bar" justify="space-around" align="middle" :style="'width:'+ $constants.containerWidth">
        <el-col :span="18">
            <img class="top-title" src="@imgs/topBg.png">
        </el-col>
        <el-col :span="6">
            <div class="input-with-select">
                <el-input placeholder="请输入内容" v-model="searchValue">
                <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
            </div>
        </el-col>
    </el-row>
</template>

<script>
export default {
    name: 'topBar',
    data() {
        return {
            searchValue: ''
        }
    }
}
</script>

<style lang="less">
.top-bar {
    height: 100px;
    margin: 0 auto;
    background: #ffffff;
    .top-title {
        width: 55%;
    }
    .input-with-select {
    }
}
</style>
