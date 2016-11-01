'use strict';
var Alexa = require('alexa-sdk');

var APP_ID = undefined; //OPTIONAL: replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";
var SKILL_NAME = 'My Toy Facts';

/**
 * Array containing space facts.
 */
var FACTS = [
  "Twister became a popular game after it was featured on The Tonight Show With Johnny Carson. He played the game with guest Eva Gabor.",
  "Barbie has an actual full name: Barbara Millicent Roberts.",
  "In 1993, Earring Magic Ken became the biggest-selling Ken doll of all time. Which was mainly because gay men bought them due to the way he was dressed — and the fact that he appeared to be wearing a “cock ring” as a necklace.",
  "The first Fisher-Price toy ever sold in stores was Dr. Doodle.",
  "In 1952, Mr. Potato Head became the first toy to ever be advertised on TV.",
  "Tonka is named after Minnesota’s Lake Minnetonka.",
  "The Play Family Farm is not only the first play set created for The Fisher-Price Little People, but also remains its best-selling play set.",
  "In 1991, Little Tikes’ Cozy Coupe was named the best-selling car in America, outselling the Honda Accord and the Ford Taurus.",
  "Rainbow Brite’s real name is Wisp.",
  "Mattel was forced, by accident, to create the He-Man cartoon series after its director of marketing, who was trying to sell the line, told Toys ‘R’ Us executives that a cartoon special was in the works.",
  "According to Lego, six eight-stud Lego bricks can be combined into 915,103,765 different configurations.",
  "Tickle Me Elmo became a must-have toy after Rosie O’Donnell featured it on her talk show, The Rosie O’Donnell Show.",
  "Ken Forsse, the man who created Teddy Ruxpin, worked for the Walt Disney Co. early on, specializing “in the figures that move to music on Disney theme park rides.” He would adapt that technology to create the iconic talking bear.",
  "The Rock’em Sock’em Robots have names: Red Rocker and Blue Bomber.",
  "Play-Doh was originally created in the 1930s as a way to clean wallpaper.",
  "According to its creator, Scott Stillinger, Koosh Balls got its name from the sound it makes when it lands in your hand.",
  "In 1999 it was reported that the NSA had allegedly banned Furbies from its headquarters in Maryland, over fears that they would hear top-secret conversations and then repeat them."
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
        var speechOutput = "You can say tell me a toy fact, or, you can say stop... How can I help?";
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
