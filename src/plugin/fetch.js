import axios from 'axios'

const ENV = process.env.NODE_ENV

// 创建axios实例
const service = axios.create({
  // baseURL:"http://novel.juhe.im/",代理服务器请求接口地址
  timeout: 10000,
  method: 'get'
});

// request 请求收到后 拦截器设置
service.interceptors.response.use(
  response => {
    if (response) {
      switch (response.status) {
        case 200: break;
        // case 'B1000':                                 //  清除token信息并跳转到登录页面
        //   sessionStorage.removeItem('Authorization')  // 将token清空
        //   console.error(response.data.data.msg)       // 提示错误信息
        //   router.replace({ path: '/login' })
        //   break;
        default:
          console.error(response.data.data.msg ? response.data.data.msg : '返回状态非200')
      }
      delete response.config;
      delete response.headers;
      delete response.request;
      return response
    } else {
      console.error('响应成功，但是响应信息不存在！')
    }
  },
  error => {
    console.error(ENV === 'development' ? error.message : '请求错误！')
    return Promise.reject(error)   // 返回接口返回的错误信息
  })

export default service
