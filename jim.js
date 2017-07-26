console.log('you are in iffy.js');



    var FuzzyDuck = function (spanish) {
     var spanishText = {"merry":"fiesta", 
     "christmas":"Navidad", 
     "and":"y", "happy":"feliz",
      "new":"nuevo", 
      "year":" ano"};

     spanish.translateToSpanish = function(input) {
         return spanishText[input]
     };
return spanish;
}(FuzzyDuck);




// console.log("English and Spanish Holidays outside of Fuzzyduck", Fuzzyduck.getHoliday());



