Typescript与Javascript共享相同的基本类型，但有一些额外的类型。
①元组 Tuple
②枚举 enum
③Any 与Void

访问修饰符：public、private、protected
1.  默认为public
2.  当成员被标记为private时，它就不能在声明它的类的外部访问
3.  protected和private类似，但是，protected成员在派生类中可以访问
===============================================================

前端项目开发规范协议如下:
1.页面开发摆放顺序
HTML
TypeScript
CSS
即
<template>
</template>
<script>
</script>
<style>
</style>

===============================================================
2.vue 文件中 TS 上下文顺序
data
@Prop
@State
@Getter
@Action
@Mutation
@Watch
===============================================================

生命周期钩子
beforeCreate（按照生命周期钩子从上到下）
created
beforeMount
mounted
beforeUpdate
updated
activated
deactivated
beforeDestroy
destroyed
errorCaptured（最后一个生命周期钩子）
===============================================================

路由钩子

beforeRouteEnter
beforeRouteUpdate
beforeRouteLeave
computed
methods
===============================================================

3.组件引用，mixins，filters 等放在 @Component 里面

===============================================================
4.文件命名规范
  -1.单词小写，单词之间用 '-' 分隔
  -2.名词在前，动词在后
  -3.相同模块描述在前，不同描述在后

===============================================================

注意点

如果你引用第三方无类型声明的库，那就需要自己编写x.d.ts文件
如果引用 ui 组件的时候，如果控制台出现Property '$xxx' does not exist on type 'App'的话，
那么可以在vue-shim.d.ts增加
declare module 'vue/types/vue' {
  interface Vue {
    $xxx: any,
  }
}
===============================================================
├── public                          // 静态页面

├── src                             // 主目录

    ├── assets                      // 静态资源

    ├── components                  // 组件

    ├── filters                     // 过滤
 
    ├── store                       // vuex 配置
        ├── modules                     // 模块

            ├── app.ts                      // 系统模块 
        
            ├── user.ts                     // 用户模块 
        
            ├── article.ts                  // 文章模块 
    
        ├── types.ts                        // 类型
        
        └── index.ts                        // vuex 主入口

    ├── router                      // 路由
 
    ├── less                        // 样式
 
    ├── utils                       // 工具方法(axios封装，全局方法等)

    ├── views                       // 页面

    ├── App.vue                     // 页面主入口

    ├── main.ts                     // 脚本主入口

    ├── shims-tsx.d.ts              // 相关 tsx 模块注入 ==>允许你以.tsx结尾的文件，在Vue项目中编写jsx代码

    └──  shims-vue.d.ts              // Vue 模块注入==> 让 ts 识别 .vue Ts默认并不支持导入 vue 文件，这个文件告诉ts                                         //  导入 .vue 文件都按VueConstructor<Vue>处理。

├── tests                           // 测试用例

├── .eslintrc.js                    // eslint 相关配置

├── .gitignore                      // git 忽略文件配置

├── babel.config.js                 // babel 配置

├── postcss.config.js               // postcss 配置

├── package.json                    // 依赖

├── tsconfig.json                   // ts 配置

├── tslint.json                     // ts lint 相关配置

└── vue.config                      // vue & webpack 配置 
===============================================================

# vue-ts-demo1

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your unit tests
```
npm run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
