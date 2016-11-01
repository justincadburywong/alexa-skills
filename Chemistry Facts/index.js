'use strict';
var Alexa = require('alexa-sdk');

var APP_ID = undefined; //OPTIONAL: replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";
var SKILL_NAME = 'Chemistry Facts';

/**
 * Array containing space facts.
 */
var FACTS = [
  "There is about 1/2lb or 250g of table salt (NaCl) in the body of an average adult human.",
  "Lightning strikes produce ozone (O3) and help strengthen the ozone layer.",
  "Humans have been using chemistry since at least Ancient Egypt. By 1000 bce human civilizations were using advanced forms of chemistry like extracting metals from ore, fermenting alcohol, and refining plant extracts as medicine.",
  "DNA is flame retardant.",
  "One bucketful of water contains more atoms than the Atlantic Ocean does bucketfuls of water.",
  "If you slowly pour a handful of salt into a completely full glass of water, it will not overflow. In fact, the water level will go down.",
  "Although oxygen gas is colorless (light refraction aside), both the liquid and solid forms are blue.",
  "One inch of rain is equal to 10 inches of snow.",
  "You have chemoreceptors (taste buds) on the inside of your cheeks too.",
  "Hydrofluoric acid is so corrosive that it will dissolve glass. Although it is corrosive, hydrofluoric acid is considered to be a ‘weak acid’.",
  "Approximately 20% of the oxygen in the atmosphere was produced by the Amazonian rainforests.",
  "The only elements that are liquid at room temperature are bromine and mercury.",
  "Though solid at room temperature, gallium will liquefy in your hand.",
  "Hydrogen is the most abundant element. About 75% of the elemental mass of the universe is hydrogen.",
  "The most common isotope of hydrogen is protium, with is 1 proton and 0 neutrons.",
  "The hardest chemical in your body is your tooth enamel.",
  "The ethylene gas produced by ripening fruit, ripens other fruit and vegetables.",
  "The only letter that doesn’t appear on the Periodic Table of Elements is J.",
  "The human body contains enough carbon to produce graphite for about 9,000 pencils.",
  "If you expose a glass of water to space, it will boil rather than freeze. The water vapor would almost immediately crystallize into ice.",
  "Oxygen is the most abundant element in the Earth’s crust, water, and atmosphere.",
  "Bee stings are acidic while wasp stings are alkaline.",
  "Mosquitoes like the scent of estrogen, thus women get bitten more often than men do.",
  "The lighter was invented before the match."
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
        var speechOutput = "You can say tell me a chemistry fact, or, you can say stop... How can I help?";
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
