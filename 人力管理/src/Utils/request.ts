// 封装axios
import axios from 'axios'
import { ElMessage } from 'element-plus'

const service = axios.create({
  /*路径地址*/
  baseURL: 'http://ihrm-java.itheima.net/api/',
  /*超时时间*/
  timeout: 5000,
  /*请求头*/
  headers: { 'Content-Type': 'application/json;charset=uft-8' }
})

/*请求拦截*/
service.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

/*响应拦截*/
service.interceptors.response.use((res)=>{
  const code: number = res.data.code
  if(code !== 10000) {
    return Promise.reject(new Error(res.data.message || 'Error'))
  }
  return res.data
},
(error) => {
  ElMessage.error(error.message)
  return Promise.reject(error)
}
)

export default service
