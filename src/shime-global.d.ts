// 声明全局的 window ，不然使用 window.XX 时会报错
declare var windows: Window;
declare var document: Document;


// declare module "element-ui/lib/transitions/collapse-transition";
// declare module "element-ui";

// declare：当使用第三方库时，我们需要引用它的声明文件，才能获得对应的代码补全、接口提示等功能。
// 这里列举出几个常用的

// declare var 声明全局变量
// declare function 声明全局方法
// declare class 声明全局类
// declare enum 声明全局枚举类型
// declare global 扩展全局变量
// declare module 扩展模块