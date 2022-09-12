/* Use reduce function to form a sentence */
const myWords = [ 'These', 'all', 'form', 'a', 'sentence' ];

const sentence = myWords.reduce( (prev, curr) => {
 return prev + ' ' + curr;
});

console.log(sentence);
