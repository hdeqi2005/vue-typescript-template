import md5 from 'js-md5';
import { mixins } from 'vue-class-component';
// vue-class-component 使用说明:https://github.com/vuejs/vue-class-component
import baseMixin from '@/mixins/baseMixin';
import mainMixin from '@/mixins/mainMixin';
import { UserModule } from '@/store/modules/user';
import { Component, Vue, Watch, Prop } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import { removeToken } from '@/utils/cookies';
// 组件引用，filters 等放在 @Component 里面
@Component({
  components: {
    // 这里不管你用不用，都要写@Component。不然就会出现奇怪问题
    HelloWorld,
  },
})
// Example of using a mixin:
export default class Home extends mixins(mainMixin, baseMixin) {
  // computed
  get styles() {
    return '';
  }
  // export default class Home extends Vue {
  public isReady: boolean = false;
  @Prop({
    type: String,
    default: 'Hello world',
    required: false,
    validator: (val) => (val.length > 2),
  }) public propMessage !: string;

  private isLoadEnd: boolean = false;
  private isLoading: boolean = false;
  private dialogVisible: boolean = false;
  private currentUUId: string = '';
  // lifecycle hook
  public mounted() {
    console.log('home page get the about pages email' + UserModule.email);
    if (this.isLoadEnd === false && this.isLoading === false) {
      // tslint:disable-next-line: no-console
      console.log(
        'home ready go....' +
          this.isReady + this.propMessage,
          this.$config.title,
      );
    }
  }

  /**
   * @desc Home.getUUId 描述 获取用户加密字符串
   *
   * @params 参数:用户名
   *
   * @return 返回:用户加密字符串
   *
   * @author Andy Huang
   *
   * @created 2019/10/11 16:41:29
   */
  public async getUUId() {
    try {
      removeToken(); // 登陆前清除 token
      const resObj = await UserModule.getUserNameMd5_action(
        this.loginForm.username,
      );
      this.currentUUId = UserModule.userNameMd5;

      // tslint:disable-next-line: no-console
      console.log('userNameMd5:' + this.currentUUId);
      this.login();
    } catch (error) {
      // tslint:disable-next-line: no-debugger
      debugger;
    }
  }

  /**
   * @desc Home.login 描述 用户登陆
   *
   * @params 参数:用户名加密字符串,密码
   *
   * @return 返回:BOOL
   *
   * @author Andy Huang
   *
   * @created 2019/10/11 16:43:22
   */
  private async login() {
    // 加密规则为:md5(md5（用户密码+UUID）+UUID)
    console.log('starting to login...');
    const md5Pwd = md5(
      md5(this.loginForm.password + this.currentUUId) + this.currentUUId,
    );
    const params = {
      userId: this.loginForm.username,
      pwd: md5Pwd,
    };
    const resObj = await UserModule.handleLogin_action(params);
    // console.log('end login...'+ JSON.stringify(resObj))
    console.log('user token:' + UserModule.token);
    console.log('end login...');
    this.getMenuListByToken();
    console.log('starting to get the menu list...');
    console.log('菜单列表:' + JSON.stringify(UserModule.menuList));
  }

/**
 * @desc Home.getMenuListByToken 描述 获取菜单列表
 *
 * @params 参数 token in head
 *
 * @return 返回 菜单列表 JSON
 *
 * @author Andy Huang
 *
 * @created 2019/10/12 10:10:39
 */
private async getMenuListByToken() {
  // do something you want
  const resMenuList = await UserModule.getMenuByToken_action();
}

 private handleClose(done: any) {
    // this.$router.go(-1);
    // this.$message({
    //   message: 'dk===恭喜你，这是一条成功消息',
    //   type: 'success'
    // })
    this.$confirm('确认关闭？')
      .then((_: any) => {
        done();
      })
      .catch((_: any) => {
          // do something you want
      });
  }

  private  created() {
      // do something you want
  }

  private destroyed() {
     // do something you want
  }
}
