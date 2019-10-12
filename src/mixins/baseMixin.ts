import { Component, Vue, Watch } from 'vue-property-decorator';

// 声明合并

declare module 'vue/types/vue' {
    interface Vue {
      $config: any;
    }
  }
const WIDTH = 992; // refer to Bootstrap's responsive design

export default class BaseMixin extends Vue {
    public userForm = {
        username: 'admin',
        password: '111111',
      };
//   get device() {
//     return AppModule.device
//   }

//   get sidebar() {
//     return AppModule.sidebar
//   }

//   @Watch('$route')
//   private onRouteChange() {
//     if (this.device === DeviceType.Mobile && this.sidebar.opened) {
//       AppModule.CloseSideBar(false)
//     }
//   }

 private beforeMount() {
   // window.addEventListener('resize', this.resizeHandler);
  }

  // private mounted(){
  // };

  private beforeDestroy() {
   // window.removeEventListener('resize', this.resizeHandler);
  }

  private isMobile() {
    const rect = document.body.getBoundingClientRect();
    return rect.width - 1 < WIDTH;
  }

}
