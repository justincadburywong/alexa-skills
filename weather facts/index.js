'use strict';
var Alexa = require('alexa-sdk');

var APP_ID = undefined; //OPTIONAL: replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";
var SKILL_NAME = 'My Weather Facts';

/**
 * Array containing space facts.
 */
var FACTS = [
    "The fastest speed a falling raindrop can hit you is 18mph.",
    "During a hurricane, 90% of the people who die end up dying from drowning.",
    "The coldest temperature ever recorded was a negative 126.9 degrees fahrenheit in Vostok Station, Antarctica.",
    "Between evaporation and falling as precipitation, a droplet of water may travel thousands of miles.",
    "The typical lifetime of a small cumulus cloud is between 10 to 15 minutes.",
    "A corn field of one acre gives of 4,000 gallons off water per day in evaporation.",
    "A molecule of water will stay in Earth’s atmosphere for an average duration of 10-12 days.",
    "Snowflakes falling at 2-4 mph can take about 1 hr to reach the ground.",
    "For each minute of the day, 1 billion tons of rain falls on the Earth.",
    "At any given time, on average there are about 1800 thunderstorms occurring on earth with 100 lightning strikes per second.",
    "Lightning bolts can travel 60 miles.",
    "A lightning bolt travels at about 14,000mph and brings 300,000 volts of electricity to the ground.",
    "The air located around a lightning bolt is heated to around 30,000 degrees Celsius. This is 5 times hotter than the surface of the sun.",
    "The chances of being struck by lightning is about one in three million.",
    "The largest hailstone ever recorded in the United States was nearly the size of a soccer ball. It was a 7-inch wide chunk of ice.",
    "Lightning sets about 10,000 forest fires every year in the United States.",
    "In one day a hurricane can release enough energy to supply all of the nation’s electrical needs for about six months.",
    "The highest temperature ever recorded in the United States was 134 degrees F at Greenland Ranch in Death Valley, California.",
    "In 1899, it was so cold that the Mississippi River froze over its entire length.",
    "The United States uses an estimated 10 million tons of salt each year to melt ice on the roads.",
    "A cubic mile of ordinary fog contains less than a gallon of water.",
    "An inch of rain water is equivalent to 15 inches of dry, powdery snow.",
    "Every year in the US, 625 people are struck by lightning.",
    "The average width of a tornado’s funnel averages about 100 to 200 yards but may be as wide as a mile.",
    "Listening to the sounds of crickets can give you an estimate of what the temperature is on the Fahrenheit scale. You can do this by counting the amount of chirps you hear in fifteen seconds and adding 37!",
    "Death Valley, California’s temperature has the U.S. temperature record: 134 degrees Fahrenheit recorded at Greenland Ranch.",
    "Prospect Creek, Alaska holds the U.S. temperature record for the coldest temperature: minus 80 degrees Fahrenheit.",
    "The difference between the hot and cold temperature extremes ever recorded on earth is over 260 degrees Fahrenheit.",
    "Every winter approximately one septillion snowflakes fall from the sky.",
    "Hilo, Hawaii is the wettest city in the United States with an average annual precipitation of 128 inches! To put that into perspective, one inch of rain falling over one acre of land is over 27,000 gallons of water, which has a weight of over 226,000 pounds.",
    "It takes approximately one million drops of water to make one raindrop.",
    "Hail causes about one billion dollars’ worth of damage per year to crops and property such as homes and cars.",
    "In 1934, the Mount Washington Observatory recorded the largest wind gust speed ever recorded on earth: 231 miles per hour during a severe storm.",
    "The largest tornado in the US was approximately two and a half miles wide. It tore through Nebraska in 2004. While tornados are reported worldwide, most happen in the United States!",
    "Texas gets about 110 tornadoes each year, the most of any U.S. state.",
    "Tornadoes are nature’s most violent storms, but they can pick up people and debris and set them down unharmed. One tornado near Decatur County, Indiana, sent a piece of straw into the bark of a large tree in 1971. The straw was unbent.",
    "Dust devils look like tornadoes, but are simply well formed whirlwinds of dust.",
    "Did you know that hurricanes have an eye in the center of their spiral that is sunny and calm? However, the arms of the hurricane have a destructive force that can decimate entire coastlines and towns.",
    "Hurricane Katrina was a category four hurricane that hit the southern coastline of the United States in 2005. Hurricane Camille, a category five hit the same area less than forty years earlier.",
    "Hurricanes only assume their title if they develop in the Atlantic Ocean. If a similar storm develops in the Pacific Ocean, it is instead called a typhoon.",
    "The worst hurricane in United States history occurred in Galveston, Texas, in 1900, and 8,000 people died.",
    "Hurricane Andrew cost Louisiana and Florida more than $26 billion in 1992. This was the costliest hurricane in in United States history and was a category 5."
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
        var speechOutput = "You can say tell me a weather fact, or, you can say stop... How can I help?";
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
