'use strict';
var Alexa = require('alexa-sdk');

var APP_ID = undefined; //OPTIONAL: replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";
var SKILL_NAME = 'Fashion Facts';

/**
 * Array containing space facts.
 */
var FACTS = [
    "The word ‘jeans’ comes from the cotton pants worn by “Genes,” the local term for Genoan sailors.",
    "The average American owns 7 pairs of blue jeans.",
    "The Ancient Greeks exercised naked.  In fact, this is where our word “gymnasium” comes from; γυμνός (gymnos) means naked in Ancient and Modern Greek.",
    "The four major fashion capitals of the world are New York, London, Milan, and Paris.  Each city holds fashion shows twice, in February and September.",
    "The first fashion magazine was published in Germany in 1586.",
    "American households spend about 3.8% of their income on clothing, which equates to about $1,700 per person.  By comparison, Americans spent 11% of their income on clothes in 1950.",
    "The price of clothing has decreased by 8.5% since 1992, even when adjusted for inflation.",
    "Over a lifetime, an American woman will spend $125,000 on clothes.  3,000 items—271 pairs of shoes, 185 dresses, and 145 bags.",
    "The four most common clothing materials are linen, cotton, polyester, and rayon.",
    "Cotton is the most widely used clothing material, but it only became common in mid-1800s, when Eli Whitney’s cotton gin made it easy to separate the cotton fibers from the seeds.",
    "Evidence for the first clothes dates somewhere between 100,000 to 500,000 years ago.",
    "Simple needles made out of animal bone first appeared about 30,000 years ago.",
    "The bikini was named after the island Bikini Atoll, where the US military was testing its bombs in World War 2.  It was so named because its creator, Louis Réard, belived the revealing suit would create a shock like that of the atomic bomb.",
    "Women’s nominal clothing sizes have increased in physical size over the years in a phenomenon known as “vanity sizing.”  A size 8 dress with a 32-inch bust in 1967 is now considered a size 0 today.",
    "10-25% of Western women don’t wear a bra, and 75-85% of women who do wear an incorrect size.",
    "Men’s shirts button on the right, and women’s on the left.",
    "Both the pencil skirt and the A-line skirt were designed by Frenchman Christian Dior, who is singlehandedly credited with inspiring 1950s fashion.",
    "Children dressed identically to adults until the mid-1800s, when the concept of children’s clothing took off.",
    "What Americans consider “tuxedos” are called “dinner jackets” in Great Britain, as the word tuxedo itself refers to the white version of the suit jacket in British English.",
    "Dresses and skirts are commonly seen as women’s clothing in the West, but in other parts of the world, men wear them as frequently as women do.",
    "More than 2 billion t-shirts are sold each year.",
    "A person’s social rank and profession in the Medieval Ages was represented by the color of their clothing.  The nobility wore red, peasants wore brown and gray, and merchants, bankers, and gentry wore green.",
    "In Rome, purple clothing was exclusively reserved for emperors and magistrates.",
    "The earliest known shoes are sandals that date back to approximately 7,000 B.C.  However, bone analysis of early humans suggest humans began wearing shoes as early as 40,000 years ago.",
    "In Arab culture, shoes are considered dirty because they touch the ground and cover the lowest part of the body, the foot.  It is considered offensive to show one’s shoe sole, and throwing your shoe at someone is an extremely grave insult.",
    "The difference between two nominal clothing sizes is approximately ten to fifteen pounds.",
    "Standard women’s clothes are designed to fit women between 5’4 and 5’8 tall.",
    "One silk cocoon produces an average of 600 to 900 meters of silk filaments, but it takes four to eight pieces to make one strand of silk thread.  In all, it takes about 30,000 silkworms to produce 12 pounds of raw silk.",
    "Eyeliner became popular after its discovery in King Tutankhamun’s tomb in the 1920s.",
    "It was once taboo to wear black unless one was in mourning.  Victorian widows were expected to wear black mourning clothes for two years after their husbands’ deaths.",
    "Until around the beginning of the 20th century, Chinese culture regarded small feet as beautiful, and it was a common practice to bind women’s feet from an early age to keep their feet small.   This practice was limited to the wealthy, however, as the feet of women who underwent this procedure were so deformed that they had difficulty walking.",
    "The fashion industry generates an average revenue of $20 billion each year.",
    "A Sneakerhead is someone who collects shoes.",
    "Nowadays, kimonos are worn only in very formal occasions in Japan except by sumo wrestlers, who are required to wear traditional Japanese clothes when in public.",
    "For all the hoopla made about Fashion Week, the average fashion show is only about 10 minutes long.",
    "Vintage clothing refers to clothing made between 20 and 100 years ago, and retro refers to recently made clothing that is designed to resemble the style of another period.",
    "It became more socially acceptable for women to wear shorts during World War 2, which introduced fabric rationing and forced women to take on more masculine jobs.",
    "The skirt is the second oldest piece of clothing, outdated only by the loincloth."
];

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetFact');
    },
    'GetNewFactIntent': function () {
        this.emit('GetFact');
    },
    'GetFact': function () {
        // Get a random space fact from the space facts list
        var factIndex = Math.floor(Math.random() * FACTS.length);
        var randomFact = FACTS[factIndex];

        // Create speech output
        var speechOutput = "Here's your fact: " + randomFact;

        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = "You can say tell me a fashion fact, or, you can say stop... How can I help?";
        var reprompt = "Did you have a question?";
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', 'Ciao!');
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', 'Au revior!');
    }
};
