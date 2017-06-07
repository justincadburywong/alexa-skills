'use strict';
var Alexa = require('alexa-sdk');
var http = require('http');

var APP_ID = undefined; //OPTIONAL: replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";
var SKILL_NAME = 'My Chuck Norris Jokes';

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
      var funny
      var http = require('http');
      var chuck = http.createClient(80, 'api.icndb.com');
      var request = chuck.request('GET', '/jokes/random?limitTo=[nerdy]',
        {'host': 'api.icndb.com'});
        request.end();
        request.on('response', function (response) {
            response.setEncoding('utf8');
            response.on('data', function (chunk) {
                console.log('BODY: ' + chunk);
            funny = JSON.parse(chunk).value.joke;
            });
        });
        // Create speech output
      var speechOutput = "Here's your joke: " + funny;
      this.emit(':tellWithCard', speechOutput, SKILL_NAME, funny)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = "You can say tell me a chuck norris joke, or, you can say exit... What can I help you with?";
        var reprompt = "What can I help you with?  Don't make me call chuck norris in here!";
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', 'Chuck Norris will find you!');
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', 'You can\'t hide from Chuck Norris!');
    }
};
