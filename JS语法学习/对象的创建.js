/*
 * @Author: your name
 * @Date: 2021-12-02 18:49:03
 * @LastEditTime: 2021-12-02 19:08:59
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \JavaScriptStudy\JS语法学习\对象的创建.js
 */
const obj1 = {
    name: '松山院',
    age: 20
}
console.log(JSON.stringify(obj1))

const obj2 = {
    name: '松山院',
    age: 20,
    isBoy: true,
    info: {
        id: 1,
        height: 175
    },
    sayName: function () {
        console.log(this.name)
    }
}

console.log(JSON.stringify(obj2))

/**
 * 工厂模式
 */
function createPerson (name, age, gender) {
    // 创建一个新的对象
    var obj = new Object()
    // 向对象中添加属性
    obj.name = name
    obj.age = age
    obj.gender = gender
    obj.sayName = function () {
        alert(this.name)
    }
    return obj
}

var obj3 = createPerson('aaa', 20, '男')
var obj4 = createPerson('bbb', 21, '女')
var obj5 = createPerson('ccc', 22, '女')
console.log(JSON.stringify(obj2))
console.log(JSON.stringify(obj3))
console.log(JSON.stringify(obj4))

// instanceof
function Person () { }

function Dog () { }

var person1 = new Person()

var dog1 = new Dog()

console.log(person1 instanceof Person) // true
console.log(dog1 instanceof Person) // false

console.log(dog1 instanceof Object) // 所有的对象都是Object的后代。因此，打印结果为：true

// Json
var myJson = {
    name: 'ssy',
    aaa: 111,
    bbb: 222,
}

//JSON遍历的方法：for...in...
for (var key in myJson) {
    console.log(key) //获取 键
    console.log(myJson[key]) //获取 值（第二种属性绑定和获取值的方法）
    console.log('------')
}