import axios from '@/libs/api.request'
import Qs from 'qs'


/**
 * @desc login 描述 用户登录
 * 
 * @params 参数 username: string, password: string
 * 
 * @return 返回 Promise 登陆是否成功 
 * 
 * @author Andy Huang
 * 
 * @created 2019/10/09 14:40:25
 */
export const login = (userInfo: { username: string, password: string}) => {
    debugger
    let { username, password } = userInfo
    //参数
    const data = {
        username,
        password
    }
    return axios.request({
      url: '/api/user/login',
      data,
      method: 'post',
      transformRequest: [function (data) {
        // 对 data 进行任意转换处理
        return Qs.stringify(data)
      }],
    })
  }
  