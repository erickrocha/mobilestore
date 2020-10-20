import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'
import * as constants from './library/constants'
const instance = axios.create({
    baseURL: 'http://192.168.1.3:8080/hermes',
    headers: { 'Content-Type': 'application/json' },
})

instance.interceptors.request.use((config) => {
    const token = AsyncStorage.getItem(constants.TOKEN)
    if (token) {
        config.headers.Authorization = token
    }
    return config
})

export default instance
