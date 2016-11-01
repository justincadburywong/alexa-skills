'use strict';
var Alexa = require('alexa-sdk');

var APP_ID = undefined; //OPTIONAL: replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";
var SKILL_NAME = 'My Surfing Facts';

/**
 * Array containing space facts.
 */
var FACTS = [
    "Captain James Cook was the first person to describe surfing (or he’enalu in Hawaiian), in 1778. He saw a surfer whom he described as someone 'who had the most supreme pleasure while he was driven so fast and smoothly by the seas.'",
    "The Hawaiians referred to surfing as he’enalu, which means 'wave sliding.'  For Hawaiians, surfing was a central part of their religion. Surfing not only encompassed deep spiritual links with the ocean, but it was also a way for ceremonial chiefs to assert their dominance.",
    "Surfing is among the oldest sports on Earth. While the precise origin of surfing is uncertain, prehistoric stone carvings in Chan Chan in Peru that date back 5,000 years show people surfing.",
    "The 'Father of Modern Surfing' is considered to be Duke Kahanamoku (1890–1968), an Olympic swimmer who started a surf club in Waikiki Beach.",
    "The rise in female surfers can be traced to the influence of Title IX, which was part of the federal Education Amendment of 1972 sponsored by Hawaiian Congresswoman Patsy Mink.",
    "WWII led to the invention of chemicals and materials that helped revolutionize the construction of surfboards. Styrofoam, fiberglass, and resin all helped create boards that were more sturdy and lightweight.",
    "Traditionally, surfing was an elite and sacred island activity. However, after WWII, with more leisure time coupled with beach movies, surf fashion, and a show called Gidget, surfing became a commercialized, multimillion-dollar industry.",
    "The first major surf competition took place in 1928 in Corona del Mar, California.",
    "The invention of the car helped surfers explore the California coast and expand areas that were available to surf. Surf Safaris or “Surfaris” emerged in which a group of surfers would spend entire weekends exploring the coast.",
    "Plymouth University in the UK offers a Surf Science and Technology degree.",
    "The invention of the wetsuit helped surfers surf year-round and practice longer in cold water. This led to the progression of surfboard design and allowed surfers to develop more radical surfing moves.",
    "Dale 'Hawk' Velzy (1927–2005) was an American surfboard shaper and is credited with being the first commercial shaper in the world. He was the first person to open a surf shop in Manhattan Beach, CA, and was one of the first people to begin endorsing surfers.",
    "Two movies helped catapult surfing into popularity: Gidget (1959) and The Endless Summer (1966). These movies prompted a surf culture that influenced music, fashion, and even the English language.",
    "American Surf Magazine reported that 66% of all surfers think about sharks while riding a wave.",
    "Surfing is a $10 billion global industry that has more than 20 million participants worldwide.",
    "Early colonial powers in Hawaii almost decimated surfing. Soon after the introduction of a cash economy into Hawaii, Hawaiians lost leisure time to surf as they had to work on sugar plantations. Additionally, Hawaiians suffered a devastating demographic collapse from the diseases (mainly syphilis) that Westerners introduced.",
    "Historians note that Hawaii provided the soul of surfing, but California provided the technological advances that enabled it to spread around the world. Technological advances included more hydrodynamic boards, wave forecasting, and wetsuits.",
    "During the 1960s, a group of California surfers known as the Brotherhood of Eternal Love created a massive drug-smuggling operation in hopes of starting a psychedelic revolution in America. They ran a major global network out of Laguna and brought in millions of LSD doses, among other drugs.",
    "More surfers have been killed in the last 15 years than in all the previous 40 years of surfing combined, mainly due to the rise in big-wave surfing.",
    "Researchers believe that surfing continues to be popular because it embodies of antithesis of modern society, the pursuit of pure pleasure, and the ideal of perpetual youth.",
    "In 1885, three visiting Hawaiian princes introduced surfing to Santa Cruz, CA. While surfing didn’t immediately catch on then, in 1907, Hawaiian-born George Freeth created a surfing frenzy in California when a railroad company advertised his surfing skills to promote a new railroad beach route from L.A. to Redondo Beach.",
    "The record for the longest surf ride is 3 hours 55 minutes. Panamanian surfer Gary Saavedra set the record in 2011 when he rode an artificial wave created by a powerboat.",
    "The longest ride ever on a single wave was 37 minutes on a pororoca, which is a tidal bore wave on the Amazon River.",
    "Huntington Beach, CA, hosts the Annual City Surf Dog contest to raise money for animal welfare organizations. Dogs are judged based on their confidence riding a wave and how long they stay up.",
    "The first recorded use of the word 'surfing' as a way to describe exploring the Internet occurred in 1992. The term “channel surfing” as it refers to television first occurred in 1986.",
    "Cameron Diaz has broken her nose four times while surfing.",
    "While shooting the surfing movie Point Break (1991), Patrick Swayze broke four of his ribs. The title of the movie is a surfing term that describes when a wave breaks as it hits a point of land jutting out from the coastline.",
    "June 20 is International Surfing Day. The holiday celebrates the sport of surfing, the lifestyle of surfing, and the ocean’s sustainability of resources.",
    "Skateboarding is an offshoot of surfing. Allegedly, those who needed practicing surfing created boards with wheels in order to practice.",
    "A 'Neptune Cocktail' is an unintended gulp of seawater that a surfer takes during a wipeout.",
    "While surfing traditionally flourished around the coastlines, new technology in artificial waves and wave parks is creating a new surfing industry inland.",
    "In one of the more gruesome surfing injuries, former world champion Martin Potter barely escaped with his life in 1997 when the nose of his board cut 6 inches into his stomach and snapped off. The cut was so deep that his intestines spilled out. He needed 40 stitches and spent 3 months out of the water.",
    "A 'hodad' is someone who hangs out at a beach pretending to be a surfer but who really isn’t.",
    "A 'barney' is an inexperienced surfer or someone who needs more practice surfing. A 'benny' is a nonlocal surfer.",
    "For many surfers, a barrel or tube is the ultimate surfing experiences, when the wave becomes hollow as it is breaking.",
    "In surfing slang, a 'beach leech' is a surfer who doesn’t bring his or her own equipment or board wax but rather borrows others’.",
    "In the surfing world, one of the worst things a surfer can do is to 'drop in,' or steal a wave when there is already a surfer riding it.",
    "The record for the most surfboards stacked on a car is 282 surfboards. The car drove 30.4 meters near Santa Barbara, CA.",
    "The record for the most people riding one surfboard is 47. On March 2005, 47 surfers rode a board measuring 39 feet in Australia. The giant surfboard carrying all the surfers was towed through the water until it was released.",
    "Floridian surfer Kelly Slater was the first person to ever score two 'perfect 10' rides in surfing during the 2005 Billabong Tahiti Pro Contest. He has been crowned ASP World Tour Champion a record 11 times and is the youngest (age 20) as well as the oldest (age 39) to win the title.",
    "Kelly Slater (1972– ) holds the record for most money made by a surfer in one year when he made $3 million in 2009. He is the most successful surfing champion in the world.",
    "In the surfing world, 'men in grey suits' refers to sharks.",
    "Hawaiian Garrett McNamara holds the record for the 'Largest Wave Surfed.' He rode a 100-foot wave in Portugal in 2013.",
    "One of the most famous and most photographed waves is called a pipeline.",
    "Some rivers create a backflow at certain times of the year that allow surfing. These river waves are called tidal bores.",
    "About 100 miles off the coast of San Diego, CA, is an underwater sea mount known as the Corte Bank. During the winter swells, these waves can reach 60 feet or higher.",
    "The premier professional surfing event is the Association of Surfing Professionals (ASP) World Tour.",
    "The most dangerous surfing days are not necessarily when the swell is at its biggest, but rather when the swell is on its way up and the waves double up on each other.",
    "There are two versions of surfing: short boarding and long boarding. Short boarding allows a surfer to move faster through the water, which makes it the more difficult and physically demanding ride. Long boarding is better suited to more gentle waves; it is also easier to balance and stand up on.",
    "The person with the most surfboards ever is Donald Dettloff. He owns 647 surfboards, which he stores on his property in Hawaii. It has taken him 15 years to grow his collection, which he uses to make a fence.",
    "The organizers of the 2020 Summer Olympics in Tokyo are considering adding surfing to the list of new athletic events. Other events under consideration include bowling, karate, roller sports, sport climbing, squash, and wushu."
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
        var speechOutput = "You can say tell me an surfing fact, or, you can say stop... How can I help?";
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
