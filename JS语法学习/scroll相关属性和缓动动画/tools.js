/*
 * @Author: your name
 * @Date: 2021-12-09 22:57:50
 * @LastEditTime: 2021-12-09 22:59:01
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \JavaScriptStudy\JS语法学习\scroll相关属性和缓动动画\tools.js
 */
function scroll () {
    if (window.pageYOffset !== undefined) {
        return {
            left: window.pageXOffset,
            top: window.pageYOffset
        }
    } else if (document.compatMode === "CSS1Compat") {
        return {
            left: document.documentElement.scrollLeft,
            top: document.documentElement.scrollTop
        }
    }
    return {
        left: document.body.scrollLeft,
        top: document.body.scrollTop
    }
}