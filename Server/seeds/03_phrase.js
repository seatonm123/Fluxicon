
exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM "phrase"; ALTER SEQUENCE phrase_id_seq RESTART WITH 126')
    .then(function () {
      const phrases = [{
        id: 1,
        category: 'literary',
        content: 'I think therefore I am.',
        author: 'René Descartes',
        points: 5,
        difficulty: 1
      }, {
        id: 2,
        category: 'literary',
        content: "If you're going though Hell, keep going.",
        author: 'Winston Chruchill',
        points: 8,
        difficulty: 2
      }, {
        id: 3,
        category: 'literary',
        content: 'Accept loss forever',
        author: 'Jack Kerouac',
        points: 5,
        difficulty: 1
      }, {
        id: 4,
        category: 'literary',
        content: 'A man is not old unless his regrets take the place of his dreams.',
        author: 'John Barrymore',
        points: 15,
        difficulty: 5
      }, {
        id: 5,
        category: 'literary',
        content: 'True friends stab you in the front.',
        author: 'Oscar Wilde',
        points: 8,
        difficulty: 2
      }, {
        id: 6,
        category: 'literary',
        content: 'Be kind, for everyone you meet is fighting a hard battle.',
        author: 'Plato',
        points: 11,
        difficulty: 3
      }, {
        id: 7,
        category: 'literary',
        content: 'Fortune, seeing that she could not make fools wise, has made them lucky.',
        author: 'Michel de Montaigne',
        points: 13,
        difficulty: 4
      }, {
        id: 8,
        category: 'literary',
        content: 'Life is not a problem to be solved, but a reality to be experienced.',
        author: 'Søren Kierkegaard',
        points: 11,
        difficulty: 3
      }, {
        id: 9,
        category: 'literary',
        content: 'The longer you wait for the future, the shorter it will be',
        author: 'Anonymous',
        points: 5,
        difficulty: 3
      }, {
        id: 10,
        category: 'literary',
        content: 'Be where you are. Otherwise you will miss most of your life.',
        author: 'Gautama Buddha',
        points: 13,
        difficulty: 4
      }, {
        id: 11,
        category: 'literary',
        content: "If you can't explain it simply, you don't understand it well enough.",
        author: 'Albert Einstein',
        points: 13,
        difficulty: 4
      }, {
        id: 12,
        category: 'literary',
        content: 'Love all. Trust a few. Do wrong to none.',
        author: 'William Shakespeare',
        points: 8,
        difficulty: 2
      }, {
        id: 13,
        category: 'literary',
        content: 'Be as you wish to seem.',
        author: 'Socrates',
        points: 5,
        difficulty: 1
      }, {
        id: 14,
        category: 'literary',
        content: 'Sin writes histories. Goodness is silent.',
        author: 'Johann Wolfgang von Goethe',
        points: 8,
        difficulty: 2
      }, {
        id: 15,
        category: 'literary',
        content: 'Facts do not cease to exist because they are ignored.',
        author: 'Aldous Huxley',
        points: 11,
        difficulty: 3
      }, {
        id: 16,
        category: 'literary',
        content: 'In the end, we will remember not the words of our enemies, but the silence of our friends.',
        author: 'Martin Luther King Jr.',
        points: 15,
        difficulty: 5
      }, {
        id: 17,
        category: 'literary',
        content: "If you're losing your soul and you know it, then you've still got a soul left to lose.",
        author: 'Charles Bukowski',
        points: 15,
        difficulty: 5
      }, {
        id: 18,
        category: 'literary',
        content: 'Men are not punished for their sins, but by them.',
        author: 'Elbert Hubbard',
        points: 11,
        difficulty: 3
      }, {
        id: 19,
        category: 'literary',
        content: 'There is wishful thinking in Hell as well as on Earth.',
        author: 'C.S. Lewis',
        points: 13,
        difficulty: 4
      }, {
        id: 20,
        category: 'literary',
        content: 'Like all dreamers, I took disenchantment for truth.',
        author: 'Jean-Paul Sartre',
        points: 11,
        difficulty: 3
      }, {
        id: 21,
        category: 'literary',
        content: "If you want to tell people the truth, make them laugh. Otherwise they'll kill you.",
        author: 'Oscar Wilde',
        points: 13,
        difficulty: 4
      }, {
        id: 22,
        category: 'literary',
        content: 'Self-respect is the secure feeling that no one, as yet, is suspcious',
        author: 'H.L. Mencken',
        points: 15,
        difficulty: 5
      }, {
        id: 23,
        category: 'literary',
        content: 'Art is lies that tell the truth.',
        author: 'Pablo Picasso',
        points: 8,
        difficulty: 2
      }, {
        id: 24,
        category: 'literary',
        content: 'We are who we pretend to be, so we must be careful who we pretend to be.',
        author: 'Kurt Vonnegut Jr.',
        points: 13,
        difficulty: 4
      }, {
        id: 25,
        category: 'literary',
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
        content: "I got in one little fight and my mom got scared, and said You're moving with your auntie and your uncle in Bel Air",
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
        id: 22,
        category: 'music',
        content: 'You know I was the bluest man in this whole Chicago town.',
        author: 'Muddy Waters',
        points: 11,
        difficulty: 3
      }, {
        id: 23,
        category: 'music',
        content: "You can taste the bright lights but you can't get there for free",
        author: "Guns 'n' Roses",
        points: 11,
        difficulty: 3
      }, {
        id: 24,
        category: 'music',
        content: "Lucky I'm sane after all I've been through. I can't complain but sometimes I still do.",
        author: 'Joe Walsh',
        points: 15,
        difficulty: 5
      }, {
        id: 25,
        category: 'music',
        content: "Your pain and your hunger, they're driving you home.",
        author: 'The Eagles',
        points: 11,
        difficulty: 3
      }];
      return knex('phrase').insert(phrases);
    });
};
