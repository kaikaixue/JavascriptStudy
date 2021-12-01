/*
 * @Author: your name
 * @Date: 2021-12-01 23:53:12
 * @LastEditTime: 2021-12-01 23:59:16
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \JavaScriptStudy\JS语法学习\作用域和变量提升.js
 */
console.log(a)
var a = 1

foo()

function foo () {
    console.log(i)
}

// 没有块级作用域
if (true) {
    var num = 123
    console.log(123) // 123
}
console.log(num)   // 123

// 就近原则
var num = 10
function fn () {
    // 外部函数   
    var num = 20
    function fun () {
        // 内部函数     
        console.log(num)    // 20
    }
    fun()
}
fn()