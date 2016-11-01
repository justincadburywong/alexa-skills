'use strict';
var Alexa = require('alexa-sdk');

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
      var http = require('http');
      var cn = http.createClient(80, 'http://api.icndb.com');
      var request = http.request('GET', '/jokes/random',
        {'host': 'http://api.icndb.com'});
        request.end();
        request.on('response', function (response) {
          console.log('STATUS: ' + response.statusCode);
          console.log('HEADERS: ' + JSON.stringify(response.headers));
        response.setEncoding('utf8');
        response.on('data', function (chunk) {
          console.log('BODY: ' + chunk);
        var joke = response.on('data')
        });
      });

        // Create speech output
      var speechOutput = "Here's your joke: " + joke;
      this.emit(':tellWithCard', speechOutput, SKILL_NAME, joke)
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
