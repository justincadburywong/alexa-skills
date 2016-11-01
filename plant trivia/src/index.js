'use strict';

var GAME_NAME = 'Plant Trivia'; // Be sure to change this for your skill.
var ANSWER_COUNT = 4; // The number of possible answers per trivia question.
var GAME_LENGTH = 5;  // The number of questions per trivia game.
var GAME_STATES = {
    TRIVIA: '_TRIVIAMODE', // Asking trivia questions.
    START: '_STARTMODE', // Entry point, start the game.
    HELP: '_HELPMODE' // The user is asking for help.
};

/**
 * When editing your questions pay attention to your punctuation. Make sure you use question marks or periods.
 * Make sure the first answer is the correct one. Set at least ANSWER_COUNT answers, any extras will be shuffled in.
 */
var questions = [
    {
        'What is the worlds tallest growing tree?': [
            'coast redwood',
            'bristlecone pine',
            'australian eucalyptus',
            'giant sequoia'
        ]
    },
    {
        'The fastest growing plant in the world is:': [
            'bamboo',
            'crab grass',
            'lichen',
            'creeper vine'
        ]
    },
    {
        'Vanilla beans are harvested from what plant?': [
            'an orchid',
            'old green beans',
            'vanilla vine',
            'a rainforest tree'
        ]
    },
    {
        'Which is an example of a fruit?:': [
            'Pumpkins',
            'Rhubarb',
            'Kale',
            'Celery'
        ]
    },
    {
        'From what plant is saffron harvested?': [
            'Crocus stigmas',
            'Mediterranean Grass flowers',
            'Saffron tree berries',
            'Iranian saffron bushes'
        ]
    },
    {
        'The first potatoes were cultivated in Peru about how many years ago?': [
            '7000',
            '4000',
            '300',
            '18,000'
        ]
    },
    {
        'Which of the following are not members of the rose family?': [
            'Tuberoses',
            'Goatsbeard',
            'Ninebark',
            'Apples',
            'Strawberries',
            'Quince'
        ]
    },
    {
        'Which of the following are not native to North America?': [
            'Persimmons',
            'Concord Grapes',
            'Cranberries',
            'Blueberries'
        ]
    },
    {
        'A strawberry has about how many seeds?': [
            '200',
            '400',
            '30',
            '90'
        ]
    },
    {
        'Peanuts are not nuts, but actually': [
            'Legumes',
            'Fruits',
            'Seeds',
            'Tubers'
        ]
    },
    {
        'What causes cranberries to bounce and float?': [
            'Small air pockets',
            'The deep red color',
            'Being grown in flooded bogs',
            'A hard rubbery skin'
        ]
    },
    {
        'Poinsettias are native to which country?': [
            'Mexico',
            'Switzerland',
            'Venizuela',
            'Syria'
        ]
    },
    {
        'Caffiene evolved in plants as what?': [
            'A natural insecticide',
            'A way to help goats spread coffee beans around the countryside',
            'A way to give college students job security as baristas',
            'A way to keep programmers working at night'
        ]
    },
    {
        'Which of the following are a member of the broccoli family?': [
            'Cabbage',
            'Broccoli rabe',
            'Broccolini',
            'Kale'
        ]
    },
    {
        'An average size tree can make about how many pencisl?': [
            '170,000',
            '20,00',
            '90,000',
            '120,000'
        ]
    },
    {
        'Which country is named after a tree?': [
            'Brazil',
            'Mexico',
            'Turkey',
            'Laos'
        ]
    },
    {
        'What percentage of plant life is found in the ocean?': [
            '85%',
            '26%',
            '60%',
            '40%'
        ]
    },
    {
        'How much water can an oak tree lose to evaporation in twenty four hours?': [
            '25 gallons',
            '4 gallons',
            '55 gallons',
            '100 gallons'
        ]
    },
    {
        'How many types of plants are used by humans to make food?': [
            '2000',
            '8500',
            '910',
            '645'
        ]
    },
    {
        'What percent of cabbage is water?': [
            '91%',
            '70%',
            '81%',
            '53%'
        ]
    },
    {
        'Banana is an Arabic word for:': [
            'Fingers',
            'Flowers',
            'Yellow',
            'Fruit'
        ]
    },
    {
        'A tree that dates back to 250 million years ago is:': [
            'Ginkgo Biloba',
            'Stone Pine',
            'Coast Cyprus',
            'Magnolia Grandafolia'
        ]
    },
    {
        'A cluster of bananas consisting of 10 to 20 bananas is called a what?': [
            'Hand',
            'Grip',
            'Bunch',
            'Stump'
        ]
    },
    {
        'In the 1964 movie, why is the train on the Island of Misfit Toys?': [
            'Square wheels',
            'No Engine',
            'Paint does not match',
            'It does not toot'
        ]
    },
    {
        'Carrots were originally the colo:?': [
            'Purple',
            'Red',
            'Yellow',
            'White'
        ]
    },
    {
        'Oak trees don\'t produce acorns until they are how old?': [
            '50',
            '12',
            '100',
            '36'
        ]
    },
    {
        'The baobab tree found in Africa can store 1,000 to 120,000 liters of water in its:': [
            'Trunk',
            'Roots',
            'Leaves',
            'Neighbor\'s root system'
        ]
    },
    {
        'A cucumber is actually a:': [
            'Fruit',
            'Vegetable',
            'Branch',
            'Leaf'
        ]
    },
    {
        'What is the largest living structure on Earth?': [
            'The great barrier reef',
            'A culture of fungi in the forest of Oregon',
            'A copse of spruce trees in Michigan',
            'The Siberian tundra'
        ]
    },
    {
        'Wrigely\'s gum is made from:': [
            'A rainforest ficus tree',
            'A marsh grass',
            'A giant tuber',
            'A large root from a tropical bush'
        ]
    }
];

var Alexa = require('alexa-sdk');

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.registerHandlers(newSessionHandlers, startStateHandlers, triviaStateHandlers, helpStateHandlers);
    alexa.execute();
};

var newSessionHandlers = {
    /**
     * Entry point. Start a new game on new session. Handle any setup logic here.
     */
    'NewSession': function () {
        this.handler.state = GAME_STATES.START;
        this.emitWithState('StartGame', true);
    }
};

var startStateHandlers = Alexa.CreateStateHandler(GAME_STATES.START, {
    'StartGame': function (newGame) {
        var speechOutput = newGame ? 'Welcome to '  + GAME_NAME + '. ' : '';
        speechOutput += 'I will ask you ' + GAME_LENGTH.toString() + ' questions, try to get as many right as you ' +
            'can. Just say the number of the answer. Let\'s begin. ';
        // Select GAME_LENGTH questions for the game
        var gameQuestions = populateGameQuestions();
        // Generate a random index for the correct answer, from 0 to 3
        var correctAnswerIndex = Math.floor(Math.random() * (ANSWER_COUNT));
        // Select and shuffle the answers for each question
        var roundAnswers = populateRoundAnswers(gameQuestions, 0, correctAnswerIndex);
        var currentQuestionIndex = 0;
        var spokenQuestion = Object.keys(questions[gameQuestions[currentQuestionIndex]])[0];
        var repromptText = 'Question 1. ' + spokenQuestion + ' ';

        for (var i = 0; i < ANSWER_COUNT; i++) {
            repromptText += (i+1).toString() + '. ' + roundAnswers[i] + '. ';
        }

        speechOutput += repromptText;

        Object.assign(this.attributes, {
            'speechOutput': repromptText,
            'repromptText': repromptText,
            'currentQuestionIndex': currentQuestionIndex,
            'correctAnswerIndex': correctAnswerIndex + 1,
            'questions': gameQuestions,
            'score': 0,
            'correctAnswerText': questions[gameQuestions[currentQuestionIndex]][Object.keys(questions[gameQuestions[currentQuestionIndex]])[0]][0]
        });

        // Set the current state to trivia mode. The skill will now use handlers defined in triviaStateHandlers
        this.handler.state = GAME_STATES.TRIVIA;

        this.emit(':askWithCard', speechOutput, repromptText, GAME_NAME, repromptText);
    }
});

var triviaStateHandlers = Alexa.CreateStateHandler(GAME_STATES.TRIVIA, {
    'AnswerIntent': function () {
        handleUserGuess.call(this, false);
    },
    'DontKnowIntent': function () {
        handleUserGuess.call(this, true);
    },
    'AMAZON.StartOverIntent': function () {
        this.handler.state = GAME_STATES.START;
        this.emitWithState('StartGame', false);
    },
    'AMAZON.RepeatIntent': function () {
        this.emit(':ask', this.attributes['speechOutput'], this.attributes['repromptText']);
    },
    'AMAZON.HelpIntent': function () {
        this.handler.state = GAME_STATES.HELP;
        this.emitWithState('helpTheUser');
    },
    'AMAZON.StopIntent': function () {
        this.handler.state = GAME_STATES.HELP;
        this.emit(':ask', 'Would you like to keep playing?');
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', 'Ok, let\'s play again soon.');
    },
    'Unhandled': function () {
        var speechOutput = 'Try saying a number between 1 and ' + ANSWER_COUNT.toString();
        this.emit(':ask', speechOutput, speechOutput);
    },
    'SessionEndedRequest': function () {
        console.log('Session ended in trivia state: ' + this.event.request.reason);
    }
});

var helpStateHandlers = Alexa.CreateStateHandler(GAME_STATES.HELP, {
    'helpTheUser': function () {
        var speechOutput = "I will ask you " + GAME_LENGTH + " multiple choice questions. Respond with the number of the answer. "
            + "For example, say one, two, three, or four. To start a new game at any time, say, start game. "
            + "To repeat the last question, say, repeat. Would you like to keep playing?";
        var repromptText = "To give an answer to a question, respond with the number of the answer . "
            + "Would you like to keep playing?";

        this.emit(':ask', speechOutput, repromptText);
    },
    'AMAZON.RepeatIntent': function () {
        this.emitWithState('helpTheUser');
    },
    'AMAZON.HelpIntent': function() {
        this.emitWithState('helpTheUser');
    },
    'AMAZON.YesIntent': function() {
        this.handler.state = GAME_STATES.TRIVIA;
        this.emitWithState('AMAZON.RepeatIntent');
    },
    'AMAZON.NoIntent': function() {
        var speechOutput = 'Ok, we\'ll play another time. Goodbye!';
        this.emit(':tell', speechOutput);
    },
    'AMAZON.StopIntent': function () {
        this.emit(':ask', 'Would you like to keep playing?')
    },
    'AMAZON.CancelIntent': function () {
        this.handler.state = GAME_STATES.TRIVIA;
        this.emitWithState('AMAZON.RepeatIntent');
    },
    'Unhandled': function () {
        var speechOutput = 'Say yes to continue, or no to end the game.';
        this.emit(':ask', speechOutput, speechOutput);
    },
    'SessionEndedRequest': function () {
        console.log('Session ended in help state: ' + this.event.request.reason);
    }
});

function handleUserGuess(userGaveUp) {
    var answerSlotValid = isAnswerSlotValid(this.event.request.intent);
    var speechOutput = '';
    var speechOutputAnalysis = '';
    var gameQuestions = this.attributes.questions;
    var correctAnswerIndex = parseInt(this.attributes.correctAnswerIndex);
    var currentScore = parseInt(this.attributes.score);
    var currentQuestionIndex = parseInt(this.attributes.currentQuestionIndex);
    var correctAnswerText = this.attributes.correctAnswerText;

    if (answerSlotValid && parseInt(this.event.request.intent.slots.Answer.value) == this.attributes['correctAnswerIndex']) {
        currentScore++;
        speechOutputAnalysis = "correct. ";
    } else {
        if (!userGaveUp) {
            speechOutputAnalysis = "wrong. "
        }

        speechOutputAnalysis += "The correct answer is " + correctAnswerIndex + ": " + correctAnswerText + ". ";
    }

    // Check if we can exit the game session after GAME_LENGTH questions (zero-indexed)
    if (this.attributes['currentQuestionIndex'] == GAME_LENGTH - 1) {
        speechOutput = userGaveUp ? "" : "That answer is ";
        speechOutput += speechOutputAnalysis + "You got " + currentScore.toString() + " out of "
            + GAME_LENGTH.toString() + " questions correct. Thank you for playing!";

        this.emit(':tell', speechOutput)
    } else {
        currentQuestionIndex += 1;
        correctAnswerIndex = Math.floor(Math.random() * (ANSWER_COUNT));
        var spokenQuestion = Object.keys(questions[gameQuestions[currentQuestionIndex]])[0];
        var roundAnswers = populateRoundAnswers(gameQuestions, currentQuestionIndex, correctAnswerIndex);
        var questionIndexForSpeech = currentQuestionIndex + 1;
        var repromptText = "Question " + questionIndexForSpeech.toString() + ". " + spokenQuestion + " ";

        for (var i = 0; i < ANSWER_COUNT; i++) {
            repromptText += (i+1).toString() + ". " + roundAnswers[i] + ". "
        }

        speechOutput += userGaveUp ? "" : "That answer is ";
        speechOutput += speechOutputAnalysis + "Your score is " + currentScore.toString() + ". " + repromptText;

        Object.assign(this.attributes, {
            "speechOutput": repromptText,
            "repromptText": repromptText,
            "currentQuestionIndex": currentQuestionIndex,
            "correctAnswerIndex": correctAnswerIndex + 1,
            "questions": gameQuestions,
            "score": currentScore,
            "correctAnswerText":
                questions[gameQuestions[currentQuestionIndex]][Object.keys(questions[gameQuestions[currentQuestionIndex]])[0]][0]
        });

        this.emit(':askWithCard', speechOutput, repromptText, GAME_NAME, repromptText);
    }
}

function populateGameQuestions() {
    var gameQuestions = [];
    var indexList = [];
    var index = questions.length;

    if (GAME_LENGTH > index){
        throw new Error('Invalid Game Length.');
    }

    for (var i = 0; i < questions.length; i++){
        indexList.push(i);
    }

    // Pick GAME_LENGTH random questions from the list to ask the user, make sure there are no repeats.
    for (var j = 0; j < GAME_LENGTH; j++){
        var rand = Math.floor(Math.random() * index);
        index -= 1;

        var temp = indexList[index];
        indexList[index] = indexList[rand];
        indexList[rand] = temp;
        gameQuestions.push(indexList[index]);
    }

    return gameQuestions;
}

/**
 * Get the answers for a given question, and place the correct answer at the spot marked by the
 * correctAnswerTargetLocation variable. Note that you can have as many answers as you want but
 * only ANSWER_COUNT will be selected.
 * */
function populateRoundAnswers(gameQuestionIndexes, correctAnswerIndex, correctAnswerTargetLocation) {
    var answers = [];
    var answersCopy = questions[gameQuestionIndexes[correctAnswerIndex]][Object.keys(questions[gameQuestionIndexes[correctAnswerIndex]])[0]].slice();

    var index = answersCopy.length;

    if (index < ANSWER_COUNT) {
        throw new Error('Not enough answers for question.');
    }

    // Shuffle the answers, excluding the first element which is the correct answer.
    for (var j = 1; j < answersCopy.length; j++){
        var rand = Math.floor(Math.random() * (index - 1)) + 1;
        index -= 1;

        var temp = answersCopy[index];
        answersCopy[index] = answersCopy[rand];
        answersCopy[rand] = temp;
    }

    // Swap the correct answer into the target location
    for (var i = 0; i < ANSWER_COUNT; i++) {
        answers[i] = answersCopy[i];
    }
    temp = answers[0];
    answers[0] = answers[correctAnswerTargetLocation];
    answers[correctAnswerTargetLocation] = temp;
    return answers;
}

function isAnswerSlotValid(intent) {
    var answerSlotFilled = intent && intent.slots && intent.slots.Answer && intent.slots.Answer.value;
    var answerSlotIsInt = answerSlotFilled && !isNaN(parseInt(intent.slots.Answer.value));
    return answerSlotIsInt && parseInt(intent.slots.Answer.value) < (ANSWER_COUNT + 1) && parseInt(intent.slots.Answer.value) > 0;
}
