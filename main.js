console.log('in main.js');


//get button locations (may not be used)
let langbtn1 = document.getElementById("celtic");
let langbtn2 = document.getElementById("yiddish");
let langbtn3 = document.getElementById("spanish");
let langbtn4 = document.getElementById("tedlang");




let runLanguageBtn = document.getElementById("btn-signup");
runLanguageBtn.addEventListener("click", () => {
    let langTextInput = document.getElementById("??????").value;
    let whichRadioselected; 
    var radios = document.getElementsByName("????fromName in radio btn");
    for (let i = 0; i < radios.length; i++) {
        //0 = celtic, 1 = yiddish, 2 = spanish 3 = tedlang
        if (radios[i].checked) {
            whichRadioselected = radios[i].value;
            break;

        } 
    }
    console.log('whichRadioSelected', whichRadioselected);
    
    if (whichRadioselected === 0) {
         //FuzzyDuck.method goes here
        console.log("you selected Celtic");

    }else if (whichRadioselected == 1) {
        //FuzzyDuck.method goes here
        console.log("you selected Yiddish");

    }else if (whichRadioselected == 2) {
         //FuzzyDuck.method goes here
        console.log("you selected Spanish");

    }else if (whichRadioselected == 2) {
         //FuzzyDuck.method goes here
        console.log("you selected Teds Lang")
    }

});
