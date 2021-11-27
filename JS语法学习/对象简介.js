/*
 * @Author: your name
 * @Date: 2021-11-27 20:25:41
 * @LastEditTime: 2021-11-27 20:28:15
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \JavaScriptStudy\JS语法学习\对象简介.js
 */

var obj = new Object()
obj.sayName = function () {
    console.log('hello')
}

console.log(obj.sayName)  //没加括号，就是获取方法
console.log('-----------')
console.log(obj.sayName())  //加了括号，就是调用方法。即：执行函数内容，并执行函数体的内容

/**
 * 对象中放对象
 */
//创建对象 obj1
var obj1 = new Object()
obj1.test = undefined

//创建对象 obj2
var obj2 = new Object()
obj2.name = "hello"

//将整个 obj2 对象，设置为 obj1 的属性
obj1.test = obj2

console.log(obj1.test.name)