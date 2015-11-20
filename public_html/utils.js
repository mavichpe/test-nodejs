/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//Dispatcher install comand => npm install httpdispatcher
module.exports = {
    jsonSum: function (firstJson, SecondJson) {
        var sumedJson = [];
        firstJson.forEach(function (element, index) {
            if (SecondJson[index] != null)
                sumedJson.push((element + SecondJson[index]));
            else
                sumedJson.push(element);
        });
        return sumedJson;
    }, jsonElementSum: function (jsonElements) {
        var elementSumTotal = 0;
        jsonElements.forEach(function (element, index) {
            elementSumTotal += element;
        });
        return elementSumTotal;
    },
    jsonGetEvenElement: function (jsonElements) {
        var eventElement = jsonElements.filter(function (element) {
            return element % 2 == 0;
        });
        return eventElement;
    },
    jsonGetOddElement: function (jsonElements) {
        var elementSumTotal = 0;
        jsonElements.forEach(function (element, index) {
            if (element % 2 != 0)
                elementSumTotal += element;
        });
        return elementSumTotal;
    }
}