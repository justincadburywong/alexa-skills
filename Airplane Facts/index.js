'use strict';
var Alexa = require('alexa-sdk');

var APP_ID = undefined; //OPTIONAL: replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";
var SKILL_NAME = 'My Airplane Facts';

/**
 * Array containing space facts.
 */
var FACTS = [
    "The wings of the airplane are just one component of flight. There are actually four forces of flight that push the plane up, down, forward, or slow it down. These four forces of flight are lift, thrust, drag, and weight.",
    "The Wright brothers invented and flew the first airplane in 1903. It is considered the world’s first “sustained and controlled heavier-than-air powered flight.” Their aircraft, the Wright Flyer, flew about 120 feet. Today, the newest Boeing 787 can fly 10,000 miles on a single tank of gas.",
    "Orville Wright did not sit in the Wright Flyer during its first flight. Instead, he lay flat on the lower wing in the middle of the plane.",
    "One the most deadly airplane accidents actually happened on the ground. In 1977, two fully loaded planes carrying a total of over 600 passengers collided head-on in the middle of the runway in what is now known as the Tenerife Accident, named after Tenerife Island where the accident occurred. Over 500 people died.",
    "Increases in carbon dioxide in the atmosphere are increasing the incidents of airplane turbulence.",
    "The oxygen in an airplane’s emergency oxygen masks lasts for only about 15 minutes.",
    "English is the international language of flight. All flight controllers and all commercial pilots who fly on international flights are required to speak English.",
    "One windshield or window frame of a Boeing 747-400’s cockpit costs as much as a BMW.",
    "Most pilots and copilots on major airlines are not allowed to eat the same food to avoid the possibility of food poisoning sickening the entire flight crew.",
    "Airport control tower windows must be angled at precisely 15 degrees from vertical at the top to decrease reflections from both inside and outside the tower.",
    "The average Boeing 747 has around 150–175 miles of wiring inside it.",
    "The world’s smallest jet is the BD-5 Micro. Its wingspan is 14–21 feet and weighs just 358 pounds.",
    "The C-5, one of the longest military aircrafts, is longer than six stories tall. Its length of 143 feet is longer than the Wright Brother’s first flight of 120 feet.",
    "There have been more astronauts than pilots who have flown the Concorde, which is now out of service. The Concorde was a turbo jet-powered, supersonic passenger jet airliner that was in service from 1976 to 2003. Many consider the aircraft an engineering marvel.",
    "The tires of a Boeing KC-135 jet tanker’s landing gear consist of 8 main gear wheels and two nose wheels. This is enough material to make 100 automobile tires.",
    "The Boeing 767 sucks in enough air through its engines to fill a Good Year Blimp in 7 seconds.",
    "The first woman in the U.S. to become licensed to fly a play was Harriet Quimby (1875–1912) in 1911. She was also the first woman to fly across the English Channel.",
    "Amelia Earhart (1897–1937) was the first woman to fly solo across the Atlantic Ocean. She also helped created “The Ninety-Nines,” which was an organization for female pilots, who also achieved many other notable accomplishments.",
    "The world’s largest passenger plane is the Airbus A380. It is a double-decker four-engine jetliner. It made its first flight on April 27, 2005.",
    "Commercial airport runways are typically 2 to 4 feet thick with layers of asphalt. Taxiways are usually thinner, with around 18 inches of concrete.",
    "The world’s fastest airplane is the Lockheed SR-71 Blackbird, flying at 2,193 miles per hour. It has held the record for nearly 40 years.",
    "The Antonov AN-225 cargo jet is the largest plane in the world. It is nearly as big as a football field from nose to tail and wing tip to wing tip. It was originally built to transport a space plane.",
    "Airplanes typically fly at an altitude of around 35,000 feet. If Earth were the size of a desktop globe, a plane at that height would be flying at only 1/10 of an inch off the surface.",
    "According to Popular Mechanics, sitting in the tail of an airplane improves chances of accident survival by 40%.",
    "Approximately 95.7% of those involved in a plane crash survive it.",
    "The amount of fuel that a Boeing 767-400 carries is enough to fill 1,400 minivans.",
    "The world’s largest passenger airliner, the Airbus A380, has about 4 million parts.",
    "A jet’s contrails (or white trails) consist of water vapor and can be used to predict the weather. A thin, shorter tail indicates low humidity and fair weather. A thick, longer lasting tail signifies the early indication of a storm.",
    "A commercial jet has an average cruising speed of 550–580 mph.",
    "Often dubbed the “Father of Aviation,” in 1799 English aviator George Cayley (1773–1857) built the first glider that could go short distances. His early work helped inventors understand the dynamics of flight, and the Wright Brothers acknowledged his importance.",
    "Known as the “Glider King,” Otto Lilienthal (1848–1896) invented the first gliders that could travel longer distances and carry people. The Wright Brothers cite Lilienthal’s research as a major inspiration for their own work.  Berlin’s busiest airport is named after him.",
    "In the United States, 2 million passengers board more than 30,000 flights—every day.",
    "The world’s busiest airport is the Hartsfield-Jackson Atlanta International Airport, at over 96 million passengers a year. Beijing Capital International Airport is in second place, with more than 86 million passengers a year. However, in the spirit of friendly rivalry, Chicago’s O’Hare is the busiest in the world in terms of take offs and landings.",
    "Airbus is working on a transparent plane that would offer passengers a 360-degree view as they fly.",
    "The U.S. airline industry makes about $170 billion in revenue each year. The industry constitutes 600 companies, with the top 10 composing over 75% of the industry revenue. The top 10 include American, Delta, and United Continental.",
    "Worldwide, the airline industry generates about US$640 billion.",
    "The atmosphere in an airplane cabin dries out a person’s nose, and the changing air pressure numbs about 1/3 of a person’s taste buds. This is one reason for airlines adding lots of spices and salt to their foods. Additionally, tomato juice tastes less acidic in the air.",
    "Mercury is not allowed on a flight. Even a small amount of mercury can seriously damage aluminum, which is what most planes are made from. Airplanes that are exposed to mercury are usually quarantined.",
    "About 1 in 5 people have some of fear flying, or “aviophobia.”",
    "The risk of being killed in a plane crash for the average American is 1 in 11 million. The risk of being killed in a car accident is 1 in 5,000.",
    "Research shows that the first 3 minutes after takeoff and the final 8 minutes before landing are when 80% of plane crashes happen.",
    "During a 1994 flight, a mother tragically lost her grip on her infant daughter she was holding on her lap when the aircraft experienced violent gyrations. While the mother survived, her daughter died.",
    "In 1987, American Airlines saved $40,000 by removing 1 olive from each salad served in first class.",
    "Passenger airplanes are notorious germ hotbeds. One study found that 60% of tray tables tested harbored the “superbug” MRSA. Additionally, airline blankets are washed just every 5–30 days.",
    "Between 43% and 54% of pilots surveyed in the U.K., Norway, and Sweden admitted to have fallen asleep while flying a passenger plane. One third of them stated that when they woke up, they discovered that their co-pilots had also fallen asleep.",
    "Most airline pilots are paid only for time in the air, which doesn’t include time spent getting to and from the airport, performing preflight duties, or waiting for delayed planes.",
    "Studies indicate that those who sit father than 5 rows away from an exit are less likely to successfully exit an airplane during an emergency.",
    "A pilot must have 20/20 vision, with or without corrective lenses, to become a civilian airline pilot.",
    "A Boeing 747 can carry about 60,000 gallons of jet fuel, which weighs about 400,000 pounds.",
    "A Boeing 747 gets just 0.2 miles to the gallon. However, a 747 usually carries more than 550 passengers—which, of course, affects that statistic.",
    "Autopilot is usually turned on during most of an airplane flight. The computer can make more precise adjustments, which leads to better fuel efficiency (except during turbulence). Autopilot is not typically used during takeoff or landing, although it is available to use.",
    "The contrails of a plane primarily consist of frozen, crystalized water vapor. They also contain carbon dioxide, nitrogen oxide, sulfate particles, and soot. Some conspiracy theorists claim that the government and military have planted harmful chemicals in contrails.",
    "Research indicates that people fall in love with flight attendants at first sight more than any other professions (including restaurant servers and strippers).",
    "The FAA requires that all airplanes be capable of being evacuated in 90 seconds. It takes only a minute and half for a fire to spread and engulf a plane.",
    "Aircraft radar cannot detect turbulence. Turbulence can occur in clear, cloudless weather as well as in bad weather. It is the number one cause of in-flight injuries.",
    "Turbulence is caused by several factors, including jet streams and masses of rising hot air. Other causes include currents from storms, other planes, or air passing over mountains.",
    "If a plane needs to make an emergency landing, a pilot may decide to dump fuel from its wings. While it’s not very common, it is a safety procedure to keep the plane from experiencing an overweight landing. The fuel usually evaporates before it reaches the ground.",
    "If a cabin is pressurized and an airplane door came open in midflight at a high altitude, the sudden opening could cause items and people to get sucked out. However, pressurization in the cabin and a plug-type door (a door that is bigger than the opening), makes it near impossible for even multiple people to open a door during a flight.",
    "The air on airplanes is filtered by the same technology that filters air in hospitals, so while the tray table may harbor germs, the air is clean.",
    "A woman and her daughter were arrested when they tried to smuggle the woman’s dead husband in a wheelchair onto a plane. They had covered his eyes with sunglasses and told authorities he was just sleeping.",
    "A woman tried to smuggle a baby tiger onto an airplane by sedating it and then placing it in a suitcase with stuffed toy tigers. However, her plan was foiled when the X-ray in the security check showed that one of the “stuffed toys” actually had bones.",
    "A woman flying in to Florida tried to smuggle a human head (along with hair, teeth, and skin) from Haiti in order to keep away evil spirits. She was charged with a smuggling a human head into the U.S. without documentation. She was also charged with failure to declare the head and for transporting hazardous material.",
    "A woman from Stockholm, Sweden, attempted to smuggle 75 live snakes onto an airplane by placing them in her bra.  She also had six lizards under her shorts.",
    "Between June 14 and 15, 1919, British airmen John Alcock and Arthur Brown made the first nonstop flight across the Atlantic Ocean. They flew from Newfoundland, Canada, to Ireland. Because there was also a small amount of mail on the flight, they also made the first transatlantic airmail flight.",
    "Charles Lindbergh was the first to fly solo nonstop across the Atlantic Ocean from, New York to Paris, on May 20–21, 1927.  The trip covered 3,631 miles and took 33 hours 29 minutes.",
    "Charles Lindbergh is arguably the most famous pilot in history. Nicknamed “Slim,” “Lucky Lindy,” and “The Lone Eagle,” he was an author, inventor, military officer, explorer, and social activist. He was also a friend of Henry Ford, both of whom were anti-Semitic.",
    "In 1947, Chuck Yeager became the first person to fly faster than the speed of sound.",
    "In 1986, a plane called Voyager flew all the way around the world without landing or refueling.",
    "Plane exhaust kills more people than plane crashes. Approximately, 10,000 people are killed annually from toxic pollutants from airplanes."
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
        var speechOutput = "You can say tell me an airplane fact, or, you can say stop... How can I help?";
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
