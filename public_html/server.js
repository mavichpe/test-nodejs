/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var http = require('http');
var dispatcher = require('./dispatcher');

function handleRequest(request, response) {
    try {
        dispatcher.dispatch(request, response);
    } catch (err) {
        console.log("Server.js =>" + err);
    }
}

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(8181, function () {
    console.log("Server listening on: http://localhost:8181");
});
