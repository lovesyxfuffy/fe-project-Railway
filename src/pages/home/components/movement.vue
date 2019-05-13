<template>
    <div style="background: #f5f5f5;">
        <div :style="`width:${$constants.containerWidth};margin: 0 auto`"  class="movement-wrap">
            <el-row>
                <img src="@imgs/movement.png" style="width: 160px">
            </el-row>
            <el-row :gutter="20" type="flex" justify="space-around" align="middle">
                <el-col :span="12">
                <video :src="headVideo" controls="controls" style="width: 100%; height: 300px">
                your browser does not support the video tag
                </video>
                </el-col>
                <el-col :span="12" style="height: 300px">
                    <el-tabs v-model="activeName" @tab-click="changeTab">
                        <el-tab-pane v-for="(tab, index) in tabList" :label="tab.label" :name="tab.name" :key="index" style="background: #ffffff; padding: 20px 10px">
                            <ul class="ul-list" v-loading="loading">
                                <li v-for="(list, index) in movementList.slice(0, 10)" :key="index" :id="list.id" @click="toRoute(list.id)">
                                    <el-row type="flex" justify="space-between" align="middle" :gutter="10">
                                        <el-col :span="18"><span class="li-icon"></span>{{list.title}}</el-col>
                                        <el-col :span="6" class="list-time">{{list.time}}</el-col>
                                    </el-row>
                                </li>
                            </ul>
                            <div class="more" :style="`color: ${$constants.themeColor}; cursor: pointer`" @click="toListRoute">More</div>
                        </el-tab-pane>
                    </el-tabs>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        headVideo: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            loading: false,
            activeName: 'information',
            tabList: [
                {
                    name: 'information',
                    label: '中标信息'
                },
                {
                    name: 'notice',
                    label: '通知公告'
                }
            ],
            movementList: [
                {
                    title: 'hhhahah',
                    time: '2018-12-03'
                },
                {
                    title: 'hhhahah',
                    time: '2018-12-03'
                },
                {
                    title: 'hhhahah',
                    time: '2018-12-03'
                }
            ]
        }
    },
    created() {
        this.getInformation()
    },
    methods: {
        changeTab(tab) {
            this.getInformation()
        },
        getInformation() {
            // this.loading = true
            this.$models.home.getInformation({
                pageSize: 10,
                informationType: this.activeName
            })
                .then(res => {
                    if(res.data.status === 1) {
                        this.movementList = res.data.data
                        this.loading = false
                    } else {
                        this.loading = false
                    }
                })
                .catch(e => {
                    this.loading = false
                })
        },
        toRoute(id) {
            this.$router.push({
                name: 'article',
                query: {
                    id: id
                }
            })
        },
        toListRoute() {
            this.$router.push({
                name: this.activeName
            })
        }
    }
}
</script>

<style lang="less">
.movement-wrap {
    padding: 20px 0;
    .el-tabs__header {
        margin: 0;
    }
    .el-tabs__content {
        height: 260px;
    }
    .el-tab-pane {
        height: 220px;
    }
    .el-tabs.el-tabs--top {
        height: 100%;
    }
    .ul-list {
        list-style: none;
        padding: 0;
        margin: 0;
        height: 100%;
        overflow: hidden;
        li {
            height: 30px;
            cursor: pointer;
        }
        .li-icon {
            width: 3px;
            height: 3px;
            background: black;
            display: inline-block;
            border-radius: 3px;
            margin-right: 5px;
            vertical-align: middle;
        }
        .list-time {
            color: #888888;
            text-align: right;
        }
    }
    .more {
        text-align: right
    }
}
</style>
