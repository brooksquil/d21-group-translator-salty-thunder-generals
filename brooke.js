var FuzzyDuck = function(yiddish) {
    var yiddishText = {
        "happy": "tsufridn",
        "holidays": "ium tub",
        "and": "aun",
        "wishing": "gevalt",
        "you": "du",
        "a": "a",
        "joyful": "freydik",
        "new": "neye",
        "year": "yar"
    };
    yiddish.translateYiddish = function(input) {
        return yiddishText[input]
    };
    return yiddish;
}(FuzzyDuck);