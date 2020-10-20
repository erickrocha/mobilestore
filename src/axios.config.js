import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://192.168.1.3:8080/hermes',
    headers: { 'Content-Type': 'application/json' },
})

instance.interceptors.request.use((config) => {
    const token =
        'Bearer eyJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6W3siYXV0aG9yaXR5IjoiTUFOQUdFUiJ9XSwic3ViIjoiZXJpY2sucC5yb2NoYUBnbWFpbC5jb20iLCJleHAiOjE2MDM0MjM2MTl9.Nx8-zBMQXUT00x88LgxjeEIO6c7PQ7ctYGliwb1nIMW9IGdldexch68M6g4t-6fW70MtOR0D_gzER8gLHce2qg'
    if (token) {
        config.headers.Authorization = token
    }
    return config
})

export default instance
