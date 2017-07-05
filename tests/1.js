var express = require('express');
var fs = require('fs');
var cmd=require('node-cmd');
var app = express();
//Handles post requests
//Handles put requests;
 app.use(require('body-parser').urlencoded({extended: true}))
	app.all('/',function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    next();
});
//  ��ҳ��� "Hello World"
app.get('/', function (req, res) {
   console.log("��ҳ GET ����");
   res.send('Hello GET');
})
 
 
//  POST ����
app.post('/', function (req, res) {

   console.log(req.body.code);
   
	fs.writeFile("1.py", req.body.code, function(err) {
    if(err) {
        return console.log(err);
    }
 
    console.log("The file was saved!");
});
	cmd.run('python 1.py');
	
})

 
 
var server = app.listen(8080, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("http://%s:%s", host, port)
 
})