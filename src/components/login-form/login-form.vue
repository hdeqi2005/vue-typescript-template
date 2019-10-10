<template>
    <div>
        <el-radio-group v-model="labelPosition" size="small">
            <el-radio-button label="left">左对齐</el-radio-button>
            <el-radio-button label="right">右对齐</el-radio-button>
            <el-radio-button label="top">顶部对齐</el-radio-button>
        </el-radio-group>

<div style="margin: 20px;"></div>

<el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
    <el-form-item label="名称">
        <el-input v-model="formLabelAlign.name"></el-input>
    </el-form-item>
    <el-form-item label="活动区域">
        <el-input v-model="formLabelAlign.region"></el-input>
    </el-form-item>
    <el-form-item label="活动形式">
        <el-input v-model="formLabelAlign.type"></el-input>
    </el-form-item>
</el-form>

        <el-row>
        <!-- <el-button>默认按钮</el-button> -->
        <!-- <el-button type="primary">主要按钮</el-button> -->
        <el-button type="success">确认</el-button>
        <el-button type="info">取消</el-button>
        <!-- <el-button type="warning">警告按钮</el-button>
        <el-button type="danger">危险按钮</el-button> -->
        </el-row>
    </div>
</template>


<script lang='ts'>
import { mixins } from 'vue-class-component'
import baseMixin from '@/mixins/baseMixin'
import { Component, Vue,Prop,Watch,Emit} from 'vue-property-decorator'
@Component({
components: {
}
})
export default class className extends mixins(baseMixin) {
@Prop({ default: 400 }) 
private visibilityHeight!: number
private labelPosition:string = 'right'
private formLabelAlign= {
          name: '',
          region: '',
          type: ''
        }

// @Emit()
// returnValue() {
// return 10
// }
}
</script>


<style scoped>
</style>