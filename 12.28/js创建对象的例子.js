// js创建对象的例子
// 第一种字面量方法创建对象
let obj = {
	name: '张三',
	age: 18,
};
console.log(obj);
// 第二种 new Object()方法创建对象
let obj2 = new Object();
obj2.name = '李四';
obj2.age = 20;
console.log(obj2);
// 第三种 Object.create()方法创建对象
let obj3 = Object.create(obj2);
obj3.name = '王五';
obj3.age = 22;
console.log(obj3);
// 第四种工厂模式创建对象
function createPerson(name, age) {
	let obj = new Object();
	obj.name = name;
	obj.age = age;
	return obj;
}
let obj4 = createPerson('赵六', 24);
console.log(obj4);
// 第五种 构造函数创建对象
function Person(name, age) {
	this.name = name;
	this.age = age;
}
let obj5 = new Person('田七', 26);
console.log(obj5);
// 第六种 原型模式创建对象
function Person2() {}
Person2.prototype.name = '张三';
Person2.prototype.age = 18;
Person2.prototype.sayName = function () {
	console.log(this.name);
};
let obj6 = new Person2();
obj6.name = '李四';
console.log(obj6.name);
obj6.sayName();
