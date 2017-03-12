
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
        author: '',
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
      }];
      return knex('phrase').insert(phrases);
    });
};
