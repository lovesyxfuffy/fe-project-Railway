import axios from '@axios'

export default {
    // 获取文章列表
    getArticleList(query) {
        return axios.post('/content/getArticleList', query)
    },
    // 获取文章页详情 by id
    getArticleContent(id) {
        return axios.post('/content/getArticleContent/' + id)
    },
    // 获取文章页详情 by model
    getArticleContentByModel(query) {
        return axios.post('/content/getArticleByModel/' + query)
    }
}
