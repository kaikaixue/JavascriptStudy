/*
 * @Author: your name
 * @Date: 2021-11-28 14:07:39
 * @LastEditTime: 2021-11-28 14:27:50
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \JavaScriptStudy\JS语法学习\Number和Math.js
 */

// Number.isInteger()判断是否为整数
console.log(Number.isInteger(10))  // true
console.log(Number.isInteger(10.1))    // false

// toFixed() 小数点后面保留多少位
let num = 3.456
let num2 = num.toFixed(2)

console.log(num)
console.log(num2)
console.log(typeof num)    // number
console.log(typeof num2)    // String

var num3 = -0.6
console.log(Math.abs(num3))        // 取绝对值
console.log(Math.floor(num3))      // 向下取整，向小取
console.log(Math.ceil(num3))       // 向上取整，向大取
console.log(Math.round(num3))      // 四舍五入取整（正数四舍五入，负数五舍六入）
console.log(Math.random())        // 生成0-1之间的随机数

// Math.abs() 取绝对值
console.log(Math.abs(2))   // 2
console.log(Math.abs(-2))  // 2
console.log(Math.abs('2')) // 2,先做隐式转换
console.log(Math.abs('hello')) // NaN

// Math.random() 方法，生成随机数
// 生成两个整数之间的随机整数，并且要包含这两个整数
function getRandom (min, max) {
    return Math.floor(Math.random * (max - min + 1)) + min
}
console.log(getRandom(1, 10))
