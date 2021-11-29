/*
 * @Author: your name
 * @Date: 2021-11-29 19:21:48
 * @LastEditTime: 2021-11-29 19:51:52
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \JavaScriptStudy\JS语法学习\函数.js
 */

console.log("你好")
sayHello() // 调用函数

// 定义函数
function sayHello () {
    console.log("欢迎")
    console.log("welcome")
}

function fun1 (a, b) {
    return a + b
}
console.log(fun1(3, 4))

var fun2 = function () {
    console.log("我是匿名函数中封装的代码")
}
fun2()

var fun3 = new Function('a', 'b', 'console.log("我是函数内部的内容"); console.log(a + b)')

fun3(1, 1)

// 1.普通调用
function fn1 () {
    console.log('我是函数体里面的内容1')
}

function fn2 () {
    console.log('我是函数体里面的内容2')
}

fn1()
fn2.call()

// 2.通过对象的方法来调用
var obj = {
    a: '松山院',
    fn2: function () {
        console.log('好好学习，天天向上')
    }
}
obj.fn2()

    // 3.立即执行函数
    (function () {
        console.log('我是立即执行函数')
    })

// 4.通过构造函数来调用
function Fun3 () {
    console.log('好好学习，天天向上')
}

new Fun3()

// 6.定时器函数
let num = 1
setInterval(() => {
    num++
    console.log(num)
}, 1000)

console.log(fn) == console.log(function fn () { console.log(1) })

// 定义fn方法
function fn () {
    console.log(1)
}

// 立即执行函数
(function (a, b) {
    console.log("a = " + a)
    console.log("b = " + b)
})(123, 456)

// 类数组 arguments
function foo () {
    console.log(arguments)
    console.log(typeof arguments)
}

foo()

// 返回实参的个数：arguments.length
function test (a, b) {
    console.log(arguments)
    console.log(test.length)
    console.log(arguments.length)
    console.log('-----------------------')
}

test(2, 4)
test(2, 4, 6)
test(2, 4, 6, 8)

// 返回正在执行的函数: arguments.callee
function test1 () {
    console.log(arguments.callee == fun)
}

test1('hello')

// arguments 修改元素
fn(2, 4)
fn(2, 4, 6)
fn(2, 4, 6, 8)

function fn (a, b) {
    arguments[0] = 99 //将实参的第一个数改为99
    arguments.push(8) //此方法不通过，因为无法增加元素
}

// 利用 arguments 求实参中的最大值
function getMaxValue () {
    var max = arguments[0]
    // 通过 arguments 遍历实参
    for (var i = 0; i < arguments.length; i++) {
        if (max < arguments[i]) {
            max = arguments[i]
        }
    }
    return max
}
console.log(getMaxValue(1,3,5,7))