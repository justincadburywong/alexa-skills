'use strict';
var Alexa = require('alexa-sdk');

var APP_ID = undefined; //OPTIONAL: replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";
var SKILL_NAME = 'My Sun Facts';

/**
 * Array containing space facts.
 */
var FACTS = [
    "The sun is orbited by nine major planets: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune, and Pluto (no longer an official planet).",
    "The sun contains 99.85% of the mass in the solar system.",
    "Classified as a G2 dwarf due to its size, heat, and chemical makeup, the sun is a medium-sized star. A G star is cool (between 5,000-6,000 on the Kelvin temperature scale) and has a complex chemistry, which means its makeup includes chemicals heavier than helium.",
    "Based on the average life of a G2 star, the present age of the sun is estimated to be 4.6 billion years, halfway through its lifetime.",
    "Four million tons of hydrogen are consumed by the sun every second, which helps to create the sun’s composition of 75 percent hydrogen, 23 percent helium, and 2 percent heavier elements.",
    "Scientists have determined that the sun will continue to burn hydrogen collected in its core for another five billion years or so, and then helium will become its primary fuel.",
    "Approximately 109 planet Earths would fit on the surface of the sun and more than one million planet Earths would fit inside of the sun.",
    "Every 11 years, solar activity surges. The sunspots that pepper the sun explode, hurtling massive clouds of gas known as 'CMEs' through the solar system. This is called “solar maximum.”",
    "Approximately every 11 years, the sun reverses its overall magnetic polarity: its north magnetic pole becomes a south pole, and vice versa.",
    "The sun is the closest star to Earth and is 149.60 million kilometers (92.96 million miles) away.",
    "At its core, the sun’s temperature is about 15 million degrees Celsius (about 27 million degrees Fahrenheit).",
    "The sun rotates on its axis once every 25.38 Earth days or 609.12 hours.",
    "100,000,000,000 tons of dynamite would have to be detonated every second to match the energy produced by the sun.",
    "A person weighing 150 pounds on Earth would weigh 4,200 pounds on the sun because the sun’s gravity is 28 times that of Earth.",
    "The sun radiates heat and a steady stream of charged particles known as the solar wind, which blows about 280 miles (450 kilometers) per second throughout the solar system.",
    "Solar flares are jets of particles that burst from the sun and can disrupt satellite communications and knock out electricity on Earth.",
    "All planets orbit the sun in the same direction, counterclockwise, and on roughly the same plane, known as the ecliptic.",
    "Egyptian, Indo-European, and Meso-American cultures all had sun-worship religions.",
    "In ancient Egypt, the sun god Ra was the dominant figure among the high gods. He achieved the highest status because he was believed to have created himself and eight other gods.",
    "In the Aztec religion, extensive human sacrifice was demanded by the sun gods Huitzilopochtli and Tezcatlipoca.",
    "In Japan, the sun goddess, Amaterasu, played an important role in ancient mythology and was considered to be the supreme ruler of the world.",
    "The characters which make up Japan’s name mean “sun origin” and its flag depicts the rising sun.",
    "In Libya, both male and female mummies have been discovered with tattoos symbolizing sun worship.",
    "In the sixteenth century, Nicholas Copernicus argued that it was the Earth that traveled around the sun. However, Copernicus’s view of the solar system wasn’t accepted for many years until Newton formulated his laws of motion.",
    "The Greek philosopher Aristarchus is credited as being the first person to claim that the Earth orbited the sun.",
    "While evidence suggests fluctuations in solar activity can affect climate on Earth, the majority of climate scientists and astrophysicists agree that the sun is not to blame for the current and historically sudden increase in global temperatures on Earth, which have mostly been caused by the human race.",
    "The small measured changes in the sun’s radiation output from one decade to the next are only about one-tenth of 1 percent, not even large enough to really provide a detectable signal in Earth’s surface temperature record.",
    "During a 75-year period beginning in 1645, astronomers detected almost no sunspot activity on the sun. Called the “Maunder Minimum,” this event coincided with the coldest part of the Little Ice Age, a 350-year cold spell that gripped much of Europe and North America. However, new estimates determine that the change in brightness was perhaps not enough to create this global cooling.",
    "Based on current estimates, even if another Maunder Minimum were to occur, it might result in an average temperature decrease of about 2 degrees Fahrenheit."
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
        var speechOutput = "You can say tell me a sun fact, or, you can say stop... How can I help?";
        var reprompt = "Did you have a question?";
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', 'Goodbye!');
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', 'Goodbye!');
    }
};
