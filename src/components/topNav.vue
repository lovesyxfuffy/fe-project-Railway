<template>
<el-row class="top-nav" type="flex" justify="space-around" align="middle">
    <el-col class="top-nav-menu" :style="'width:'+ $constants.containerWidth">
        <el-menu
        :default-active="$route.name"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#0a7bc7"
        text-color="#fff"
        active-text-color="#ffcc00">
        <template  v-for="(item, index) in menuItems">
            <el-menu-item :index="item.route" :key="index" v-if="!item.children">
                {{item.name}}
            </el-menu-item>
            <template v-else>
                <el-submenu index="about" :key="index">
                    <template slot="title"><span class="complex-menu-icon"></span> {{item.name}}</template>
                    <el-menu-item :index="child.route" v-for="(child, childIndex) in item.children" :key="childIndex">{{child.name}}</el-menu-item>
                </el-submenu>
            </template>
        </template>
        </el-menu>
    </el-col>
</el-row>
</template>

<script>
export default {
    data() {
        return {
            menuItems: [
                {
                    name: '首页',
                    route: 'home'
                },
                {
                    name: '关于我们',
                    route: 'about',
                    children: [
                        {
                            name: '公司简介',
                            route: 'profile'
                        },
                        {
                            name: '企业资质',
                            route: 'title'
                        },
                        {
                            name: '企业文化',
                            route: 'culture'
                        },
                        {
                            name: '企业致辞',
                            route: 'speech'
                        }
                    ]
                },
                {
                    name: '新闻中心',
                    route: 'news'
                },
                {
                    name: '业务领域',
                    route: 'businessList'
                },
                {
                    name: '业绩荣誉',
                    route: 'excellentList'
                },
                {
                    name: '职业规划',
                    route: 'careerPlanning'
                }
            ]
        }
    },
    methods: {
        handleSelect(key) {
            if(key) {
                this.$router.push({
                    name: key,
                    query: this.$router.query
                })
            }
        }
    }
}
</script>

<style lang="less">
.top-nav {
    height: 60px;
    background-color: #0a7bc7;
    .top-nav-menu {
        .complex-menu-icon {
            width: 5px;
            height: 5px;
            display: inline-block;
            background: white;
            border-radius: 5px;
        }
    }
}
</style>
