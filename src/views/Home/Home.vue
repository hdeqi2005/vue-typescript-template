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
        <button @click="getUUId()">登陆</button>
    </div>
    
  </div>
</template>

<script lang="ts" src="./Home.ts">
</script>
