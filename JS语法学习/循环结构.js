/*
 * @Author: your name
 * @Date: 2021-11-27 20:13:05
 * @LastEditTime: 2021-11-27 20:15:11
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \JavaScriptStudy\JS语法学习\循环结构.js
 */

/**
 * 假如投资的年利率为 5%，试求从 1000 块增长到 5000 块，需要花费多少年？
 */
var money = 1000   // 当前钱数
var count = 0  // 计数器
while (money < 5000) {
    money *= 1.05
    count++
}
console.log(money)
console.log('一共需要' + count + '年');