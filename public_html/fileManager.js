/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//ZIP install comand =>npm install node-zip
var fs = require('fs');
var zip = new require('node-zip')();
module.exports = {
    loadJsonFile: function (fileName) {
        var fileContent = fs.readFileSync('files/json/' + fileName, 'utf8');
        return JSON.parse(fileContent);
    },
    createFile: function (jsonContent, filename) {
        zip.file(filename + ".json", JSON.stringify(jsonContent));
        var data = zip.generate({base64: false, compression: 'DEFLATE'});
        fs.writeFileSync("files/exports/" + filename + ".zip", data, 'binary');
    },
    createReadStream: function (file) {
        return fs.createReadStream(file)
    }
}