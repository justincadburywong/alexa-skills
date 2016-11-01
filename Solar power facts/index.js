'use strict';
var Alexa = require('alexa-sdk');

var APP_ID = undefined; //OPTIONAL: replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";
var SKILL_NAME = 'My Solar Facts';

/**
 * Array containing space facts.
 */
var FACTS = [
    "Solar energy is a completely free source of energy and it is found in abundance. Though the sun is 90 million miles from the earth, it takes less than 10 minutes for light to travel from that much of distance.",
    "Solar energy which comprises of radiant heat and light from the sun can be harnessed with some modern technology like photo-voltaic, solar heating, artificial photosynthesis, solar architecture and solar thermal electricity.",
    "The solar technology can be distinguished into active and passive. Photovoltaic panels and solar thermal collectors which harness solar energy are examples of active solar technology. Passive technology includes constructing rooms to improve air circulation, orienting space to favorably use sunlight.",
    "The earth gets 174 Petawatts of incoming solar radiation in the upper atmosphere. About 30% is reflected back to space and the rest is absorbed by oceans, clouds and land masses.",
    "The water cycle is an important result of solar insulation. The earth, oceans and atmosphere absorb solar radiation and their temperature rises. Warm air rises from the oceans causing convection. When this air rises to high altitudes, clouds are created by condensation of water vapor. These clouds cause rains that bring water back to the earth’s surface which completes the water cycle.",
    "Solar energy has also another use. By means of photosynthesis, solar energy is converted by green plants into chemical energy which creates the bio mass that makes up the fossil fuels.",
    "Horticulture and agriculture seek to make the maximum use of solar energy. These include techniques like timing of planting cycles and mixing of plant varieties. Green houses are also used to convert light into heat to promote year round cultivation of special crops.",
    "Solar powered hot water systems utilize solar energy to heat water. In certain areas, 60 to 70% of water used domestically for temperatures as high as 60 degree Celsius can be made available by solar heating.",
    "Solar chimneys are passive solar ventilation systems. Shafts connect the interior and exterior of the building. The functioning can be improved by glazing and using thermal mass materials.",
    "Solar energy can also be used for making potable, brackish or saline water. Without using electricity or chemicals, waste water can be treated. Creating salt from sea water is also one of the oldest uses of solar energy.",
    "Clothes can be dried in the sun using clothes lines, cloth racks etc.",
    "Food can be cooked, dried or pasteurized using solar energy.",
    "Solar power is the most exciting use of solar energy. It is how solar energy is converted into electricity by using either photo-voltaic (direct method) or concentrated solar power (Indirect). Large beams of sunlight are focused into a small beam using mirrors or lenses in the case of concentrated solar power. Photoelectric effect is used by Photo voltaic to convert solar energy into electric energy.",
    "Solar chemical processes replace fossil fuels as a source for chemical energy and can make solar energy storable and transportable. Photosynthesis can create a variety of fuels. Technology for producing Hydrogen is a major area of solar chemical research.",
    "Thermal storage systems can store solar energy in the form of heat by using common materials with high specific heat such as stone, earth and water. Solar energy can be stored also in molten salts.",
    "The oil crisis of 1970 revealed the delicate nature of fossil fuels as a source of energy for the world. As such research in alternative, renewable energy technology like that of solar and wind energy gained momentum.",
    "Solar energy is being recognized as the future of alternative energy sources as it is non polluting and helps combat the Greenhouse effect on global climate created by use of fossils fuels.",
    "Common domestic use of solar energy is from solar panels which absorb solar energy to use for cooking and heating water.",
    "Solar energy produce no pollution, have no environmental effects and is ecologically acceptable.",
    "Solar energy is one of the most widely used renewable source of energy. One can use renewable energy technologies to convert solar energy into electricity.",
    "Space missions by various countries use solar energy to power their spaceships.",
    "Solar energy is very reliable source of energy.",
    "With new advancements in scientific researches, solar energy could be more affordable in future with decreasing costs and increasing efficiency.",
    "Solar energy could prove to be the major source of renewable energy because of its massive potential and long-term advantages.",
    "The earth receives about 1,366 watts of direct solar radiation per square meter.",
    "The largest solar power plant in the world is located in the Mojave Desert in California, covering 1000 acres.",
    "Solar energy is the preferred mode of creating power where the need is temporary. For e.g.: temporary fairs, mining sites, Olympics.",
    "Solar energy can also be used to power calculators.",
    "Solar panels are virtually maintenance free since the batteries require no water or other regular service and will last for years. Once, solar panels are installed, there are no recurring costs.",
    "Solar power can significantly reduce the electricity bills. Moreover, there are many tax incentives and rebate programs designed to spur the use of solar, and save home owners money at the same time.",
    "Solar power is noise pollution free. It has no moving parts, and does not require any additional fuel, other than sunlight, to produce power.",
    "A home solar panel system consists of several solar panels, an inverter, a battery, a charge regulator, wiring, and support materials. Sunlight is absorbed by the solar panels and is converted to electricity by the installed system. The battery stores electricity that can be used at a later time, like cloudy days or during the evening.",
    "By relying on battery backup, solar energy can even provide electricity 24×7, even on cloudy days and at night.",
    "Solar Energy is measured in kilowatt-hour. 1 kilowatt = 1000 watts.",
    "Though solar energy is used on a wide scale, it only provides a small fraction of the world’s energy supply.",
    "Solar energy is used in many applications including Electricity, Evaporation, Biomass, Heating water and buildings and even for transport.",
    "Large investment is one the primary reason why solar energy is not still not used by many people all over the world.",
    "Solar energy has been used for over 2700 years. In 700 BC, glass lenses were used to make fire by magnifying the sun’s rays.",
    "The sun is also the main source of non-renewable fossil fuels (coal, gas and petroleum) which began life as plants and animals millions of years ago.",
    "Clouds and pollution prevent the sun’s rays from reaching the earth.",
    "Solar energy travels for 93,000,000 miles from the sun to the earth in 8 minutes and 19 seconds.",
    "The amount of solar energy that hits the earth each hour is enough to provide the energy needs of earth’s entire population for a full year.",
    "Approximately 50% of the sun’s energy is absorbed by the earth’s surface, while nearly 20% is absorbed by the earth’s atmosphere and clouds. Another almost 30% is reflected from the earth’s surface. Therefore, it is estimated that we are only harnessing 0.01% of the sun’s energy for productive use.",
    "In 1447, Leonardo Da Vinci predicted that there would be a solar industrialization.",
    "The fastest growing market for solar energy is in Third World Countries that have an abundance of sunlight and a population without electricity.",
    "China is the world leader in renewable energy. The United States comes in second.",
    "Solar lighting is preferred when the need is temporary, such as fairs, mining sites, the Olympics, or new real estate developments.",
    "Solar lights provide security in poorly-lit areas where access to grid power is challenging, such as parks and parking lots.",
    "Solar energy contributes to the completion of the water cycle. The earth, oceans and atmosphere absorb solar radiation, and as the temperatures rise, the warm air rises from the oceans, causing convection. When this air rises to higher altitudes, clouds form, and pour rain water back to the earth.",
    "Horticulture and agriculture use solar energy by using techniques such as timing planting cycles and mixing plant varieties. Green houses are also used to convert light into heat to promote year round cultivation of special crops.",
    "Homes with solar energy in the United States hover at somewhere under the 1% mark of the total. However, the solar industry is projected to grow by 20-40% per year for the next 10 years.",
    "In some areas, as much as 90% of the cost of a residential solar power system can be offset by rebates and solar energy credits.",
    "A sunny location receives an average of 5.5 hours of sunlight per day each year. A cloudy location receives 2.5 hours per day of sunlight each year.",
    "According to astrophysics, the Sun was born about 4.57 billion years ago and has another 6-7 billion years before its fuel is exhausted and it becomes a white dwarf. Luckily this will not happen for another 5 billion years.",
    "The Greeks and Romans were the first to use solar energy in their designs, by building south facing windows in their homes that allowed the sun to heat and light indoor spaces. The Native Americans, ancient Chinese, Greeks, Romans, and pueblo peoples harnessed the sun to heat their homes in various other ways.",
    "Our bodies use solar energy to create Vitamin D by converting a pre-form of Vitamin D on our skin when it is hit by the ultraviolet energy from the sun.",
    "Solar panels first appeared on the market in 1956.",
    "Space programs started using photovoltaic powered systems in 1958. They are still used today.",
    "One of the most advanced uses of sunlight in Ancient Egypt was for religious practices. Imhotep, a High Priest of the Sun God Ra, used a special type of papyrus and a mixture of carious herbs, minerals, and sage to help capture sunlight much in the same way that we use solar panels today.",
    "Plants use the sun’s energy to power a chemical reaction called photosynthesis, which converts to air, water and other nutrients so that the plant can grow and bloom. When we eat natural foods, fruits, and vegetables, we are consuming calories that were generated by the sun’s energy.",
    "Solar energy can purify water. This property of solar energy may have been known by the Ancient Greeks, and was practiced by Persian alchemists in the 1500s. Another process that uses solar energy to purify water of contamination is called solar distillation."
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
        var speechOutput = "You can say tell me a solar power fact, or, you can say stop... How can I help?";
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
