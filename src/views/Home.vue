<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
     <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>
     <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose">
        <span>这是一段信息</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>

    <div class="login-container">
          <p>
            用户名:
          <input type="text" placeholder="请输入用户名" />
          </p>
           <p>
             密码:
          <input type="text" placeholder="请输入密码" />
          </p>
        <button @click="login()">登陆</button>
    </div>
  </div>
</template>

<script lang="ts">
import { mixins } from 'vue-class-component'
//vue-class-component 使用说明:https://github.com/vuejs/vue-class-component
import baseMixin from '@/mixins/baseMixin'
import mainMixin from '@/mixins/mainMixin'
import { UserModule } from '@/store/modules/user'
import { Component, Vue, Watch } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
//组件引用，mixins，filters 等放在 @Component 里面



@Component({
  components: {
    HelloWorld,
  }
})
//Example of using a mixin:
export default class Home extends mixins(mainMixin,baseMixin) {
//export default class Home extends Vue {
    public isReady:boolean = false;
    private isLoadEnd: boolean = false;
    private isLoading: boolean = false;
    private dialogVisible: boolean = false;
   
     // lifecycle hook
    public mounted(): void {
          if (this.isLoadEnd === false && this.isLoading === false) {
              console.log('home ready go....'+this.isReady+this.$config.title+this.userForm.username)
              
            }
     }
    // computed
    get styles () {
      return ''
    }

    public async login(){
      try {
         let resObj = await UserModule.handleLogin(this.loginForm)
         debugger
      } catch (error) {
        debugger
      }
     
    }

     handleClose(done:any) {
       this.$router.go(-1);
        // this.$message({
        //   message: 'dk===恭喜你，这是一条成功消息',
        //   type: 'success'
        // })
        this.$confirm('确认关闭？')
          .then((_:any) => {
            done();
          })
          .catch((_:any) => {});
      }

    created () {}

    destroyed () {}


}
</script>
