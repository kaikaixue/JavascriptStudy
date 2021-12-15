/*
 * @Author: your name
 * @Date: 2021-12-15 21:40:54
 * @LastEditTime: 2021-12-15 21:40:55
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \JavaScriptStudy\JS异步编程\同源和跨域\api.js
 */
var express = require('express')
var app = express()
var urlLib = require('url')

app.get('/info', function (req, res, next) {
  let data = { 'name': 'ssy', 'age': '20' }
  let params = urlLib.parse(req.url, true)
  let str = params.query.callback + '(' + JSON.stringify(data) + ')'
  res.send(str)
})

var server = app.listen(3000, function () {
  console.log('服务器启动：http://localhost:3000')
})