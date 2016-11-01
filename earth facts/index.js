'use strict';
var Alexa = require('alexa-sdk');

var APP_ID = undefined; //OPTIONAL: replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";
var SKILL_NAME = 'Earth Facts';

/**
 * Array containing space facts.
 */
var FACTS = [
    "The Earth was once believed to be the centre of the universe. For 2000 years ancient astronomers believed that the Earth was static and had other celestial bodies travelling in circular orbits around it. They believed this because of the apparent movement on the Sun and planets in relation to their viewpoint. In 1543, Copernicus published his Sun-centered model of the Solar System which put the Sun at the centre of our solar system.",
    "Earth is the only planet not named for a mythological god or goddess. The other seven planets in the solar system were named after Roman gods or goddesses. For the five visible to the naked eye, Mercury, Venus, Mars, Jupiter and Saturn they we named during ancient times. This Roman method was also used after the discovery of Uranus and Neptune. The word “Earth” comes from the Old English word “ertha” meaning ground or land.",
    "Earth is the most dense planet in the solar system. The density of Earth differs in each part of the planet – the core, for example, is denser than the Earth’s crust – but the average density of the planet is around 5.52 grams per cubic centimetre.",
    "The gravity between the Earth and the Moon causes the tides on Earth. This effect on the Moon means it is tidally locked to Earth – its rotation period is the same as its orbit time so it always presents the same face to Earth.",
    "The rotation of the Earth is gradually slowing down. The deceleration of the Earth’s rotation is very slow, approximately 17 milliseconds per hundred years. Eventually this will lengthen our days but it will take around 140 million years before our day will have increased from 24 to 25 hours.",
    "Earth’s atmosphere is composed of 78% nitrogen, 21% oxygen, and trace amounts of other gases including argon and carbon dixoide.",
    "The large amount of oxygen on Earth comes from our plant life’s consumption of carbon dioxide during photosynthesis.",
    "Earth has a very powerful magnetic field. This field protects the planet from the effects of solar winds and is believed to be a result of the nickel-iron core of the planet combined with its rapid rotation.",
    "The Earth has an Ozone Layer which protects it from harmful solar radiation. This shell is a special type of oxygen that absorbs most of the Sun’s powerful UV rays.",
    "70% of the Earth’s surface is covered by water – the remainder consists of continents and islands which together have many lakes and other sources of water.",
    "The first life on Earth developed in the oceans through a process called abiogenesis or biopoiesis. This is a natural process in which life grows from non-living matter like simple organic compounds.",
    "Earth’s water was initially trapped within the planet. Over time the Earth’s water was brought to the surface by the planet’s volcanic activity.",
    "Earth has relatively few visible impact craters compared with other solid bodies in our solar system. This is because Earth is geologically active and has processes like tectonics and erosion that reshape its surface.",
    "The highest point found on Earth is Mount Everest which reaches a height of 8.8 km.",
    "The lowest point on Earth is called Challenger Deep and at 10.9 km below sea level, it is further than the peak of Mount Everest.",
    "Earth has one of the most circular orbits of all the eight planets. Its axis of rotation is tilted 23.4° away from the perpendicular of its orbital plane, which produces the seasons we experience.",
    "A year on Earth lasts just over 365 days. It is actually 1/4 of a day over 365 days which is why we have a leap year every four years."
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
        var speechOutput = "You can say tell me an earth fact, or, you can say stop... How can I help?";
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
