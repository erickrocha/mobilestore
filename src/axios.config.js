import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://192.168.1.3:8080/hermes',
    headers: { 'Content-Type': 'application/json' },
})

instance.interceptors.request.use((config) => {
    const token =
        'Bearer eyJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6W3siYXV0aG9yaXR5IjoiTUFOQUdFUiJ9XSwic3ViIjoiZXJpY2sucC5yb2NoYUBnbWFpbC5jb20iLCJleHAiOjE2MDMwNDQ4MTZ9.XEaTgT59BJVQh9k8YYuPz4x5DOdkoO4B0Iuu2J03g1v5U0VKgsKfRjnxTuTTcPPufZa33Q1mbbo7fr8CN4ko5A'
    if (token) {
        config.headers.Authorization = token
    }
    return config
})

export default instance
