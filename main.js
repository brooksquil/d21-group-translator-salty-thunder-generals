console.log('in main.js');

//get conversion placeholder
let conversionEl = document.getElementById("conversion");

//get words from input field
var originalText = document.getElementById("get-words") ;


//output elements for each text

var button = document.getElementById("btn-translate");
button.addEventListener("click", translateButton); 

gaelicEl = document.getElementById("gaelic");
yiddishEL = document.getElementById("yiddish");
spanishEL = document.getElementById("spanish");


function translateButton() {
    var text = originalText.value.toLowerCase();
    var originalTextArray =  convertPhraseToArray(text);    
    var gaelicArray = [];
    var yiddishArray = [];
    var spanishArray = [];

    for (var i = 0; i < originalTextArray.length; i++) {
        gaelicArray.push(FuzzyDuck.translateToGaelic(originalTextArray[i]));
        yiddishArray.push(FuzzyDuck.translateToYiddish(originalTextArray[i]));
        spanishArray.push(FuzzyDuck.translateToSpanish(originalTextArray[i]));
        
    }

    var resultGaelic = convertArrayToPhrase(gaelicArray);
    var resultYiddish = convertArrayToPhrase(yiddishArray);
    var resultSpanish = convertArrayToPhrase(spanishArray);
    
    //set to an output --- add output element 
    gaelicEl.innerHTML = "The result in Gaelic " + resultGaelic;
    yiddishEL.innerHTML = "The result in Yiddish " + resultYiddish; 
    spanishEL.innerHTML = "The result in Spanish " + resultSpanish;
   
}

// translateButton();


//get placeholder for original message
//  var originalMessageEl = document.getElementById("original-text")


//check holiday array
// let holidayButton = document.getElementById("checkHoliday");
// holidayButton.addEventListener("click", introduceHolidays);

// function  introduceHolidays(event){
//     console.log("Holiday IIFE", Fuzzyduck);
// }

// start
// let runLanguageBtn = document.getElementById("btn-translate");
// button.addEventListener("click", getRadio);

// function getRadio () {
//     let langTextInput = document.getElementById("get-words").value;
//     let whichRadioselected; 
//     var radios = document.getElementsByName("whichside");
//     for (let i = 0; i < radios.length; i++) {
//         //0 = gaelic, 1 = yiddish, 2 = spanish 3 = teds language
//         if (radios[i].checked) {
//             whichRadioselected = radios[i].value;
//             break;

//         } 
//     }
//     // console.log('whichRadioSelected', whichRadioselected);
    
//     if (whichRadioselected == 0) {
//          //FuzzyDuck.method goes here
//         // console.log("you selected Gaelic");
//         // var convertedMessage = "Gaelic: ";
//         conversionEl.innerHTML = resultGaelic;
        
//     }else if (whichRadioselected == 1) {
//         //FuzzyDuck.method goes here
//         // console.log("you selected Yiddish");
//         //  var convertedMessage = "Gaelic: ";
//         conversionEl.innerHTML = resultYiddish;


//     }else if (whichRadioselected == 2) {
//          //FuzzyDuck.method goes here
//         // console.log("you selected Spanish");
//          conversionEl.innerHTML = resultSpanish;
//         //  var convertedMessage = "Spanish: ";
//         //  conversionEl.innerHTML = resultSpanish;
//     }else if (whichRadioselected == 3) {
//          //FuzzyDuck.method goes here
//         // console.log("you selected Teds Language");
        
//     }

//     //display original message in div container original-text
//     // var originalMessage = document.getElementById("get-words").value;
//     // originalMessageEl.innerHTML =     "<pre>" + "English:  " + originalMessage  + "\n\n" + convertedMessage + "</pre>";
    
// }

