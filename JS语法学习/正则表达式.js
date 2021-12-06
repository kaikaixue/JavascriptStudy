/*
 * @Author: your name
 * @Date: 2021-12-06 16:56:09
 * @LastEditTime: 2021-12-06 19:50:37
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \JavaScriptStudy\JS语法学习\正则表达式.js
 */
// var reg = new RegExp('A', 'i')  // 检查字符串是否包含a,忽略大小写
// var str = 'hello'

// console.log(reg.test(str))

// var reg1 = /A/i
// console.log(reg1.test(reg1))

const reg = /test/g
const str = '_test_test'

console.log(reg.test(str)) // true
console.log(reg.lastIndex) // 5

console.log(reg.test(str)) // true
console.log(reg.lastIndex) // 10

console.log(reg.test(str)) // false
console.log(reg.lastIndex) // 0

// 检查一个字符串中是否包含a或b
var reg = /a|b/
var reg = /[ab]/

// 是否包含小写字母
var reg = /[a-z]/
// 大写字母
var reg = /[A-Z]/
// 任意字母
var reg = /[A-z]/
// 任意数字
var reg = /[0-9]/
// 检查一个字符串中是否包含abc或adc或aec
var reg = /a[bde]c/

var reg = /[^ab]/ // 规则：字符串中，除了a、b之外，还有没有其他的字符内容？
var str = "acb"

console.log(reg.test(str)) // 打印结果：true

var reg = /[^0-9]/  // 规则：字符串中，除了数字之外，还有没有其他的内容？
var str1 = "1991"
var str2 = "199a1"

console.log(reg.test(str1)) // 打印结果：false （如果字符串是 纯数字，则返回 false）
console.log(reg.test(str2)) // 打印结果：true

// split
var str = "1a2b3c4d5e6f7g"

var result = str.split(/[A-z]/) // 参数是一个正则表达式：表示所有字母
console.log(result)

// search
var str = "hello abc hello aec afc"
/*
* 搜索字符串中是否含有abc 或 aec 或 afc
*/
result = str.search(/a[bef]c/)
console.log(result) // 6

// match
var str = "1a2a3a4a5e6f7A8B9C"

var result1 = str.match(/[a-z]/)   // 找到符合要求的第一个内容，然后返回
var result2 = str.match(/[a-z]/g)  // 设置为“全局匹配”模式，匹配字符串中 所有的小写字母
var result3 = str.match(/[a-z]/gi) // 设置多个匹配模式，匹配字符串中 所有的字母（忽略大小写）

console.log(result1) // 打印结果：["a"]
console.log(result2) // 打印结果：["a", "a", "a", "a", "e", "f"]
console.log(result3) // 打印结果：["a", "a", "a", "a", "e", "f", "A", "B", "C"]

// replace
//replace()方法：替换
var str2 = "Today is fine day,today is fine day !!!"

console.log(str2)
console.log(str2.replace("today", "tomorrow"))  //只能替换第一个today
console.log(str2.replace(/today/gi, "tomorrow")) //这里用到了正则，且为“全局匹配”模式，才能替换所有的today

/**
 * 检查一个字符串是否是一个合法手机号
 */
var phoneStr = '18014698813'
var phoneReg = /^1[3-9][0-9]{9}$/
console.log(phoneReg.test(phoneStr))

/**
 * 去掉字符串开头和结尾的空格
 */
str = str.replace(/^\s*/, "") //去除开头的空格

str = str.replace(/\s*$/, "") //去除结尾的空格

/**
 * 判断字符串是否位电子邮件
 */

var emailReg = /^\w{3,}(\.\w+)*@[A-z0-9]+(\.[A-z]{2,5}){1,2}$/
var email = "abchello@163.com"
console.log(emailReg.test(email))