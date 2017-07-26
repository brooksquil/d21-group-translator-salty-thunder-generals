var inputText = document.getElementById("userInput");

var button = document.getElementById("translateButton");
button.addEventListener("click", clickButton); 
var frenchEl = document.getElementById("frenchEl")    
var spanishEl = document.getElementById("spanishEl")    
var germanEl = document.getElementById("germanEl")    

function clickButton (){
    var text = inputText.value.toLowerCase();
    var textArray = phraseToArray(text);
    var frenchText = []; 
    var spanishText = [];
    var germanText = [];
    for (var i = 0; i < textArray.length; i++) {
         frenchText.push(translateText.translateToFrench(textArray[i]));
         spanishText.push(translateText.translateToSpanish(textArray[i]));
         germanText.push(translateText.translateToGerman(textArray[i]));
    }
var finalFrench = arrayToPhrase(frenchText);
var finalSpanish = arrayToPhrase(spanishText);
var finalGerman = arrayToPhrase(germanText);
germanEl.innerHTML = finalGermaxn;
spanishEl.innerHTML = finalSpanish;
frenchEl.innerHTML = finalFrench;
}




//french.js
var translateText = function (french) {
     var frenchText = {"merry":"joyeux", 
                        "christmas":"noel",
                        "and":"et", 
                        "happy":"bonne", 
                        "new":"nouvel", 
                        "year":"An" };
     french.translateToFrench = function(input) {
         return frenchText[input]
     };
return french;
}(translateText);




//handler.js
var phraseToArray = function(inputstring) {
    
    var inputArray = inputstring.split(" ");
    return inputArray;

}


var arrayToPhrase = function(tranlatedArray) {

    var translatedPhrase = tranlatedArray.join(" ");

    return translatedPhrase;

}