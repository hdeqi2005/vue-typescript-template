import { Component, Vue, Watch } from 'vue-property-decorator'
declare module "vue/types/vue" {
    interface Vue {
      $config: any;
    }
  }
  
const WIDTH = 992 // refer to Bootstrap's responsive design

@Component({
  name: 'baseMixin'
})
export default class extends Vue {
    public userForm = {
        username: 'admin123',
        password: '111111'
      }
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

  beforeMount() {
    window.addEventListener('resize', this.resizeHandler)
  }

  mounted() {
 
  }

  beforeDestroy() {
    window.removeEventListener('resize', this.resizeHandler)
  }

  private isMobile() {
    const rect = document.body.getBoundingClientRect()
    return rect.width - 1 < WIDTH
  }

  private resizeHandler() {
   
  }
}
