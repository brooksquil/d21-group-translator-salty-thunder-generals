console.log('in main.js');

//get conversion placeholder
// let conversionEl = document.getElementById("conversion");

//get words from input field
var originalText = document.getElementById("get-words") ;


//output elements for each text

var button = document.getElementById("btn-translate");
button.addEventListener("click", translateButton); 

var outputEL = document.getElementById("converted");



function translateButton() {
    var text = originalText.value.toLowerCase();
    var originalTextArray =  convertPhraseToArray(text);    
    var gaelicArray = [];
    var yiddishArray = [];
    var spanishArray = [];
    var kurdishArray = [];

    for (var i = 0; i < originalTextArray.length; i++) {
        gaelicArray.push(FuzzyDuck.translateToGaelic(originalTextArray[i]));
        yiddishArray.push(FuzzyDuck.translateToYiddish(originalTextArray[i]));
        spanishArray.push(FuzzyDuck.translateToSpanish(originalTextArray[i]));
        kurdishArray.push(FuzzyDuck.translateToKurdish(originalTextArray[i]));
        
    }

    var resultGaelic = convertArrayToPhrase(gaelicArray);
    var resultYiddish = convertArrayToPhrase(yiddishArray);
    var resultSpanish = convertArrayToPhrase(spanishArray);
    var resultKurdish = convertArrayToPhrase(kurdishArray);
   
    
    
   
    let whichRadioselected; 
    var radios = document.getElementsByName("whichLang");
    for (let i = 0; i < radios.length; i++) {
        //0 = gaelic, 1 = yiddish, 2 = spanish 3 = teds language
        if (radios[i].checked) {
            whichRadioselected = radios[i].value;
            break;

        } 
    }
    console.log('output', outputEL);
    
    if (whichRadioselected == 0) {
    
    //set to an output --- add output element 
    outputEL.innerHTML = "The result in Gaelic:  " + resultGaelic;
        
    }else if (whichRadioselected == 1) {
       //set to an output --- add output element 
        outputEL.innerHTML = "The result in Yiddish:  " + resultYiddish; 


    }else if (whichRadioselected == 2) {
        //set to an output --- add output element 
        outputEL.innerHTML = "The result in Spanish: " + resultSpanish;
    }else if (whichRadioselected == 3) {
        //set to an output --- add output element 
        outputEL.innerHTML = "The result in Kurdish: " + resultKurdish;
    }


}

