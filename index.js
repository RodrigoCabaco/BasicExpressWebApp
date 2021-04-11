const express = require('express');
const port = 3000;
const app = express();
var path = require('path');
const { isObject } = require('util');
var http = require('http').Server(app)
var io = require('socket.io')(http)
var root = path.join(__dirname+'/')
app.use(express.static(__dirname + '/'));


app.get('/',(req,res)=>{
    res.sendFile(root+'html'+'/'+__filename.split('/')[__filename.split('/').length-1].split('.js')[0]+'.html');
});

http.listen(port)
console.log("Listening on port "+port.toString())

io.sockets.on('connection', (socket) => {
    io.sockets.on('search', (msg) => {
      console.log('message: ' + msg);
    });
  });