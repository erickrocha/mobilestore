import axios from 'axios'
import * as storageService from './library/storage-service'
const instance = axios.create({
    baseURL: 'http://192.168.1.3:8080/hermes',
    headers: { 'Content-Type': 'application/json' },
})

instance.interceptors.request.use(async (config) => {
    const token = await storageService.getItem('@token')
    if (token) {
        config.headers.Authorization = token
    }
    return config
})

export default instance
