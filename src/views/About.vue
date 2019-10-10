<template>
  <div>
    <loginForm ref="loginForms"></loginForm>
  </div>
</template>


<script lang='ts'>
import { mixins } from 'vue-class-component'
import baseMixin from '@/mixins/baseMixin'
import { Component, Vue} from 'vue-property-decorator'
import loginForm from '@/components/login-form/login-form.vue'
@Component({
components: {loginForm
}
})
export default class about extends mixins(baseMixin) {
    mounted() {
      console.log((this.$refs.loginForms as any).labelPosition)
    }

}
</script>


<style scoped>
</style>