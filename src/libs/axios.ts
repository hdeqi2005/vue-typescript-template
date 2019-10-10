import axios, { AxiosResponse, AxiosRequestConfig } from 'axios'
import config from '@/config'
import { getToken } from '@/utils/cookies'
import router from '@/router'

class HttpRequest {
  public queue: any // 请求的url集合
  public baseUrl: any // 基础路径baseUrl

  constructor (baseUrl:string) {
    this.baseUrl = baseUrl
    this.queue = {}
  }

  //自定义配置
  getInsideConfig () {
    const config = {
      baseURL: this.baseUrl,
      headers: {
        sessionId:getToken()
      }
    }
    return config
  }

  destroy(url: string) {
    delete this.queue[url]
    if (!Object.keys(this.queue).length) {
      // hide loading
    }
  }

  interceptors (instance:any, url?: string){
    // 请求拦截
    instance.interceptors.request.use((config: AxiosRequestConfig) => {
      // 添加全局的loading...
      if (!Object.keys(this.queue).length) {
        // show loading
      }
      if (url) {
        this.queue[url] = true
      }
      return config
    }, (error: any) => {
      console.error("请求拦截"+error)
      return Promise.reject(error)
       // 错误的请求结果处理，这里的代码根据后台的状态码来决定错误的输出信息
    })

     // 响应拦截
     instance.interceptors.response.use((res: AxiosResponse) => {
       debugger
      if (url) {
        this.destroy(url)
      }
      const { data, status } = res
      if (status === 200 && config.IsMocK) { return data } // 如果是mock数据，直接返回
      if (status === 200 && data) { return data } // 请求成功
      return requestFail(res) // 失败回调
    }, (error: any) => {
      if (url) {
        this.destroy(url)
      }
      console.error("响应拦截"+error)
      return Promise.reject(error)
       // 错误的请求结果处理，这里的代码根据后台的状态码来决定错误的输出信息
    })
  }


  async request (options: AxiosRequestConfig) {
    const instance = axios.create()
    options = Object.assign(this.getInsideConfig(), options)
    await this.interceptors(instance, options.url)
    return instance(options)
  }

}

   // 请求失败
   const requestFail = (res: AxiosResponse) => {
    let errStr = '网络繁忙！'
    // token失效重新登陆
    if (res.data.code === 1000001) {
      return router.replace({ name: 'login' })
    }

    return {
      err: console.error({
        code: res.data.errcode || res.data.code,
        msg: res.data.errmsg || errStr
      })
    }
  }

export default HttpRequest //as any
