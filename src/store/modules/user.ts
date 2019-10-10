import { VuexModule, Module, Action, Mutation, getModule } from 'vuex-module-decorators' 
//vuex-module-decorators 使用说明https://github.com/championswimmer/vuex-module-decorators
import * as types from "../types";
import { getToken,setToken } from '@/utils/cookies'
import {login} from '@/api/user'
import store from '@/store'

export interface IUserState {
  token: string
  name: string
  avatar: string
  introduction: string
  roles: string[]
  email: string
}

@Module({ dynamic: true, store, name: 'user' })
class User extends VuexModule implements IUserState {
  // state
  public token = getToken() || ''
  public name = ''
  public avatar = ''
  public introduction = ''
  public roles: string[] = []
  public email = ''

  // getters
  get token_getter() {
    return this.token
  }

  //mutations
  @Mutation
  private SET_TOKEN(token: string) {
    this.token = token
  }

  /**
   * @desc handleLogin 描述:用户登陆
   * 
   * @params 参数 username: string, password: string
   * 
   * @return 返回 Promise
   */
    @Action
    public async handleLogin(userInfo: { username: string, password: string}) {
      let { username, password } = userInfo
      username = username.trim()
      try {
          const data = await login({ username, password })
          return Promise.resolve(data);
      } catch (error) {
          requestFail(error)
      }
    }
}

  // 请求失败
  const requestFail = (res: any) => {
    let errStr = '服务繁忙，请稍后再试！'
    const resData ={
      err: console.error({
        code: 404,
        msg: errStr
      })
    }
    return Promise.reject(resData)
    
  }

export const UserModule = getModule(User)
