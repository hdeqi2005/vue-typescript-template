import { Component, Vue, Watch } from 'vue-property-decorator'

@Component
export default class extends Vue {
    public loginForm = {
        username: 'admin123',
        password: '111111'
      }
}

