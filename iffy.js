console.log('you are in iffy.js');

var Fuzzyduck = (function(){
    // let location = "The Unknown Regions";
    // let englishWords = ["Happy New Year", "St Patricks Day", "Merry Christmas", "White Chrismas", "Happy Easter", "Halloween ", "Thanksgiving"];
    let englishSpanishWords = {"merry":"fiesta", "christmas":"Navidad", "and":"y", "happy":"feliz", "new":"nuevo", "year":" ano"}



    return {
        //function to get holidays and make them public
        getHoliday: function() {
            // console.log('List of holiday words inside FuzzyDuck', englishSpanishWords);
            return englishSpanishWords;
        } ,
        // get holiday locations (might not be used)
        getHolidayLocation: function(){
            return location;
        },
        //add holidays as needed (might not be use)
        addHoliday: function(who) {
            englishSpanishWords.push(who);
            // console.log('english words', englishSpanishWords);
            
        }

    }


})();

// console.log("English and Spanish Holidays outside of Fuzzyduck", Fuzzyduck.getHoliday());