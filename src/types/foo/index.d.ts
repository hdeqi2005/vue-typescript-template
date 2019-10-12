// 创建一个 types 目录，专门用来管理自己写的声明文件，将 foo 的声明文件放到 types/foo/index.d.ts 中。
// 这种方式需要配置下 tsconfig.json 中的 paths 和 baseUrl 字段

// tsconfig.json 内容：
// {
//     "compilerOptions": {
//         "module": "commonjs",
//         "baseUrl": "./",
//         "paths": {
//             "*": ["types/*"]
//         }
//     }
// }

// types/foo/index.d.ts

export const name: string;
export function getName(): string;
export class Animal {
    constructor(name: string);
    sayHi(): string;
}
export enum Directions {
    Up,
    Down,
    Left,
    Right
}
export interface Options {
    data: any;
}

//使用方法:

//对应的导入和使用模块应该是这样：

// src/index.ts

// import { name, getName, Animal, Directions, Options } from 'foo';

// console.log(name);
// let myName = getName();
// let cat = new Animal('Tom');
// let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];
// let options: Options = {
//     data: {
//         name: 'foo'
//     }
// };


// 混用 declare 和 export
// 我们也可以使用 declare 先声明多个变量，最后再用 export 一次性导出。上例的声明文件可以等价的改写为16：
// // types/foo/index.d.ts

// declare const name: string;
// declare function getName(): string;
// declare class Animal {
//     constructor(name: string);
//     sayHi(): string;
// }
// declare enum Directions {
//     Up,
//     Down,
//     Left,
//     Right
// }
//注意，与全局变量的声明文件类似，interface 前是不需要 declare 的。
// interface Options {
//     data: any;
// }

// export { name, getName, Animal, Directions, Options };


// types/foo/index.d.ts
//######// 声明:#############
// export namespace foo {
//     const name: string;
//     namespace bar {
//         function baz(): string;
//     }
// }

//######// 使用:#############

// // src/index.ts

// import { foo } from 'foo';

// console.log(foo.name);
// foo.bar.baz();


//=====================================
// 注意，只有 function、class 和 interface 可以直接默认导出，其他的变量需要先定义出来，再默认导出19：
// // types/foo/index.d.ts

// export default enum Directions {
// // ERROR: Expression expected.
//     Up,
//     Down,
//     Left,
//     Right
// }

// 上例中 export default enum 是错误的语法，需要使用 declare enum 定义出来，然后使用 export default 导出：
// // types/foo/index.d.ts

// declare enum Directions {
//     Up,
//     Down,
//     Left,
//     Right
// }

// export default Directions;