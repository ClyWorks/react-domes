var express = require('express');
var path = require('path');

var compression = require('compression')

var app = express()
	// 必须写在最前面（放在 var app = express() 语句后面就行）
app.use(compression())
	// 通过 Express 托管静态资源，比如 index.css
	// 访问静态资源文件时，express.static 中间件会根据目录查找所需的文件
app.use(express.static(path.join(__dirname, 'public')))


//// 设置路由规则，将所有的路由请求发送至 index.html   

app.get('*', function(req, res) {
	res.sendFile(path.join(__dirname, 'public', 'index.html'))
})


//启动服务器

var POPR = process.env.RORT || 8030

app.listen(POPR, function() {
	console.log('Production Express server running at localhost:' + POPR)
})