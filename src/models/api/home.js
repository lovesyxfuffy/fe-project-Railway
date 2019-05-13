import axios from '@axios'

export default {
    getHeadImgs() {
        return axios.post('/common/getHeadImgs')
    },
    getConfig() {
        return axios.post('/common/config')
    },
    getInformation(data) {
        return axios.post('/mainPage/getInformation', data)
    },
    getExcellent() {
        return axios.post('/mainPage/getExcellent')
    }
}
