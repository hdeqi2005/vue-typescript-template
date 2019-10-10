// declare var 声明全局变量
// declare function 声明全局方法
// declare class 声明全局类
// declare enum 声明全局枚举类型
// declare global 扩展全局变量
// declare module 扩展模块



declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}

//axios中没有qs的ts文件暴露
declare module 'qs' {
  const qs: any;
  export default qs;
}

// 注意点

// 如果你引用第三方无类型声明的库，那就需要自己编写x.d.ts文件
// 如果引用 ui 组件的时候，如果控制台出现Property '$xxx' does not exist on type 'App'的话，
// 那么可以在vue-shim.d.ts增加
// declare module 'vue/types/vue' {
//   interface Vue {
//     $xxx: any,
//   }
// }




//这个时候已经能正确编译了，但是编辑器可能还有红色报错
// declare module "vue/types/vue" {
//   import VueRouter, { Route } from "vue-router";
//   interface Vue {
//     $router: VueRouter; // 这表示this下有这个东西
//     $route: Route;
//     $https: any; // 不知道类型就定为 any 吧（偷懒）
//     $urls: any;
//     $Message: any;
//     $config: any;
//   }
// }
// declare module "vue/types/vue" {
//   interface Vue {
//     $config: any;
//   }
// }