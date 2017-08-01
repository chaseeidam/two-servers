//require/import the http module
var http = require("http");
//define the ports to listen to
var PORTONE = 7000;
var PORTTWO = 7500;

//two different functions for request one for each server 
function handleRequestOne(request, response) {
    response.end("you're awesome!");
}

function handleRequestTwo(request, response) {
    response.end("you are a loser!");
}

//create servers 
var serverOne = http.createServer(handleRequestOne);
var serverTwo = http.createServer(handleRequestTwo);

//starting servers
serverOne.listen(PORTONE, function() {
    console.log("server listening on: http://localhost:%s", PORTONE);
});

serverTwo.listen(PORTTWO, function() {
    console.log("server listening on: http://localhost:%s", PORTTWO);
});