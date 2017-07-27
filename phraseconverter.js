console.log('you are in phraseconverter.js');
//function to convert the language
var convertPhraseToArray = function(input) {
    
    var inputPhraseArray = input.split(" ");
    return inputPhraseArray;

}


var convertArrayToPhrase = function(tranlatedArray) {

    var translatedPhrase = tranlatedArray.join(" ");

    return translatedPhrase;

}
