/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/
/**
 * This sample demonstrates a simple skill built with the Amazon Alexa Skills
 * nodejs skill development kit.
 * This sample supports multiple lauguages. (en-US, en-GB, de-DE).
 * The Intent Schema, Custom Slots and Sample Utterances for this skill, as well
 * as testing instructions are located at https://github.com/alexa/skill-sample-nodejs-fact
 **/

'use strict';

const Alexa = require('alexa-sdk');

const APP_ID = undefined;  // TODO replace with your app ID (OPTIONAL).

const languageStrings = {
    'en': {
        translation: {
            FACTS: [
                'The earliest gardens were strictly practical and were used to grow food and medicinal herbs. Around 1500 B.C. in Egypt, the first decorative gardens appeared.',
                'The first greenhouses in history were built in Rome in A.D. 30 under the orders of Emperor Tiberius who wanted to eat a cucumber a day. Andrew Faneuil in Boston built the first greenhouse in North America in 1737.',
                'Watermelons are actually vegetables and are related to squash, cucumbers, and pumpkins.',
                'Famous literary works that center their plots on gardens include The Secret Garden, the Dark Materials trilogy, Tom\’s Midnight Garden, The Selfish Giant, Romeo and Juliet, The Merchant\’s Tale in Canterbury Tales, La Roman de la Rose, Rebecca, The Door in the Wall, and the book of Genesis in the Bible.',
                'The name of the flower heliotrope is from the ancient Greek (helios, meaning sun, and trepos, meaning turning to go into to) because its leaves and flowers turn toward the sun.',
                'According to Sir Francis Bacon, gardens are the purest of human pleasures.',
                'When a virus changed the color of tulips in Holland in 1637, people believed that a new type of plant had been discovered—which, in turn, led to a full-blown tulip craze. During this time, one of the prices for a single bulb included a load of grain, 1,000 pounds of cheese, 12 sheep, 10 oxen, 5 pigs, 4 barrels of beer, 2 tubs of butter, 2 hogsheads of wine, a suit of clothes, and a silver cup.',
                'The Sun contains 99.86% of the mass in the Solar System.',
                'The name chrysanthemum derives from the Greek words chrysos, meaning gold, and anthos, meaning flower. Garlands served as protection against demons, and drinking dew from chrysanthemum flowers was supposed to prolong life.',
                'There are at least 10,000 varieties of tomatoes. Over 60 million tons of tomatoes are produced each year, making it the world\’s most popular fruit. The second most popular fruit is the banana.',
                'The iris flower is named after the Greek goddess Iris who carries messages of love from heaven to earth using a rainbow as her bridge. Irises are named after her because they bloom in just about all the colors of the rainbow.',
                'Gardens and philosophy are often seen as related. Philosophers note the contribution of gardening to the good life.',
                'While ancient Romans and Assyrians were renowned for their beautiful gardens, the value of gardens as an aesthetic place declined during the Middle Ages. Monasteries, however, served to continue the tradition of garden design and the improvement of gardening techniques.',
                'Gardening can be considered both an art (arranging plants harmoniously) and as a science (applying the principles and techniques of cultivation)',
                'In ancient Greek mythology, Hyakinthos (a.k.a. Hyacinthus) was the god of spring flowers. The god Apollo adored Hyakinthos, but killed him by mistake. The hyacinth flower sprang up from his blood and, thus, this flower is a symbol of sorrow, sadness, and resurrection',
                'The Hanging Gardens of Babylon were one of the Seven Wonders of the Ancient World. They are believed to have been built by the Neo-Babylonian king Nebuchadnezzar II near present day Hillah, Babil province, in Iraq',
                'There is a garden in England called The Poison Garden. It is home to 100 murderous plants. Visitors to this dangerous garden are prohibited from smelling, touching, or tasting any of the plants',
                'Dandelions were used as a food source and as a medicine for at least 1,000 years. European immigrants purposely carried seeds to America, where greens were used for salads and teas. Dandelion roots were served as a vegetable course, or were dried and used as a coffee substitute. The flowers were used to make dandelion wine and to make a yellow dye for wool. There has been a recent revival of using the dandelion in these many ways',
                'An herb is from the leaf of a plant. A spice is from the seed, bark, root, berry, or bulb',
                'Figs are not always considered vegan. When a fig is pollinated by a fig wasp, the fig flower traps the wasp and then the enzymes in the flower digests the wasp’s corpse',
                'A pineapple is actually a berry',
                'Fruit is a botanical term, while vegetable is a culinary term. For example, botanically, a fruit is a seed-bearing structure that develops from the ovary of a flowering plant. Vegetables are other parts of the plant, such as roots, leaves, and stems. In culinary terms, however, many foods that are botanically fruits but are not typically sweet (such as eggplants, bell peppers, and tomatoes) are considered vegetables by chefs',
                'The Gympie-Gympie tree is the world’s most dangerous tree and the most painful of all stinging plant trees. Touching this tree is similar to being sprayed with hot acid, even driving those who have been affected to suicide. One man shot himself after he mistakenly used the leaf as toilet paper',
                'While the buttercup looks innocent, it is among the more deadly garden plants. If eaten, this innocent-looking flower can cause painful death resulting from organ and nervous system intoxication',
                'The largest flower in the world is the Rafflesia, or corpse flower. Its odor is similar to that of a decomposing mammal, which earns this giant flower its nickname. Found in the rainforests of Indonesia, it can grow to be 3 feet across and weigh up to 15 pounds',
                'There are over 20,000 species of edible plants in the world. However, just 20 species provide 90 percent of human food',
                'The daffodils name is from the Old English, affo dyle, or that which cometh early, because it is one of the earliest blooming flowers',
                'Japanese gardens are gardens that create miniature landscapes that are often idealized and highly abstract',
                'The Old English word geard means fence, and produced the words garden and yard',
                'While modern architects are primarily concerned about the relationship of buildings to money and the flow of cars, ancient architects were more concerned with the relationship of buildings to gardens and landscapes',
                'Many religions use gardens as symbols of paradise and immortality. Additionally, the association of gardens with perfection is found in Judaism, Christianity, and Islam',
                'The secret to a great garden is the soil, not necessarily the plant. Adding large amounts of organic materials, such as crushed leaves, grass clippings, or homemade compost will help feed and nourish a garden',
                'Some fruit trees need a pollinator, which is a similar tree that blooms at about the same time to produce a separate pollen source. Common trees that need other pollinators include apple, pear, and most sweet cherries',
                'The hardiness zone is the climatic region that best suits a particular plant. The coldest zone is 1 and the hottest is 11. If someone lives in zone 6 and tries to garden a plant rate only to zone 8, the plant will likely die',
                'The bumps on raspberries are called drupelets',
            ],
            SKILL_NAME: 'My Gardening Facts',
            GET_FACT_MESSAGE: "Here's your fact: ",
            HELP_MESSAGE: 'You can say tell me a gardening fact, or, you can say exit... What can I help you with?',
            HELP_REPROMPT: 'What can I help you with?',
            STOP_MESSAGE: 'Goodbye!',
        },
    },
    'en-US': {
        translation: {
            FACTS: [
                'The earliest gardens were strictly practical and were used to grow food and medicinal herbs. Around 1500 B.C. in Egypt, the first decorative gardens appeared.',
                'The first greenhouses in history were built in Rome in A.D. 30 under the orders of Emperor Tiberius who wanted to eat a cucumber a day. Andrew Faneuil in Boston built the first greenhouse in North America in 1737.',
                'Watermelons are actually vegetables and are related to squash, cucumbers, and pumpkins.',
                'Famous literary works that center their plots on gardens include The Secret Garden, the Dark Materials trilogy, Tom\’s Midnight Garden, The Selfish Giant, Romeo and Juliet, The Merchant\’s Tale in Canterbury Tales, La Roman de la Rose, Rebecca, The Door in the Wall, and the book of Genesis in the Bible.',
                'The name of the flower heliotrope is from the ancient Greek (helios, meaning sun, and trepos, meaning turning to go into to) because its leaves and flowers turn toward the sun.',
                'According to Sir Francis Bacon, gardens are the purest of human pleasures.',
                'When a virus changed the color of tulips in Holland in 1637, people believed that a new type of plant had been discovered—which, in turn, led to a full-blown tulip craze. During this time, one of the prices for a single bulb included a load of grain, 1,000 pounds of cheese, 12 sheep, 10 oxen, 5 pigs, 4 barrels of beer, 2 tubs of butter, 2 hogsheads of wine, a suit of clothes, and a silver cup.',
                'The Sun contains 99.86% of the mass in the Solar System.',
                'The name chrysanthemum derives from the Greek words chrysos, meaning gold, and anthos, meaning flower. Garlands served as protection against demons, and drinking dew from chrysanthemum flowers was supposed to prolong life.',
                'There are at least 10,000 varieties of tomatoes. Over 60 million tons of tomatoes are produced each year, making it the world\’s most popular fruit. The second most popular fruit is the banana.',
                'The iris flower is named after the Greek goddess Iris who carries messages of love from heaven to earth using a rainbow as her bridge. Irises are named after her because they bloom in just about all the colors of the rainbow.',
                'Gardens and philosophy are often seen as related. Philosophers note the contribution of gardening to the good life.',
                'While ancient Romans and Assyrians were renowned for their beautiful gardens, the value of gardens as an aesthetic place declined during the Middle Ages. Monasteries, however, served to continue the tradition of garden design and the improvement of gardening techniques.',
                'Gardening can be considered both an art (arranging plants harmoniously) and as a science (applying the principles and techniques of cultivation)',
                'In ancient Greek mythology, Hyakinthos (a.k.a. Hyacinthus) was the god of spring flowers. The god Apollo adored Hyakinthos, but killed him by mistake. The hyacinth flower sprang up from his blood and, thus, this flower is a symbol of sorrow, sadness, and resurrection',
                'The Hanging Gardens of Babylon were one of the Seven Wonders of the Ancient World. They are believed to have been built by the Neo-Babylonian king Nebuchadnezzar II near present day Hillah, Babil province, in Iraq',
                'There is a garden in England called The Poison Garden. It is home to 100 murderous plants. Visitors to this dangerous garden are prohibited from smelling, touching, or tasting any of the plants',
                'Dandelions were used as a food source and as a medicine for at least 1,000 years. European immigrants purposely carried seeds to America, where greens were used for salads and teas. Dandelion roots were served as a vegetable course, or were dried and used as a coffee substitute. The flowers were used to make dandelion wine and to make a yellow dye for wool. There has been a recent revival of using the dandelion in these many ways',
                'An herb is from the leaf of a plant. A spice is from the seed, bark, root, berry, or bulb',
                'Figs are not always considered vegan. When a fig is pollinated by a fig wasp, the fig flower traps the wasp and then the enzymes in the flower digests the wasp’s corpse',
                'A pineapple is actually a berry',
                'Fruit is a botanical term, while vegetable is a culinary term. For example, botanically, a fruit is a seed-bearing structure that develops from the ovary of a flowering plant. Vegetables are other parts of the plant, such as roots, leaves, and stems. In culinary terms, however, many foods that are botanically fruits but are not typically sweet (such as eggplants, bell peppers, and tomatoes) are considered vegetables by chefs',
                'The Gympie-Gympie tree is the world’s most dangerous tree and the most painful of all stinging plant trees. Touching this tree is similar to being sprayed with hot acid, even driving those who have been affected to suicide. One man shot himself after he mistakenly used the leaf as toilet paper',
                'While the buttercup looks innocent, it is among the more deadly garden plants. If eaten, this innocent-looking flower can cause painful death resulting from organ and nervous system intoxication',
                'The largest flower in the world is the Rafflesia, or corpse flower. Its odor is similar to that of a decomposing mammal, which earns this giant flower its nickname. Found in the rainforests of Indonesia, it can grow to be 3 feet across and weigh up to 15 pounds',
                'There are over 20,000 species of edible plants in the world. However, just 20 species provide 90 percent of human food',
                'The daffodils name is from the Old English, affo dyle, or that which cometh early, because it is one of the earliest blooming flowers',
                'Japanese gardens are gardens that create miniature landscapes that are often idealized and highly abstract',
                'The Old English word geard means fence, and produced the words garden and yard',
                'While modern architects are primarily concerned about the relationship of buildings to money and the flow of cars, ancient architects were more concerned with the relationship of buildings to gardens and landscapes',
                'Many religions use gardens as symbols of paradise and immortality. Additionally, the association of gardens with perfection is found in Judaism, Christianity, and Islam',
                'The secret to a great garden is the soil, not necessarily the plant. Adding large amounts of organic materials, such as crushed leaves, grass clippings, or homemade compost will help feed and nourish a garden',
                'Some fruit trees need a pollinator, which is a similar tree that blooms at about the same time to produce a separate pollen source. Common trees that need other pollinators include apple, pear, and most sweet cherries',
                'The hardiness zone is the climatic region that best suits a particular plant. The coldest zone is 1 and the hottest is 11. If someone lives in zone 6 and tries to garden a plant rate only to zone 8, the plant will likely die',
                'The bumps on raspberries are called drupelets',
            ],
            SKILL_NAME: 'My Gardening Facts',
        },
    },
    'en-GB': {
        translation: {
            FACTS: [
                'The earliest gardens were strictly practical and were used to grow food and medicinal herbs. Around 1500 B.C. in Egypt, the first decorative gardens appeared.',
                'The first greenhouses in history were built in Rome in A.D. 30 under the orders of Emperor Tiberius who wanted to eat a cucumber a day. Andrew Faneuil in Boston built the first greenhouse in North America in 1737.',
                'Watermelons are actually vegetables and are related to squash, cucumbers, and pumpkins.',
                'Famous literary works that center their plots on gardens include The Secret Garden, the Dark Materials trilogy, Tom\’s Midnight Garden, The Selfish Giant, Romeo and Juliet, The Merchant\’s Tale in Canterbury Tales, La Roman de la Rose, Rebecca, The Door in the Wall, and the book of Genesis in the Bible.',
                'The name of the flower heliotrope is from the ancient Greek (helios, meaning sun, and trepos, meaning turning to go into to) because its leaves and flowers turn toward the sun.',
                'According to Sir Francis Bacon, gardens are the purest of human pleasures.',
                'When a virus changed the color of tulips in Holland in 1637, people believed that a new type of plant had been discovered—which, in turn, led to a full-blown tulip craze. During this time, one of the prices for a single bulb included a load of grain, 1,000 pounds of cheese, 12 sheep, 10 oxen, 5 pigs, 4 barrels of beer, 2 tubs of butter, 2 hogsheads of wine, a suit of clothes, and a silver cup.',
                'The Sun contains 99.86% of the mass in the Solar System.',
                'The name chrysanthemum derives from the Greek words chrysos, meaning gold, and anthos, meaning flower. Garlands served as protection against demons, and drinking dew from chrysanthemum flowers was supposed to prolong life.',
                'There are at least 10,000 varieties of tomatoes. Over 60 million tons of tomatoes are produced each year, making it the world\’s most popular fruit. The second most popular fruit is the banana.',
                'The iris flower is named after the Greek goddess Iris who carries messages of love from heaven to earth using a rainbow as her bridge. Irises are named after her because they bloom in just about all the colors of the rainbow.',
                'Gardens and philosophy are often seen as related. Philosophers note the contribution of gardening to the good life.',
                'While ancient Romans and Assyrians were renowned for their beautiful gardens, the value of gardens as an aesthetic place declined during the Middle Ages. Monasteries, however, served to continue the tradition of garden design and the improvement of gardening techniques.',
                'Gardening can be considered both an art (arranging plants harmoniously) and as a science (applying the principles and techniques of cultivation)',
                'In ancient Greek mythology, Hyakinthos (a.k.a. Hyacinthus) was the god of spring flowers. The god Apollo adored Hyakinthos, but killed him by mistake. The hyacinth flower sprang up from his blood and, thus, this flower is a symbol of sorrow, sadness, and resurrection',
                'The Hanging Gardens of Babylon were one of the Seven Wonders of the Ancient World. They are believed to have been built by the Neo-Babylonian king Nebuchadnezzar II near present day Hillah, Babil province, in Iraq',
                'There is a garden in England called The Poison Garden. It is home to 100 murderous plants. Visitors to this dangerous garden are prohibited from smelling, touching, or tasting any of the plants',
                'Dandelions were used as a food source and as a medicine for at least 1,000 years. European immigrants purposely carried seeds to America, where greens were used for salads and teas. Dandelion roots were served as a vegetable course, or were dried and used as a coffee substitute. The flowers were used to make dandelion wine and to make a yellow dye for wool. There has been a recent revival of using the dandelion in these many ways',
                'An herb is from the leaf of a plant. A spice is from the seed, bark, root, berry, or bulb',
                'Figs are not always considered vegan. When a fig is pollinated by a fig wasp, the fig flower traps the wasp and then the enzymes in the flower digests the wasp’s corpse',
                'A pineapple is actually a berry',
                'Fruit is a botanical term, while vegetable is a culinary term. For example, botanically, a fruit is a seed-bearing structure that develops from the ovary of a flowering plant. Vegetables are other parts of the plant, such as roots, leaves, and stems. In culinary terms, however, many foods that are botanically fruits but are not typically sweet (such as eggplants, bell peppers, and tomatoes) are considered vegetables by chefs',
                'The Gympie-Gympie tree is the world’s most dangerous tree and the most painful of all stinging plant trees. Touching this tree is similar to being sprayed with hot acid, even driving those who have been affected to suicide. One man shot himself after he mistakenly used the leaf as toilet paper',
                'While the buttercup looks innocent, it is among the more deadly garden plants. If eaten, this innocent-looking flower can cause painful death resulting from organ and nervous system intoxication',
                'The largest flower in the world is the Rafflesia, or corpse flower. Its odor is similar to that of a decomposing mammal, which earns this giant flower its nickname. Found in the rainforests of Indonesia, it can grow to be 3 feet across and weigh up to 15 pounds',
                'There are over 20,000 species of edible plants in the world. However, just 20 species provide 90 percent of human food',
                'The daffodils name is from the Old English, affo dyle, or that which cometh early, because it is one of the earliest blooming flowers',
                'Japanese gardens are gardens that create miniature landscapes that are often idealized and highly abstract',
                'The Old English word geard means fence, and produced the words garden and yard',
                'While modern architects are primarily concerned about the relationship of buildings to money and the flow of cars, ancient architects were more concerned with the relationship of buildings to gardens and landscapes',
                'Many religions use gardens as symbols of paradise and immortality. Additionally, the association of gardens with perfection is found in Judaism, Christianity, and Islam',
                'The secret to a great garden is the soil, not necessarily the plant. Adding large amounts of organic materials, such as crushed leaves, grass clippings, or homemade compost will help feed and nourish a garden',
                'Some fruit trees need a pollinator, which is a similar tree that blooms at about the same time to produce a separate pollen source. Common trees that need other pollinators include apple, pear, and most sweet cherries',
                'The hardiness zone is the climatic region that best suits a particular plant. The coldest zone is 1 and the hottest is 11. If someone lives in zone 6 and tries to garden a plant rate only to zone 8, the plant will likely die',
                'The bumps on raspberries are called drupelets',
            ],
            SKILL_NAME: 'My Gardening Facts',
        },
    },
};

const handlers = {
    'LaunchRequest': function () {
        this.emit('GetFact');
    },
    'GetNewFactIntent': function () {
        this.emit('GetFact');
    },
    'GetFact': function () {
        // Get a random space fact from the space facts list
        // Use this.t() to get corresponding language data
        const factArr = this.t('FACTS');
        const factIndex = Math.floor(Math.random() * factArr.length);
        const randomFact = factArr[factIndex];

        // Create speech output
        const speechOutput = this.t('GET_FACT_MESSAGE') + randomFact;
        this.emit(':tellWithCard', speechOutput, this.t('SKILL_NAME'), randomFact);
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = this.t('HELP_MESSAGE');
        const reprompt = this.t('HELP_MESSAGE');
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
};

exports.handler = function (event, context) {
    const alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
