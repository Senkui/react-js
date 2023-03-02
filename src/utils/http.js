// 封装axios
import axios from 'axios'
import { getToken } from './token'
import { history } from './history'

const http = axios.create({
  baseURL: '111',
  timeout: 5000
})

//请求拦截器
http.interceptors.request.use((config) => {
  // if not login add token
  const token = getToken()
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}, (error) => {
  return Promise.reject(error)
})

// 响应拦截器
http.interceptors.response.use((response) => {
  // 2xx 触发
  return response.data
}, (error) => {
  if (error.response.status === 401) {
    // 返回登陆页
    // history.push('/login')
  }
  return Promise.reject(error)
})

export { http }