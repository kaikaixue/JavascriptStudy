/*
 * @Author: your name
 * @Date: 2021-12-13 21:32:44
 * @LastEditTime: 2021-12-13 21:32:44
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \JavaScriptStudy\JS异步编程\Ajax传输JSON和XML\main.js
 */
var http = require("http")
http.createServer(function (request, response) {
  response.writeHead(200, { 'Content-Type': 'application/json' })
  let obj = {
    "name": "松山院",
    "skill": "编程",
    "friend": "达摩院"
  }
  response.end(JSON.stringify(obj))
}).listen(3000)

console.log('Server running at http://127.0.0.1:3000/')