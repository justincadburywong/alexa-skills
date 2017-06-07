'use strict';
var Alexa = require('alexa-sdk');

var APP_ID = undefined; //OPTIONAL: replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";
var SKILL_NAME = 'My Time Facts';

/**
 * Array containing space facts.
 */
var FACTS = [
  "Every two minutes, we take as many photos as all of humanity took during the 1800s.",
  "There was more time between the Stegosaurus and the Tyrannosaurus Rex than between Tyrannosaurus Rex and you.",
  "In the span of 63 years, we went from taking flight to landing on the moon.",
  "The first pyramids were built while the woolly mammoth was still alive.",
  "Harvard University was founded before there was even calculus.",
  "When Warner Brothers formed, the Ottoman Empire was still a thing.",
  "Turn your TV to a dead station, and 1% of the static is left over radiation from the Big Bang.",
  "Oxford University is older than the Aztecs!",
  "There are whales alive today who were born before Moby Dick was written.",
  "The fax machine was invented the same year people were traveling the Oregon Trail.",
  "Everything you experience in the present may have actually occurred in the past.",
  "The galaxies we observe are millions of years in the past and could actually be dead.",
  "If you’re over 45, the world population has doubled in your lifetime.",
  "If the history of Earth were compressed to a single year, modern humans would appear on December 31st at about 11:00pm.",
  "The average U.S. city commuter loses 38 hours a year to traffic delays.",
  "Wonder why you have to set your clock ahead in March? Daylight Saving Time began as a joke by Benjamin Franklin, who proposed waking people earlier on bright summer mornings so they might work more during the day and thus save candles. It was introduced in the U.K. in 1917 and then spread around the world.",
  "The Department of Energy estimates that electricity demand drops by 0.5 percent during Daylight Saving Time, saving the equivalent of nearly 3 million barrels of oil.",
  "By observing how quickly bank tellers made change, pedestrians walked, and postal clerks spoke, psychologists determined that the three fastest-paced U.S. cities are Boston, Buffalo, and New York.",
  "One second used to be defined as 1/86,400 the length of a day. However, Earth’s rotation isn’t perfectly reliable. Tidal friction from the sun and moon slows our planet and increases the length of a day by 3 milli­seconds per century.",
  "in the time of the dinosaurs, the day was just 23 hours long.",
  "Weather also changes the day. During El Niño events, strong winds can slow Earth’s rotation by a fraction of a milli­second every 24 hours.",
  "Modern technology can do better. In 1972 a network of atomic clocks in more than 50 countries was made the final authority on time, so accurate that it takes 31.7 million years to lose about one second.",
  "To keep this time in sync with Earth’s slowing rotation, a “leap second” must be added every few years, most recently this past New Year’s Eve.",
  "The world’s most accurate clock, at the National Institute of Standards and Technology in Colorado, measures vibrations of a single atom of mercury. In a billion years it will not lose one second.",
  "Until the 1800s, every village lived in its own little time zone, with clocks synchronized to the local solar noon.",
  "On November 18, 1883, American railway companies forced the national adoption of standardized time zones.",
  "Thinking about how railway time required clocks in different places to be synchronized may have inspired Einstein to develop his theory of relativity, which unifies space and time.",
  "Einstein showed that gravity makes time run more slowly. Thus airplane passengers, flying where Earth’s pull is weaker, age a few extra nano­seconds each flight.",
  "Time has not been around forever. Most scientists believe it was created along with the rest of the universe in the Big Bang, 13.7 billion years ago.",
  "There may be an end of time. Three Spanish scientists posit that the observed acceleration of the expanding cosmos is an illusion caused by the slowing of time. According to their math, time may eventually stop, at which point everything will come to a standstill."
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
        var speechOutput = "Here's a fact: " + randomFact;

        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = "You can say tell me a time fact, or, you can say stop... How can I help?";
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
