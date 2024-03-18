// const http = require('http');//用于搭建服务器
const express = require('express')
const mysql = require('mysql')
const app = express()

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'platform_schema1',
  connectionLimit: 10 // 连接池最大连接数
})

//设置跨域访问  
app.all('*', function(req, res, next) {  
	res.header("Access-Control-Allow-Origin", "*");  
	res.header("Access-Control-Allow-Headers", "X-Requested-With");  
	res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");  
	res.header("X-Powered-By",' 3.2.1')  
	res.header("Content-Type", "application/json;charset=utf-8");  
	next();  
});  

app.get('/discuss', (req, res) => {
  pool.query('SELECT * FROM Discussion;', (err, rows) => {
    if (err) {
      console.error('Error querying database:', err)
      res.status(500).send('Internal Server Error')
    } else {
      res.json(rows)
    }
  })
})

const port = 3000
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
