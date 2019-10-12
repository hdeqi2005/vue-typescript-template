import { VuexModule, Module, Action, Mutation, MutationAction, getModule } from 'vuex-module-decorators';
// vuex-module-decorators 使用说明https://github.com/championswimmer/vuex-module-decorators
import { getToken, setToken, setUserNameMd5, getUserNameMd5, getMenuList, setMenuList } from '@/utils/cookies';
import {getValidatorToken, getMenuByToken, login} from '@/api/user';
import store from '@/store';

 // 请求失败
 const requestFail = (res: any) => {
      const errStr = '服务繁忙，请稍后再试！';
      const resData = {
        // tslint:disable-next-line: no-console
        err: console.error({
          code: 404,
          msg: errStr,
        }),
      };
  // tslint:disable-next-line: align
  return Promise.reject(resData);
};

export interface IUserState {
  token: string;
  menuList: any;
  userNameMd5: string;
  name: string;
  avatar: string;
  introduction: string;
  roles: string[];
  email: string;
}

@Module({ dynamic: true, store, name: 'User' })
class User extends VuexModule implements IUserState {
  // getters
  get token_getter() {
    return this.token;
  }
  // state
  public userNameMd5 = getUserNameMd5() || '';
  public menuList = {};
  public token = getToken() || '';
  public name = '';
  public avatar = '';
  public introduction = '';
  public roles: string[] = [];
  public email = '';
  /**
   * @desc handleLogin 描述:用户登陆
   *
   * @params 参数 username: string, password: string
   *
   * @return 返回 Promise
   */
   @Action
    public async getUserNameMd5_action(userId: string) {
      try {
          const data = await getValidatorToken(userId);
          this.SET_USERNAMEMD5(data.data);
          return Promise.resolve(data);
      } catch (error) {
          requestFail(error);
      }
    }
 /**
  * @desc user.handleLogin_action 描述 用户登陆
  *
  * @params 参数 userId: string, pwd: string
  *
  * @return 返回 boolean
  *
  * @author Andy Huang
  *
  * @created 2019/10/11 17:05:12
  */
  @Action
    public async handleLogin_action(userInfo: {userId: string, pwd: string}) {
      // const { userId, pwd } = userInfo;
      try {
          const { data } = await login(userInfo);
          this.SET_TOKEN(data.token);
          return Promise.resolve(data);
      } catch (error) {
          requestFail(error);
      }
    }
    /**
     * @desc user.getMenuByToken_action 描述 获取菜单列表
     *
     * @params 参数:token in head
     *
     * @return 返回:Json 菜单列表
     *
     * @author Andy Huang
     *
     * @created 2019/10/12 08:29:48
     */
    @Action
    public async getMenuByToken_action() {
      try {
          const { data } = await getMenuByToken();
          this.SET_MENU(data);
          return Promise.resolve(data);
      } catch (error) {
          requestFail(error);
      }
    }
      // mutations 存储邮件地址
      @Mutation
      public SET_EMAIL(email: string) {
        this.email = email;
      }
    // mutations 存储用户名加密字符串
    @Mutation
    private SET_USERNAMEMD5(userNameMd5: string) {
      this.userNameMd5 = userNameMd5;
      setUserNameMd5(userNameMd5);
    }
     // mutations 存储token字符串
     @Mutation
     private SET_TOKEN(token: string) {
       this.token = token;
       setToken(token);
     }
     // mutations 存储菜单列表
     @Mutation
     private SET_MENU(menuList: any) {
       this.menuList = menuList;
      // setMenuList(menuList);
     }
}


export const UserModule = getModule(User);
