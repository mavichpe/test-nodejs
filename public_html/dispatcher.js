/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//Dispatcher install comand => npm install httpdispatcher
var dispatcher = require('httpdispatcher');
var fileManager = require('./fileManager');
var utils = require('./utils');

module.exports = {
    dispatch: function (request, response) {
        try {
            dispatcher.dispatch(request, response);
        } catch (err) {
            console.log("Dispatcher.js =>" + err);
        }
    }
}

var sendDownloadResponse = function (request, response) {
    var file = __dirname + '/files/exports/response.zip';
    response.setHeader('Content-Description', 'File Transfer');
    response.setHeader('Content-disposition', 'attachment; filename=response.zip');
    response.setHeader('Content-Transfer-Encoding', 'binary');
    response.setHeader('Content-type', "application/zip, application/octet-stream");
    response.writeHead(200, {'Content-Type': 'text/plain'});
    var filestream = fileManager.createReadStream(file);
    filestream.pipe(response);
}

dispatcher.onGet("/exercise1", function (request, response) {
    var jsonA = fileManager.loadJsonFile("a.json");
    var jsonB = fileManager.loadJsonFile("b.json");
    var responseJson;
    if (jsonA.length > jsonB.length) {
        responseJson = utils.jsonSum(jsonA, jsonB);
    } else {
        responseJson = utils.jsonSum(jsonB, jsonA);
    }
    fileManager.createFile(responseJson, "response");
    sendDownloadResponse(request, response);
});

dispatcher.onGet("/exercise2", function (request, response) {
    var jsonA = fileManager.loadJsonFile("a.json");
    var responseJson;
    if (utils.jsonElementSum(jsonA) % 2 == 0) {
        var jsonB = fileManager.loadJsonFile("b.json");
        responseJson = utils.jsonGetEvenElement(jsonB);
    } else {
        var jsonC = fileManager.loadJsonFile("c.json");
        responseJson = [utils.jsonGetOddElement(jsonC)];
    }
    fileManager.createFile(responseJson, "response");
    sendDownloadResponse(request, response);
});