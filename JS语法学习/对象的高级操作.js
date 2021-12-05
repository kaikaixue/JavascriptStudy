/*
 * @Author: your name
 * @Date: 2021-12-05 10:38:39
 * @LastEditTime: 2021-12-05 10:44:52
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \JavaScriptStudy\对象的高级操作.js
 */
// Object.freeze()冻结对象
const params = {
    name: 'localhost',
    port: '8080'
}
console.log(params)

Object.freeze(params) // 冻结对象 params

params.port = '9090' // 修改无效

console.log(params)

// 原型
function Person (name, age, gender) {
    this.name = name
    this.age = age
    this.gender = gender
}

// 用原型添加方法
Person.prototype.sayName = function () {
    console.log("Hello大家好，我是:" + this.name)
}

// 用原型重写toString
Person.prototype.toString = function () {
    return (
        "Person[name=" +
        this.name +
        ",age=" +
        this.age +
        ",gender=" +
        this.gender +
        "]"
    )
}

//创建一个Person的实例
var per1 = new Person("aaa", 18, "男")
var per2 = new Person("bbb", 28, "男")
per1.sayName()
per2.sayName()

console.log(per1.sayName == per2.sayName)  // true
console.log("per1 = " + per1)
console.log("per2 = " + per2.toString())