import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://192.168.1.3:8080/hermes',
    headers: { 'Content-Type': 'application/json' },
})

instance.interceptors.request.use((config) => {
    const token =
        'Bearer eyJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6W3siYXV0aG9yaXR5IjoiU1lTQURNSU4ifV0sInN1YiI6ImFkbWluQGhlcm1lcy5jb20uYnIiLCJleHAiOjE2MDI5MjEzMzN9.WCRtUDF0sCk1SAItqirhSNBqb3Kjh-Glcv1pg40GTnlY1o-Uu5kmTxxfvphhAq5tszgxYALnM4J97o-EM1AWdA'
    if (token) {
        config.headers.Authorization = token
    }
    return config
})

export default instance
