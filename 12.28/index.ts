// function greeter(word: string) {
//     return "Hello, " + word;
// }
// let user = "Jane";
// document.body.innerHTML = greeter(user);
// let num1:number = 1;
// let num2:number = 2;
// let sum:number = num1 + num2;
// console.log(sum);
// let str1:string = "Hello"; 
// let str2:string = "World";
// let str3:string = str1 + str2;
// console.log(str3);
// let bool:boolean = true;
// console.log(bool);
// let array: number[] = [1, 2, 3, 4, 5];
// console.log(array);
// let array2: Array<number> = [1, 2, 3, 4, 5];
// console.log(array2);
// let array3: Array<string> = ["1", "2", "3", "4", "5"];
// console.log(array3);
// let array4: Array<boolean> = [true, false, true, false, true];
// console.log(array4);
// function getName(name:string,age:number):string {
//     return name + age;
// }
// function getName1(name:string,age:number):void {
//     console.log(name + age);
// }
//enum
// enum CODE3 {
//     SUCCESS = 200,
//     ERROR= 400,
//     WARING = 401
// }
// console.log(CODE3['SUCCESS']);
// console.log(CODE3.ERROR);
// console.log(CODE3['WARING']);
// enum CODE1 {
//     SUCCESS,
//     ERROR= 400,
//     WARING,
// }
// console.log(CODE1['SUCCESS']);
// console.log(CODE1.ERROR);
// console.log(CODE1['WARING']);
//交叉类型
// interface use {
//     name: string;
//     age: number;
// }
// interface per {
//     sex:number
// }
// type allInfo = use & per;
// let person:use & per = {name:"张三",age:18,sex:1};
// console.log(person);
//联合类型
// let alltype : string | number;
// alltype = 1;
// alltype = "HelloWorld";
// console.log(alltype);
// 接口的高阶用法
interface Person {
    name: string;
    age: number;
    sex: number;
    isJob: boolean;
    hobby: string[];
    former:number
    formerName:[string,string,string]
}
let person: Person = {
    name: "七七",
    age: 18,
    sex: 1,
    isJob: true,
    hobby: ["篮球", "足球", "乒乓球"],
    former:3,
    formerName:["张三","李四","王五"]
}
console.log(person);