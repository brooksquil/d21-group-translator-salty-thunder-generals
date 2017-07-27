console.log('you are in clay.js');

var FuzzyDuck = function(origTranslate) {
    var yiddishText = {
                "and": "y",
                "with": "con",
                "the": "el",
                "too": "también",
                "to": "a",
                "out": "fuera",
                "all": "todas",
                "of": "de",
                "by": "por",
                "I": "yo",
                "also": "además",
                "not": "no",
                "on": "en",
                "can": "poder",
                "up": "arriba",
                "be": "ser",
                "a": "un",
                "that": "ese",
                "you": "tú",
                "your": "tu",
                "you're": "Tu eres",
                "us": "nos",
                "this": "esta",
                "is": "es",
                "one": "uno",
                "two": "dos",
                "three": "Tres",
                "four": "las cuatro",
                "five": "cinco",
                "six": "seis",
                "seven": "siete",
                "eight": "ocho",
                "nine": "nueve",
                "ten": "diez",
                "eleven": "once",
                "twelve": "doce",
                "merry": "hellowold",
                "christmas": "Navidad",
                "happy": "contento",
                "new": "nuevo",
                "year": "año",
                "lots": "un montón",
                "love": "amor",
                "joy": "alegría",
                "happiness": "felicidad",
                "have": "tener",
                "yourself": "tú mismo",
                "holiday": "fiesta",
                "season": "temporada",
                "trimmings": "recortes",
                "wishing": "deseando",
                "magical": "mágico",
                "decorate": "Decorar",
                "god": "Dios",
                "bless": "bendecir",
                "lord": "señor",
                "everyone": "todo el mundo",
                "hope": "esperanza",
                "wonder": "preguntarse",
                "peace": "paz",
                "holidays": "vacaciones",
                "unwrap": "desenvolver",
                "wrap": "envolver",
                "joyful": "alegre",
                "holly": "acebo",
                "jolly": "alegre",
                "best": "mejor",
                "present": "presente",
                "spend": "gastar",
                "time": "hora",
                "little": "pequeño",
                "let": "dejar",
                "heart": "corazón",
                "light": "ligero",
                "gay": "Gay",
                "most": "más",
                "wonderful": "maravilloso",
                "May": "Mayo",
                "thinking": "pensando",
                "warmly": "Cálidamente",
                "extra": "extra",
                "measure": "medida",
                "good": "bueno",
                "cheer": "animar",
                "whatever": "lo que sea",
                "beautiful": "hermosa",
                "meaningful": "significativo",
                "sum": "suma",
                "earth": "tierra",
                "goodwill": "buena voluntad",
                "men": "hombres",
                "women": "mujer",
                "children": "niños",
                "batteries": "Baterías",
                "included": "incluido",
                "fruitcake": "Pastel de frutas",
                "stress": "estrés",
                "free": "gratis",
                "tell": "contar",
                "lot": "mucho",
                "about": "acerca de",
                "person": "persona",
                "way": "camino",
                "they": "ellos",
                "handle": "encargarse de",
                "things": "cosas",
                "rainy": "lluvioso",
                "day": "día",
                "lost": "perdió",
                "luggage": "equipaje",
                "tangled": "enredado",
                "lights": "luces",
                "crazy": "loca",
                "baby": "bebé",
                "cold": "frío",
                "outside": "fuera de",
                "fa": "fa",
                "la": "la",
                "ho": "Ho",
                "enjoy": "disfrutar",
                "cherish": "apreciar",
                "together": "juntos",
                "cookies": "galletas",
                "dreidel": "Dreidel",
                "menorah": "Menorah",
                "spin": "girar",
                "latke": "Latke",
                "festival": "festival",
                "hugs": "abrazos",
                "kisses": "Besos",
                "friends": "amigos",
                "friend": "amigo",
                "hoping": "esperando",
                "see": "ver",
                "soon": "pronto",
                "warm": "calentar",
                "regards": "Saludos",
                "greetings": "saludos",
                "another": "otro",
                "great": "estupendo",
                "hanukah": "Hanukah",
                "chanukah": "Chanukah",
                "candles": "Velas",
                "nights": "Noches",
                "heath": "brezo",
                "family": "familia",
                "shine": "brillar",
                "down": "abajo",
                "upon": "sobre",
                "miracle": "milagro",
                "guides": "Guías",
                "through": "mediante",
                "tough": "difícil",
                "times": "veces",
                "celebration": "celebracion",
                "special": "especial",
                "here": "aquí",
                "made": "hecho",
                "clay": "arcilla"
            };
    origTranslate.translateToYiddish = function(input) {
        return yiddishText[input];
    };
    return origTranslate;
}(FuzzyDuck);