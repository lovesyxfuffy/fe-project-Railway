<template>
    <div style="height: 100%">
        <top-bar></top-bar>
        <top-nav></top-nav>
        <el-main style="background: #f5f5f5;" v-if="$route.name != 'home'" >
            <div :style="`width:${$constants.containerWidth};margin: 0 auto; min-height: 450px`">
                <breadcrumb :data="thisBreadcrumb"></breadcrumb>
                <router-view></router-view>
            </div>
            <bottom></bottom>
        </el-main>
        <div v-else>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import topBar from '@components/topBar.vue'
import topNav from '@components/topNav.vue'
import bottom from '@components/bottom.vue'
import breadcrumb from '@components/breadcrumb.vue'
export default {
    components: {
        topBar,
        topNav,
        bottom,
        breadcrumb
    },
    data() {
        return {
            thisBreadcrumb: {},
            breadcrumbList: {
                profile: {
                    '关于我们': {
                        route: false,
                        children: {
                            '公司简介': {
                                route: 'profile',
                                children: false
                            }
                        }
                    }
                },
                organization: {
                    '关于我们': {
                        route: false,
                        children: {
                            '组织结构': {
                                route: 'organization',
                                children: false
                            }
                        }
                    }
                },
                title: {
                    '关于我们': {
                        route: false,
                        children: {
                            '企业资质': {
                                route: 'title',
                                children: false
                            }
                        }
                    }
                },
                culture: {
                    '关于我们': {
                        route: false,
                        children: {
                            '企业文化': {
                                route: 'culture',
                                children: false
                            }
                        }
                    }
                },
                speech: {
                    '关于我们': {
                        route: false,
                        children: {
                            '企业致辞': {
                                route: 'speech',
                                children: false
                            }
                        }
                    }
                },
                news: {
                    '新闻中心': {
                        route: false,
                        children: {
                            '新闻列表': {
                                route: 'newsList'
                            }
                        }
                    }
                },
                businessList: {
                    '业务领域': {
                        route: false,
                        children: {
                            '分支结构': {
                                route: 'businessList',
                                children: false
                            }
                        }
                    }
                },
                layout: {
                    '业务领域': {
                        route: false,
                        children: {
                            '经营布局': {
                                route: 'layout',
                                children: false
                            }
                        }
                    }
                },
                excellentList: {
                    '业绩荣誉': {
                        route: false,
                        children: {
                            '精品工程': {
                                route: 'excellentList'
                            }
                        }
                    }
                },
                talent: {
                    '职业规划': {
                        route: false,
                        children: {
                            '人才战略': {
                                route: 'talent'
                            }
                        }
                    }
                },
                hiring: {
                    '职业规划': {
                        route: false,
                        children: {
                            '招聘信息': {
                                route: 'hiring'
                            }
                        }
                    }
                },
                education: {
                    '职业规划': {
                        route: false,
                        children: {
                            '教育培训': {
                                route: 'education'
                            }
                        }
                    }
                }
            }
        }
    },
    created() {
        this.thisBreadcrumb = this.breadcrumbList[this.$route.name]
    },
    watch: {
        '$route.name'() {
            this.thisBreadcrumb = this.breadcrumbList[this.$route.name]
        }
    }
}
</script>

<style>

</style>
