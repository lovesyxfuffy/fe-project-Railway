import Vue from 'vue'
import Router from 'vue-router'



Vue.use(Router)
const publicPath = '/frontView'
const getRouter = (module) => {
    const router = new Router({
        // mode: 'history',
        routes: [
            {
                name: 'root',
                path: '/',
                meta: {title: '首页'},
                component: () => import('../layouts/main.vue'),
                redirect: publicPath + '/home',
                children: [
                    {
                        name: 'home',
                        path: 'home',
                        meta: {title: '首页'},
                        component: () => import('@pages/home')
                    },
                    {
                        name: 'profile',
                        path: 'about/profile',
                        meta: {title: '公司简介'},
                        component: () => import('@components/details')
                    },
                    {
                        name: 'title',
                        path: 'about/title',
                        meta: {title: '企业资质'},
                        component: () => import('@components/details')
                    },
                    {
                        name: 'culture',
                        path: 'about/culture',
                        meta: {title: '企业文化'},
                        component: () => import('@components/details')
                    },
                    {
                        name: 'speech',
                        path: 'about/speech',
                        meta: {title: '企业致辞'},
                        component: () => import('@components/details')
                    },
                    {
                        name: 'news',
                        path: 'newsList',
                        meta: {title: '新闻列表'},
                        component: () => import('@pages/news/newsList')
                    },
                    {
                        name: 'article',
                        path: 'article',
                        meta: {title: '文章详情'},
                        component: () => import('@components/details')
                    },
                    {
                        name: 'businessList',
                        path: 'businessList',
                        meta: {title: '业务领域'},
                        component: () => import('@pages/business/businessList')
                    },
                    {
                        name: 'layout',
                        path: 'about/layout',
                        meta: {title: '经营布局'},
                        component: () => import('@components/details')
                    },
                    {
                        name: 'excellentList',
                        path: 'excellentList',
                        meta: {title: '精品工程'},
                        component: () => import('@pages/honor/excellentList')
                    },
                    // {
                    //     name: 'careerPlanning',
                    //     path: 'careerPlanning',
                    //     meta: {title: '职业规划'},
                    //     component: () => import('@pages/careerPlanning')
                    // },
                    {
                        name: 'talent',
                        path: 'about/talent',
                        meta: {title: '人才战略'},
                        component: () => import('@components/details')
                    },
                    {
                        name: 'hiring',
                        path: 'hiring',
                        meta: {title: '招聘信息'},
                        component: () => import('@pages/news/newsList')
                    },
                    {
                        name: 'education',
                        path: 'education',
                        meta: {title: '教育培训'},
                        component: () => import('@pages/news/newsList')
                    },
                    {
                        name: 'information',
                        path: 'information',
                        meta: {title: '中标信息'},
                        component: () => import('@pages/news/newsList')
                    },
                    {
                        name: 'notice',
                        path: 'notice',
                        meta: {title: '通知公告'},
                        component: () => import('@pages/news/newsList')
                    }
                ]
            },
            {
                name: 'notFound',
                path: '*',
                meta: {title: '页面维护中'},
                component: () => import('../layouts/main.vue'),
                redirect: '/home'
            }
        ]
    })

    // 拦截路由
    router.beforeEach((to, from, next) => {
        document.title = `中铁成建设-${to.meta.title}`
        next()//  resolve 钩子
    })

    // 用户认证、鉴权
    // router.beforeEach((to, from, next) => {
    //     if (to.path !== '/login') {
    //         router.app.$options.store.commit('user/syncLoginState')
    //         // 判断用户是否登录
    //         if (!router.app.$options.store.getters['user/isLogin']) {
    //             next({path: '/login', replace: true, query: {redirect: to.fullPath}})
    //         }
    //         // 判断用户是否具备访问权限
    //         if (to.meta.auth && !router.app.$options.store.getters['user/judgePermission'](to.meta.authId)) {
    //             next({path: '/permissionDenied', replace: true})
    //             return
    //         }
    //     }
    //     next() //  resolve 钩子
    // })

    return router
}

export default getRouter;

