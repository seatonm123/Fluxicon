
exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM "phrase"; ALTER SEQUENCE phrase_id_seq RESTART WITH 126')
    .then(function () {
      const phrases = [{
        id: 1,
        category: 'quotes',
        content: 'I think therefore I am.',
        author: 'René Descartes',
        points: 5,
        difficulty: 1
      }, {
        id: 2,
        category: 'quotes',
        content: "If you're going though Hell, keep going.",
        author: 'Winston Chruchill',
        points: 8,
        difficulty: 2
      }, {
        id: 3,
        category: 'quotes',
        content: 'Accept loss forever',
        author: 'Jack Kerouac',
        points: 5,
        difficulty: 1
      }, {
        id: 4,
        category: 'quotes',
        content: 'A man is not old unless his regrets take the place of his dreams.',
        author: 'John Barrymore',
        points: 15,
        difficulty: 5
      }, {
        id: 5,
        category: 'quotes',
        content: 'True friends stab you in the front.',
        author: 'Oscar Wilde',
        points: 8,
        difficulty: 2
      }, {
        id: 6,
        category: 'quotes',
        content: 'Be kind, for everyone you meet is fighting a hard battle.',
        author: 'Plato',
        points: 11,
        difficulty: 3
      }, {
        id: 7,
        category: 'quotes',
        content: 'Fortune, seeing that she could not make fools wise, has made them lucky.',
        author: 'Michel de Montaigne',
        points: 13,
        difficulty: 4
      }, {
        id: 8,
        category: 'quotes',
        content: 'Life is not a problem to be solved, but a reality to be experienced.',
        author: 'Søren Kierkegaard',
        points: 11,
        difficulty: 3
      }, {
        id: 9,
        category: 'quotes',
        content: 'The longer you wait for the future, the shorter it will be',
        author: 'Anonymous',
        points: 5,
        difficulty: 3
      }, {
        id: 10,
        category: 'quotes',
        content: 'Be where you are. Otherwise you will miss most of your life.',
        author: 'Gautama Buddha',
        points: 13,
        difficulty: 4
      }, {
        id: 11,
        category: 'quotes',
        content: "If you can't explain it simply, you don't understand it well enough.",
        author: 'Albert Einstein',
        points: 13,
        difficulty: 4
      }, {
        id: 12,
        category: 'quotes',
        content: 'Love all. Trust a few. Do wrong to none.',
        author: 'William Shakespeare',
        points: 8,
        difficulty: 2
      }, {
        id: 13,
        category: 'quotes',
        content: 'Be as you wish to seem.',
        author: 'Socrates',
        points: 5,
        difficulty: 1
      }, {
        id: 14,
        category: 'quotes',
        content: 'Sin writes histories. Goodness is silent.',
        author: 'Johann Wolfgang von Goethe',
        points: 8,
        difficulty: 2
      }, {
        id: 15,
        category: 'quotes',
        content: 'Facts do not cease to exist because they are ignored.',
        author: 'Aldous Huxley',
        points: 11,
        difficulty: 3
      }, {
        id: 16,
        category: 'quotes',
        content: 'In the end, we will remember not the words of our enemies, but the silence of our friends.',
        author: 'Martin Luther King Jr.',
        points: 15,
        difficulty: 5
      }, {
        id: 17,
        category: 'quotes',
        content: "If you're losing your soul and you know it, then you've still got a soul left to lose.",
        author: 'Charles Bukowski',
        points: 15,
        difficulty: 5
      }, {
        id: 18,
        category: 'quotes',
        content: 'Men are not punished for their sins, but by them.',
        author: 'Elbert Hubbard',
        points: 11,
        difficulty: 3
      }, {
        id: 19,
        category: 'quotes',
        content: 'There is wishful thinking in Hell as well as on Earth.',
        author: 'C.S. Lewis',
        points: 13,
        difficulty: 4
      }, {
        id: 20,
        category: 'quotes',
        content: 'Like all dreamers, I took disenchantment for truth.',
        author: 'Jean-Paul Sartre',
        points: 11,
        difficulty: 3
      }, {
        id: 21,
        category: 'quotes',
        content: "If you want to tell people the truth, make them laugh. Otherwise they'll kill you.",
        author: 'Oscar Wilde',
        points: 13,
        difficulty: 4
      }, {
        id: 22,
        category: 'quotes',
        content: 'Self-respect is the secure feeling that no one, as yet, is suspcious',
        author: 'H.L. Mencken',
        points: 15,
        difficulty: 5
      }, {
        id: 23,
        category: 'quotes',
        content: 'Art is lies that tell the truth.',
        author: 'Pablo Picasso',
        points: 8,
        difficulty: 2
      }, {
        id: 24,
        category: 'quotes',
        content: 'We are who we pretend to be, so we must be careful who we pretend to be.',
        author: 'Kurt Vonnegut Jr.',
        points: 13,
        difficulty: 4
      }, {
        id: 25,
        category: 'quotes',
        content: 'We are faced with a series of great opportunities brilliantly disguised as impossible situations.',
        author: 'Chuck Swindoll',
        points: 15,
        difficulty: 5
      }, {
        id: 26,
        category: 'music',
        content: 'Time is on my side.',
        author: 'The Rolling Stones',
        points: 5,
        difficulty: 1
      }, {
        id: 27,
        category: 'music',
        content: "Love is all you need.",
        author: 'The Beatles',
        points: 5,
        difficulty: 1
      }, {
        id: 28,
        category: 'music',
        content: "No one knows what it's like to be the bad man, the sad man.",
        author: 'The Who',
        points: 13,
        difficulty: 4
      }, {
        id: 29,
        category: 'music',
        content: "Many times I've loved, many times been bitten. Many times I've gazed along the open road.",
        author: 'Led Zeppelin',
        points: 15,
        difficulty: 5
      }, {
        id: 30,
        category: 'music',
        content: "I'm gonna buy this town, and put it in my shoe",
        author: 'The Jimi Hendrix Experience',
        points: 11,
        difficulty: 3
      }, {
        id: 31,
        category: 'music',
        content: 'Be a simple kind of man, and be something you love and understand',
        author: 'Lynyrd Skynyrd',
        points: 13,
        difficulty: 4
      }, {
        id: 32,
        category: 'music',
        content: "It ain't me, it ain't me, I ain't no millionaire's son, no",
        author: 'Creedence Clearwater Revival',
        points: 13,
        difficulty: 4
      }, {
        id: 33,
        category: 'music',
        content: "I'll be with you when the stars start falling.",
        author: 'Cream',
        points: 8,
        difficulty: 2
      }, {
        id: 34,
        category: 'music',
        content: "What a long, strange trip it's been.",
        author: 'The Grateful Dead',
        points: 8,
        difficulty: 2
      }, {
        id: 35,
        category: 'music',
        content: "Don't try to push your luck, just get out of my way",
        author: 'AC/DC',
        points: 11,
        difficulty: 3
      }, {
        id: 36,
        category: 'music',
        content: "When I come back, boy, I'm coming straight out of Compton.",
        author: 'NWA',
        points: 13,
        difficulty: 4
      }, {
        id: 37,
        category: 'music',
        content: 'Roll to the rock, rock to the roll. DMC stands for devastating microphone control',
        author: 'Run DMC',
        points: 15,
        difficulty: 5
      }, {
        id: 38,
        category: 'music',
        content: "I got in one little fight and my mom got scared, and said You're moving with your aunt and your uncle in Bel Air",
        author: 'Will Smith',
        points: 15,
        difficulty: 5
      }, {
        id: 39,
        category: 'music',
        content: "I'm happy, I'm feeling glad. I've got sunshine in a bag.",
        author: 'Gorillaz',
        points: 11,
        difficulty: 3
      }, {
        id: 40,
        category: 'music',
        content: 'Experience the warmth before you grow old.',
        author: 'Incubus',
        points: 8,
        difficulty: 2
      }, {
        id: 41,
        category: 'music',
        content: "He's racing and pacing, and plotting the course. He's fighting and biting and riding on his horse.",
        author: 'Cake',
        points: 13,
        difficulty: 4
      }, {
        id: 42,
        category: 'music',
        content: "Breaking rocks in the hot sun, I fought the law and the law won.",
        author: 'The Clash',
        points: 11,
        difficulty: 3
      }, {
        id: 43,
        category: 'music',
        content: "I could be so happy, if I'd just stop being sad.",
        author: 'Heartless Bastards',
        points: 11,
        difficulty: 3
      }, {
        id: 44,
        category: 'music',
        content: "I've been searching for this thing called moderation that I heard some have found. The only problem with drugs is sometime you have to come down.",
        author: 'Macklemore',
        points: 15,
        difficulty: 5
      }, {
        id: 45,
        category: 'music',
        content: 'The only guarantee in life is a life worth dying for.',
        author: 'Atmosphere',
        points: 8,
        difficulty: 2
      }, {
        id: 46,
        category: 'music',
        content: "I say to myself, 'What a wonderful world.'",
        author: 'Louis Armstrong',
        points: 8,
        difficulty: 2
      }, {
        id: 47,
        category: 'music',
        content: 'You know I was the bluest man in this whole Chicago town.',
        author: 'Muddy Waters',
        points: 11,
        difficulty: 3
      }, {
        id: 48,
        category: 'music',
        content: "You can taste the bright lights but you can't get there for free",
        author: "Guns 'n' Roses",
        points: 11,
        difficulty: 3
      }, {
        id: 49,
        category: 'music',
        content: "Lucky I'm sane after all I've been through. I can't complain but sometimes I still do.",
        author: 'Joe Walsh',
        points: 15,
        difficulty: 5
      }, {
        id: 50,
        category: 'music',
        content: "Your pain and your hunger, they're driving you home.",
        author: 'The Eagles',
        points: 11,
        difficulty: 3
      }, {
        id: 51,
        category: 'film',
        content: 'The bees! Oh no, not the bees!',
        author: 'The Wicker Man (2006)',
        points: 8,
        difficulty: 2
      }, {
        id: 52,
        category: 'film',
        content: "Get yourself guns and wipe them off the face of the earth.",
        author: 'The Birds (1963)',
        points: 13,
        difficulty: 4
      }, {
        id: 53,
        category: 'film',
        content: 'Every man dies. Not every man really lives.',
        author: 'Braveheart (1995)',
        points: 8,
        difficulty: 2
      }, {
        id: 54,
        category: 'film',
        content: "I am going to count to three. There will be no four.",
        author: 'Die Hard (1988)',
        points: 11,
        difficulty: 3
      }, {
        id: 55,
        category: 'film',
        content: "Aren't you a little short for a storm trooper?",
        author: 'Star Wars: A New Hope (1977)',
        points: 8,
        difficulty: 2
      }, {
        id: 56,
        category: 'film',
        content: "You're a good man, sister.",
        author: 'The Maltese Falcon (1941)',
        points: 5,
        difficulty: 1
      }, {
        id: 57,
        category: 'film',
        content: "You gotta ask yourself one question: 'Do I feel lucky?' Well, do you, punk?",
        author: 'Dirty Harry (1971)',
        points: 13,
        difficulty: 4
      }, {
        id: 58,
        category: 'film',
        content: "I've got some bad ideas in my head.",
        author: 'Taxi Driver (1976)',
        points: 8,
        difficulty: 2
      }, {
        id: 59,
        category: 'film',
        content: "Goodness is something to be chosen.",
        author: 'A Clockwork Orange (1971)',
        points: 5,
        difficulty: 1
      }, {
        id: 60,
        category: 'film',
        content: "I'm like a bad penny: I always turn up.",
        author: 'Indiana Jones and the Last Crusade (1989)',
        points: 8,
        difficulty: 2
      }, {
        id: 61,
        category: 'film',
        content: "You almost knocked over your alcohol with your knife.",
        author: 'Zombieland (2009)',
        points: 13,
        difficulty: 4
      }, {
        id: 62,
        category: 'film',
        content: 'Why is everyone here eating chocolate cake?',
        author: 'Hot Fuzz (2009)',
        points: 11,
        difficulty: 3
      }, {
        id: 63,
        category: 'film',
        content: 'Mom! The meat loaf!',
        author: 'Wedding Crashers (2005)',
        points: 5,
        difficulty: 1
      }, {
        id: 64,
        category: 'film',
        content: 'One of us had to die. With me, it tends to be the other guy.',
        author: 'The Departed (2006)',
        points: 11,
        difficulty: 3
      }, {
        id: 65,
        category: 'film',
        content: "It doesn't mean that we too can't not die in a freak gasoline fight accident.",
        author: 'Zoolander (2001)',
        points: 15,
        difficulty: 5
      }, {
        id: 66,
        category: 'film',
        content: "Two hundred thousand dollars is a lot of money. We're going to have to earn it",
        author: 'The Good, the Bad, and the Ugly (1966)',
        points: 15,
        difficulty: 5
      }, {
        id: 67,
        category: 'film',
        content: "If they see a free individual, it's going to scare them.",
        author: 'Easy Rider (1969)',
        points: 13,
        difficulty: 4
      }, {
        id: 68,
        category: 'film',
        content: "Even the smallest seed of an idea can grow. It can grow to define or destroy you.",
        author: 'Inception (2010)',
        points: 15,
        difficulty: 5
      }, {
        id: 69,
        category: 'film',
        content: 'Ugly things and surprising things and sometimes little wondrous things spill out at me constantly, and I can count on nothing.',
        author: 'A Scanner Darkly (2006)',
        points: 15,
        difficulty: 5
      }, {
        id: 70,
        category: 'film',
        content: 'You shall not pass!',
        author: 'The Lord of the Rings: Fellowship of the Ring (2001)',
        points: 5,
        difficulty: 1
      }, {
        id: 71,
        category: 'film',
        content: "God creates dinosaurs. God destroys dinosaurs. Got creats man. Man destroys God. Man creates dinosaurs.",
        author: 'Jurassic Park (1993)',
        points: 15,
        difficulty: 5
      }, {
        id: 72,
        category: 'film',
        content: "It's not who you are underneath. It's what you do that defines you.",
        author: 'Batman Begins (2005)',
        points: 13,
        difficulty: 4
      }, {
        id: 73,
        category: 'film',
        content: "Don't judge me, Monkey.",
        author: "Grandma's Boy (2006)",
        points: 5,
        difficulty: 1
      }, {
        id: 74,
        category: 'film',
        content: 'Do you see me eating mice?',
        author: 'Super Troopers (2001)',
        points: 8,
        difficulty: 2
      }, {
        id: 75,
        category: 'film',
        content: 'I just know that every man I kill the further away from home I feel.',
        author: 'Saving Private Ryan (1998)',
        points: 13,
        difficulty: 4
      }, {
        id: 76,
        category: 'jokes',
        content: 'Next time I send a damned fool, I go myself.',
        author: 'Louis Cukela',
        points: 11,
        difficulty: 3
      }, {
        id: 77,
        category: 'jokes',
        content: "The four most beautiful words in our language: I told you so.",
        author: 'Gore Vidal',
        points: 13,
        difficulty: 4
      }, {
        id: 78,
        category: 'jokes',
        content: "My girlfriend and I often laugh about how competitive we are. But I laugh more",
        author: null,
        points: 13,
        difficulty: 4
      }, {
        id: 79,
        category: 'jokes',
        content: "Geology is as hard as a rock",
        author: null,
        points: 8,
        difficulty: 2
      }, {
        id: 80,
        category: 'jokes',
        content: "I've never shot a gun because that would be a strange target.",
        author: null,
        points: 11,
        difficulty: 3
      }, {
        id: 81,
        category: 'jokes',
        content: 'A severed foot is the ultimate stocking stuffer.',
        author: 'Mitch Hedberg',
        points: 11,
        difficulty: 3
      }, {
        id: 82,
        category: 'jokes',
        content: "I love talking about the future as much as the next guy.",
        author: null,
        points: 11,
        difficulty: 3
      }, {
        id: 83,
        category: 'jokes',
        content: "Integers are pointless.",
        author: null,
        points: 5,
        difficulty: 1
      }, {
        id: 84,
        category: 'jokes',
        content: "Every day is leg day when you're running from your problems.",
        author: null,
        points: 11,
        difficulty: 3
      }, {
        id: 85,
        category: 'jokes',
        content: "If I had a dollar for every girl that found me unattractive, they would eventually find me attractive.",
        author: null,
        points: 15,
        difficulty: 5
      }, {
        id: 86,
        category: 'jokes',
        content: "I used to think I was indecisive, but now I'm not too sure.",
        author: null,
        points: 11,
        difficulty: 3
      }, {
        id: 87,
        category: 'jokes',
        content: "Take my advice. I'm not using it.",
        author: null,
        points: 8,
        difficulty: 2
      }, {
        id: 88,
        category: 'jokes',
        content: "Money talks, but all mine ever says is, 'Goodbye.'",
        author: null,
        points: 11,
        difficulty: 3
      }, {
        id: 89,
        category: 'jokes',
        content: "Artificial intelligence is no match for natural stupidity.",
        author: null,
        points: 11,
        difficulty: 3
      }, {
        id: 90,
        category: 'jokes',
        content: 'The early bird gets the worm, but the second mouse gets the cheese.',
        author: null,
        points: 13,
        difficulty: 4
      }, {
        id: 91,
        category: 'jokes',
        content: "I hate Russian dolls. They are so full of themselves.",
        author: null,
        points: 13,
        difficulty: 4
      }, {
        id: 92,
        category: 'jokes',
        content: "Say what you want about deaf people...",
        author: null,
        points: 8,
        difficulty: 2
      }, {
        id: 93,
        category: 'jokes',
        content: "Where there's a will, there's a relative.",
        author: 'null',
        points: 11,
        difficulty: 3
      }, {
        id: 94,
        category: 'jokes',
        content: "If I agreed with you we would both be wrong.",
        author: null,
        points: 11,
        difficulty: 3
      }, {
        id: 95,
        category: 'jokes',
        content: 'War does not determine who is right, only who is left.',
        author: null,
        points: 4,
        difficulty: 13
      }, {
        id: 96,
        category: 'jokes',
        content: "A clear conscience is usually the sign of a bad memory.",
        author: null,
        points: 13,
        difficulty: 4
      }, {
        id: 97,
        category: 'jokes',
        content: "I didn't say it was your fault. I said I was blaming you.",
        author: null,
        points: 13,
        difficulty: 4
      }, {
        id: 98,
        category: 'jokes',
        content: "Nostalgia is not what it used to be.",
        author: null,
        points: 8,
        difficulty: 2
      }, {
        id: 99,
        category: 'jokes',
        content: "If at first you do not succeed, skydiving is not for you.",
        author: null,
        points: 11,
        difficulty: 3
      }, {
        id: 100,
        category: 'jokes',
        content: "Does this rag smell like chloroform to you?",
        author: null,
        points: 8,
        difficulty: 2
      }, {
        id: 101,
        category: 'facts',
        content: 'The first pizza delivery was in 1889.',
        author: null,
        points: 8,
        difficulty: 2
      }, {
        id: 102,
        category: 'facts',
        content: "Ten percent of a cat's bones are in its tail.",
        author: null,
        points: 11,
        difficulty: 3
      }, {
        id: 103,
        category: 'facts',
        content: 'The word "astronaut" is derived from the Greek for "Star Sailor".',
        author: null,
        points: 5,
        difficulty: 1
      }, {
        id: 104,
        category: 'facts',
        content: 'Crocodiles can hold their breath for over two hours.',
        author: null,
        points: 11,
        difficulty: 3
      }, {
        id: 105,
        category: 'facts',
        content: 'In the time of the dinosaurs, days were only twenty-three hours long.',
        author: null,
        points: 8,
        difficulty: 2
      }, {
        id: 106,
        category: 'facts',
        content: 'Corn is grown on every continent except Antarctica.',
        author: null,
        points: 8,
        difficulty: 2
      }, {
        id: 107,
        category: 'facts',
        content: 'Apes will laugh when tickled.',
        author: null,
        points: 5,
        difficulty: 1
      }, {
        id: 108,
        category: 'facts',
        content: 'Human hair contains gold.',
        author: null,
        points: 5,
        difficulty: 1
      }, {
        id: 109,
        category: 'facts',
        content: 'Opal has been discovered on Mars.',
        author: null,
        points: 8,
        difficulty: 2
      }, {
        id: 110,
        category: 'facts',
        content: 'George Washington enjoyed exploring caves.',
        author: null,
        points: 11,
        difficulty: 3
      }, {
        id: 111,
        category: 'facts',
        content: "Top quality emeralds are more valuable than diamonds.",
        author: null,
        points: 11,
        difficulty: 3
      }, {
        id: 112,
        category: 'facts',
        content: 'Liam Neeson was a youth boxing champion.',
        author: null,
        points: 11,
        difficulty: 3
      }, {
        id: 113,
        category: 'facts',
        content: 'When hippos are angry, their sweat turns red.',
        author: null,
        points: 8,
        difficulty: 2
      }, {
        id: 114,
        category: 'facts',
        content: 'A cloud can weigh over one million pounds.',
        author: null,
        points: 11,
        difficulty: 3
      }, {
        id: 115,
        category: 'facts',
        content: 'A broken clock is right two times a day.',
        author: null,
        points: 11,
        difficulty: 3
      }, {
        id: 116,
        category: 'facts',
        content: "Bob Marley's last words were, 'Money can't buy life.",
        author: null,
        points: 13,
        difficulty: 4
      }, {
        id: 117,
        category: 'facts',
        content: "Pigs are unable to look up.",
        author: null,
        points: 5,
        difficulty: 1
      }, {
        id: 118,
        category: 'facts',
        content: 'Volcanic eruptions can cause lightning storms.',
        author: null,
        points: 11,
        difficulty: 3
      }, {
        id: 119,
        category: 'facts',
        content: 'Cocunut water can be used as blood plasma.',
        author: null,
        points: 11,
        difficulty: 3
      }, {
        id: 120,
        category: 'facts',
        content: "Donald Duck was banned in Finland because he doesn't wear pants.",
        author: 'Donald Trump is banned in Finland because he is clearly a sentient orange.',
        points: 13,
        difficulty: 4
      }, {
        id: 121,
        category: 'facts',
        content: "A human thigh bone is stronger than concrete.",
        author: null,
        points: 8,
        difficulty: 2
      }, {
        id: 122,
        category: 'facts',
        content: 'Elephants can not jump.',
        author: null,
        points: 5,
        difficulty: 1
      }, {
        id: 123,
        category: 'facts',
        content: 'The cigarette lighter was invented before the match.',
        author: null,
        points: 11,
        difficulty: 3
      }, {
        id: 124,
        category: 'facts',
        content: 'A tarantula can live for more than two years without food.',
        author: null,
        points: 13,
        difficulty: 4
      }, {
        id: 125,
        category: 'facts',
        content: 'The planet Saturn would float in water.',
        author: null,
        points: 8,
        difficulty: 2
      }, {
        id: 126,
        category: 'quotes',
        content: 'These violent delights have violent ends.',
        author: 'WestWorld',
        points: 11,
        difficulty: 3
      }];
      return knex('phrase').insert(phrases);
    });
};
