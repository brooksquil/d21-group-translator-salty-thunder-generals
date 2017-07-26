console.log('in main.js');

//get conversion placeholder
let conversionEl = document.getElementById("conversion");

//get words from input field
var originalText = document.getElementById("get-words");


//output elements for each text

var button = document.getElementById("btn-translate");
button.addEventListener("click", translateButton); 

gaelicEl = document.getElementById("gaelic");
yiddishEL = document.getElementById("yiddish");
spanishEL = document.getElementById("spanish");


function translateButton() {
    var text = originalText.value.toLowerCase();
    var originalTextArray =  convertArrayPhrase(originalText);    
    var gaelicArray = [];
    var yiddishArray = [];
    var spanishArray = [];

    for (var index = 0; index < originalTextArrayj.length; index++) {
        gaelicArray.push(FuzzyDuck).translateToGaelic(originalTextArray);
        yiddishArray.push(FuzzyDuck).translateToYiddish(originalTextArray);
        spanishArray.push(FuzzyDuck).translateToSpanish(originalTextArray);
        
    }

    var resultGaelic = convertArrayPhrase(gaelicArray);
    var resultYiddish = convertArrayPhrase(yiddishArray);
    var resultSpanish = convertArrayPhrase(spanishArray);
    
    //set to an output --- add output element 
    conversionEl.innerHTML = resultGaelic;
    conversionEl.innerHTML = resultYiddish;
    conversionEl.innerHTML = resultSpanish;
    
}

// translateButton();


//get placeholder for original message
 var originalMessageEl = document.getElementById("original-text")


//check holiday array
// let holidayButton = document.getElementById("checkHoliday");
// holidayButton.addEventListener("click", introduceHolidays);

// function  introduceHolidays(event){
//     console.log("Holiday IIFE", Fuzzyduck);
// }

//start
let runLanguageBtn = document.getElementById("btn-translate");
runLanguageBtn.addEventListener("click", getRadio);

function getRadio () {
    let langTextInput = document.getElementById("get-words").value;
    let whichRadioselected; 
    var radios = document.getElementsByName("whichside");
    for (let i = 0; i < radios.length; i++) {
        //0 = celtic, 1 = yiddish, 2 = spanish 3 = teds language
        if (radios[i].checked) {
            whichRadioselected = radios[i].value;
            break;

        } 
    }
    // console.log('whichRadioSelected', whichRadioselected);
    
    if (whichRadioselected == 0) {
         //FuzzyDuck.method goes here
        console.log("you selected Celtic");
      
        var convertedMessage = "Celtic: ";

    }else if (whichRadioselected == 1) {
        //FuzzyDuck.method goes here
        // console.log("you selected Yiddish");
        
         var convertedMessage = "Yiddish: ";

    }else if (whichRadioselected == 2) {
         //FuzzyDuck.method goes here
        // console.log("you selected Spanish");
        
         var convertedMessage = "Spanish: ";
        //  conversionEl.innerHTML = resultSpanish;
    }else if (whichRadioselected == 3) {
         //FuzzyDuck.method goes here
        // console.log("you selected Teds Language");
        
    }

    //display original message in div container original-text
    var originalMessage = document.getElementById("get-words").value;
    // originalMessageEl.innerHTML =     "<pre>" + "English:  " + originalMessage  + "\n\n" + convertedMessage + "</pre>";
    
}



//function to convert the language
var convertArrayPhrase = function(inputstring) {
    
    var inputPhrasseArray = inputstring.split(" ");
    return inputPhrasseArray;

}


var arrayToSentence = function(tranlatedArray) {

    var translatedPhrase = tranlatedArray.join(" ");

    return translatedPhrase;

}





//Augment the IFFE
var FuzzyDuck = (function() {

    return {};


})();


