'use strict';
var Alexa = require('alexa-sdk');

var APP_ID = undefined; //OPTIONAL: replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";
var SKILL_NAME = 'my california facts';

/**
 * Array containing space facts.
 */
var FACTS = [
    "Californias Mount Whitney measures as the highest peak in the lower 48 states. Its most famous climb is Mount Whitney Trail to the 14,495 feet summit. Wilderness permits are required.",
    "In 1925 a giant sequoia located in Californias Kings Canyon National Park was named the nations national Christmas tree. The tree is over 300 feet in height.",
    "More turkeys are raised in California than in any other state in the United States.",
    "Pacific Park, on the venerable Santa Monica Pier, re-creates the amusement parks once dotting the ocean areas along the Pacific Coast. Featured are 11 amusement rides including the 1910-vintage hand-carved merry-go-round appearing in the movie The Sting.",
    "Alpine County is the eighth smallest of Californias 58 counties. It has no high school, ATMs, dentists, banks, or traffic lights.",
    "Fallbrook is known as the Avocado Capital of the World and hosts an annual Avocado Festival. More avocados are grown in the region than any other county in the nation.",
    "In the late 1850s, Kennedy Mine, located in Jackson, served as one of the richest gold mines in the world and the deepest mine in North America.",
    "An animal called the riparian brush rabbit calls Caswell Memorial State Park (near Manteca) its home. Endemic only to the states park system, the critter lives in approximately 255 acres stretching along the areas once-vast hardwood forest.",
    "In city of Pacific Grove, there is a law on the books declaring the molestation of monarch butterflies to be illegal.",
    "The largest three-day rodeo in the United States is held on the Tehama County Fairgrounds in Red Bluff.",
    "Demonstrations on making toothpaste from orange by-products were popular attractions at the Los Angeles County fair in 1922. The fair is held in Pomona.",
    "Located in Sacramento, the California State Railroad Museum is the largest museum of its kind in North America.",
    "Several celebrities are buried at Hillside Cemetery in Culver City. Included gravesites are those of Al Jolson, George Jessel, Eddie Cantor, Jack Benny, and Percy Faith.",
    "California Caverns claims the distinction of being the most extensive system of caverns and passageways in the Mother Lode region of the state.",
    "Totaling nearly three million acres, San Bernardino County is the largest county in the country.",
    "On Catalina Island in 1926, American author Zane Grey built a pueblo-style home on the hillside overlooking Avalon Bay. He spent much of his later life in Avalon. The home is now a hotel.",
    "Klamath Basin National Wildlife Refuge contains the largest winter population of bald eagles in the continental United States.",
    "Author Richard Dana (1851-1882) wrote the novel Two Years Before the Mast. He inspired the name for the beach community of Dana Point.",
    "In Atwater the Castle Air Museum has the largest display of military aircraft in the state.",
    "The Country Store in Baker has sold more winning California State Lottery tickets than any outlet in the state.",
    "Reputed to be the most corrupt politician in Fresno County history, Vice-leader Joseph Spinney was mayor for only ten minutes.",
    "The Hollywood Bowl is the worlds largest outdoor amphitheater.",
    "The first person to personally receive a star on the Walk of Fame in Hollywood was actress Joanne Woodward. She received it in 1960.",
    "Death Valley is recognized as the hottest, driest place in the United States. It isnt uncommon for the summer temperatures to reach more than 115 degrees.",
    "The first motion picture theater opened in Los Angeles on April 2, 1902.",
    "Inyo National Forest is home to the bristle cone pine, the oldest living species. Some of the gnarled trees are thought to be over 4,600 years old.",
    "San Francisco Bay is considered the worlds largest landlocked harbor.",
    "Sequoia National Park contains the largest living tree. Its trunk is 102 feet in circumference.",
    "Yorba Linda is home to the Richard Nixon Library.",
    "The Coachella Valley is nicknamed The Date Capital of the world and The Playground of Presidents.",
    "One out of every eight United States residents lives in California.",
    "California is the first state to ever reach a trillion dollar economy in gross state product.",
    "California has the largest economy in the states of the union.",
    "If Californias economic size were measured by itself to other countries, it would rank the 7th largest economy in the world.",
    "Los Angeles is ranked the fourth largest economy in the United States compared to other states.",
    "Simi Valley is the home of the Ronald Reagan Presidential Library and Museum.",
    "It is estimated there are approximately 500,000 detectable seismic tremors in California annually.",
    "During his engagement at the Fillmore West in San Francisco, Otis Redding stayed on a houseboat in Sausalito. While there he wrote his last song and greatest hit: The Dock of the Bay.",
    "The state motto is Eureka!, a Greek word translated I have found it! The motto was adopted in 1849 and alludes to the discovery of gold in the Sierra Nevada.",
    "California is known variously as The Land of Milk and Honey, The El Dorado State, The Golden State, and The Grape State.",
    "There are more than 300,000 tons of grapes grown in California annually.",
    "California produces more than 17 million gallons of wine each year.",
    "The redwood is the official state tree. Some of the giant redwoods in Sequoia National Park are more than 2,000 years old.",
    "The California poppy is the official state flower. The California grizzly bear (Ursus californicus) is the official state animal.",
    "California holds two of the top ten most populous cities: Los Angeles and San Diego.",
    "Fresno proclaims itself the Raisin Capital of the World.",
    "The highest and lowest points in the continental United States are within 100 miles of one another. Mount Whitney measures 14,495 feet and Bad Water in Death Valley is 282 feet below sea level.",
    "Castroville is known as the Artichoke Capital of the World. In 1947 a young woman named Norma Jean was crowned Castrovilles first Artichoke Queen. She went on to become actress Marilyn Monroe."
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
        var speechOutput = "You can say tell me a california fact, or, you can say stop... How can I help?";
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
