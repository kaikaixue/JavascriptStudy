/*
 * @Author: your name
 * @Date: 2021-11-28 14:35:54
 * @LastEditTime: 2021-11-28 14:47:22
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \JavaScriptStudy\JS语法学习\内置对象Date.js
 */
var date1 = new Date()
console.log(date1)
console.log(typeof date1)

const date11 = new Date('2021/11/25 21:00:00')
console.log(date11)  //Thu Nov 25 2021 21:00:00 GMT+0800 (中国标准时间)

const date12 = new Date('2020/04/19') // 返回的就是四月
console.log(date12) // Sun Apr 19 2020 00:00:00 GMT+0800 (中国标准时间)

const date13 = new Date('2020-05-20')
console.log(date13) // Wed May 20 2020 08:00:00 GMT+0800 (中国标准时间)

const date14 = new Date('Wed Jan 27 2021 12:00:00 GMT+0800 (中国标准时间)')
console.log(date14) // Wed Jan 27 2021 12:00:00 GMT+0800 (中国标准时间)

const date21 = new Date(2020, 2, 18) // 注意，第二个参数返回的是三月，不是二月
console.log(date21) // Wed Mar 18 2020 00:00:00 GMT+0800 (中国标准时间)

const date22 = new Date(2021, 11, 18, 22, 59, 58)
console.log(date22) // Sat Dec 18 2021 22:59:58 GMT+0800 (中国标准时间)

var myDate = new Date()

console.log(myDate)

console.log(myDate.getFullYear())
console.log(myDate.getMonth() + 1)
console.log(myDate.getDate())

var dayArr = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
console.log(myDate.getDay())
console.log(dayArr[myDate.getDay()])

console.log(myDate.getHours())   // 0
console.log(myDate.getMinutes()) // 13
console.log(myDate.getSeconds()) // 35
console.log(myDate.getMilliseconds()) // 459

console.log(myDate.getTime()) // 获取时间戳

// 方法：日期格式化
function formatDate () {
    var date = new Date()
    var year = date.getFullYear() // 年
    var month = date.getMonth() + 1 // 月
    var day = date.getDate() // 日
    var week = date.getDay() // 星期几
    var hour = date.getHours() // 时
    hour = hour < 10 ? '0' + hour : hour // 如果只有一位，则前面补零
    var minute = date.getMinutes() // 分
    minute = minute < 10 ? '0' + minute : minute // 如果只有一位，则前面补零
    var second = date.getSeconds() // 秒
    second = second < 10 ? '0' + second : second // 如果只有一位，则前面补零
    var result = `今天是: ${year}年${month}月${day}日 ${hour}:${minute}:${second} ${weekArr[week]}`
    return result
}

console.log(formatDate())