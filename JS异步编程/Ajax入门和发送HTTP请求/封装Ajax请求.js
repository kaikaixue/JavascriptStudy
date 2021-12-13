/*
 * @Author: your name
 * @Date: 2021-12-13 21:15:27
 * @LastEditTime: 2021-12-13 21:22:49
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \JavaScriptStudy\JS异步编程\Ajax入门和发送HTTP请求\封装Ajax请求.js
 */
// 封装ajax为公共函数，传入回调函数success和fail
function myAjax (url, success, fail) {
    // 1.创建XMLHttpRequest对象
    var xmlhttp
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest()
    } else {
        xmlhttp = new ActiveXObject('Microsoft.XMLHTTP')
    }
    // 2.发送请求
    xmlhttp.open('GET', url, true)
    xmlhttp.send()
    // 3.服务端响应
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.states === 200) {
            var obj = JSON.parse(xmlhttp.reponseText)
            console.log('数据返回成功:' + obj)
            success && success(xmlhttp.responseText)
        } else {
            // 这里的 && 符号，意思是： 如果传了fail参数，就调用后面的fail;如果没传，就不调
            fail && fail(new Error('接口请求失败'))
        }
    }
}

// 单次调用 ajax
myAjax('a.json', (res) => {
    console.log(res)
})

// 多次调用ajax.顺序 a --> b --> c
myAjax('a.json', (res) => {
    console.log(res)
    myAjax('b.json', (res) => {
        console.log(res)
        myAjax('c.json', (res) => {
            console.log(res)
        })
    })
})