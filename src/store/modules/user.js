// initial state
import Cookies from 'js-cookie'

const state = {
    loginState: {
        loginIn: false,
        user: {
            userName: '',
            roles: [],
            privileges: [],
            extAuthPrivileges: [],
            token: ''
        }
    }
}

// getters
const getters = {
    userName: (state, getters, rootState) => {
        if (state.loginState.loginIn) {
            return state.loginState.user.userName
        } else {
            return '未知'
        }
    },
    userToken: (state, getters, rootState) => {
        return state.loginState.user.token
    },
    userPrivileges: (state, getters, rootState) => {
        return state.loginState.user.privileges
    },
    isLogin: (state, getters, rootState) => {
        return state.loginState.loginIn
    },
    // 判断用户是否具备权限
    judgePermission: (state, getters, rootState) => (authId) => {
        let result = false
        for (let privilegeId of state.loginState.user.privileges) {
            if (privilegeId === authId) {
                result = true
                break
            }
        }
        return result
    }
}

// actions
const actions = {
    updateState(context, {type, user}) {
        if (type === 'loginIn') {
            context.commit('loginIn', user)
        } else if (type === 'loginOut') {
            context.commit('loginOut')
        }
    }
}

// mutations
const mutations = {
    // 登入状态
    loginIn(state, user) {
        state.loginState.loginIn = true
        state.loginState.user = user
        Cookies.set('loginState', state.loginState, {expires: 1})
    },
    // 登出状态
    loginOut(state) {
        state.loginState.loginIn = false
        state.loginState.user = {}
        Cookies.remove('loginState')
    },
    // 同步cookie和vuex中的状态
    syncLoginState(state) {
        let cookieState = Cookies.getJSON('loginState')
        if (cookieState) {
            state.loginState = cookieState
        }
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
