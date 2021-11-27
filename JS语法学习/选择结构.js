/*
 * @Author: your name
 * @Date: 2021-11-27 20:10:00
 * @LastEditTime: 2021-11-27 20:11:48
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \JavaScriptStudy\JS语法学习\BMI.js
 */

/**
 * BMI
 */
//第一步，输入身高和体重
var height = parseFloat(prompt('请输入身高，单位是米'))
var weight = parseFloat(prompt('请输入体重，单位是公斤'))
//第二步，计算BMI指数
var BMI = weight / Math.pow(height, 2)
//第三步，if语句来判断。注意跳楼现象
if (BMI < 18.5) {
    alert('偏瘦')
} else if (BMI < 25) {
    alert('正常')
} else if (BMI < 28) {
    alert('过重')
} else if (BMI <= 32) {
    alert('肥胖')
} else {
    alert('非常肥胖')
}

/**
 * 加油
 */
//第一步，输入
var grade = parseInt(prompt('您想加什么油？填写92或者97'))
var capacity = parseFloat(prompt('您想加多少升？'))

//第二步，判断
if (grade == 92) {
    //编号是92的时候做的事情
    if (capacity >= 20) {
        var price = capacity * 5.9
    } else {
        var price = capacity * 6
    }
} else if (grade == 97) {
    //编号是97的时候做的事情
    if (capacity >= 30) {
        var price = capacity * 6.95
    } else {
        var price = capacity * 7
    }
} else {
    alert('没有这个编号的汽油！')
}

alert('价格是' + price)

/**
 *接口返回code
 */
let retCode = 1003 // 返回码 retCode 的值可能有很多种情况

switch (retCode) {
    case 0:
        alert('接口联调成功')
        break
    case 101:
        alert('活动不存在')
        break

    case 103:
        alert('活动未开始')
        break

    case 104:
        alert('活动已结束')
        break

    case 1001:
        alert('参数错误')
        break

    case 1002:
        alert('接口频率限制')
        break

    case 1003:
        alert('未登录')
        break

    case 1004:
        alert('（风控用户）提示 活动太火爆啦~  请稍后再试')
        break

    // 其他异常返回码
    default:
        alert('系统失联了，请稍候再试')
        break
}