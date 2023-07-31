const WebSocket = require('ws')
var http = require('http');
var url = require('url');
var Chatbot = require('./chatbot.js');

var st = require('node-static');

var fileServer = new st.Server('../Practical_Ass1');

var httpserver = http.createServer(function(request, response) 
{
	request.on('end', function () {
	var get = url.parse(request.url, true).query;
	fileServer.serve(request, response);
	}).resume();

}).listen(8080, function() {
    console.log((new Date()) + 
      ' Server is listening on port 8080');
});

//WebSocket.Server({server: httpserver})
const wss = new WebSocket.Server({ server: httpserver });

wss.on('connection', function(ws) {
  ws.send('Hello client')
  
  ws.on('message', message => {
    console.log(`Received message => ${message}`)
    // console.log(Chatbot.ChatbotReply(message))
    ws.send(Chatbot.reply(message))
  })
  
})