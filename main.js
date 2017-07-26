console.log('in main.js');


//get button locations (may not be used, pending)
// let langbtn1 = document.getElementById("celtic");
// let langbtn2 = document.getElementById("yiddish");
// let langbtn3 = document.getElementById("spanish");
// let langbtn4 = document.getElementById("tedlang");

//get conversion placeholder
let conversionEl = document.getElementById("converion");

//get words from input field
var wordsEl = document.getElementById("get-words");

//get placeholder for original message
 var originalMessageEl = document.getElementById("original-text")


//check holiday array
let holidayButton = document.getElementById("checkHoliday");
holidayButton.addEventListener("click", introduceHolidays);

function  introduceHolidays(event){
    console.log("Holiday IIFE", Fuzzyduck);
}



let runLanguageBtn = document.getElementById("btn-translate");
runLanguageBtn.addEventListener("click", () => {
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
        conversionEl.innerHTML = "<h3>Your Translation in Celtic is: </h3";
        var convertedMessage = "Celtic: ";

    }else if (whichRadioselected == 1) {
        //FuzzyDuck.method goes here
        // console.log("you selected Yiddish");
        conversionEl.innerHTML = "<h3>Your Translation in Yiddish is: </h3";
         var convertedMessage = "Yiddish: ";

    }else if (whichRadioselected == 2) {
         //FuzzyDuck.method goes here
        // console.log("you selected Spanish");
        conversionEl.innerHTML = "<h3>Your Translation in Spanish is: </h3";
         var convertedMessage = "Spanish: ";

    }else if (whichRadioselected == 3) {
         //FuzzyDuck.method goes here
        // console.log("you selected Teds Language");
        conversionEl.innerHTML = "<h3>Your Translation in Ted's Language is: </h3";
        var convertedMessage = "Teds Language: ";
    }

    //display original message in div container original-text
    var originalMessage = document.getElementById("get-words").value;
    originalMessageEl.innerHTML =     "<pre>" + "English:  " + originalMessage  + "\n\n" + convertedMessage + "</pre>";
   
});
