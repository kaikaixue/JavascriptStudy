/*
 * @Author: your name
 * @Date: 2021-12-13 21:06:00
 * @LastEditTime: 2021-12-13 21:14:31
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \JavaScriptStudy\JS异步编程\Ajax入门和发送HTTP请求\Ajax请求.js
 */
//【发送ajax请求需要5步】
// 1.创建XMLHttpRequest对象
var xmlhttp = new XMLHttpRequest()

// 2.设置请求的参数。包括：请求的方法、请求的url
xmlhttp.open('get', 'api/get')

// 3.发送请求
xmlhttp.send()

// 4.注册事件。onreadystatechange事件，状态改变时就会调用
// 如果要在数据完整请求回来的时候才调用，我们需要手写一些判断的逻辑
xmlhttp.onreadystatechange = function () {
    // 为了保证数据完整返回，一般判断两个值
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        // 5.服务端响应：如果能够进入这个判断，说明数据请求成功了
        console.log('数据返回成功:' + JSON.stringify(xmlhttp.responseText))

    }
}

// 1.异步对象
var xmlhttp = new XMLHttpRequest()

// 2.设置请求参数。
xmlhttp.open('post', '/api/post')

// 如果想要使用post提交数据，必须添加
xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')

// 3.发送请求
xmlhttp.send('name=xkk&age=20')

// 4.注册事件
xmlhttp.onreadystatechange = function () {
    // 5.服务端相应
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        alert(xmlhttp.responseText)
    }
}