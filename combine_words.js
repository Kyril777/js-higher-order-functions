/* Use reduce function to form a sentence */
const myWords = [ 'A', 'sentence', 'is', 'formed'];

const sentence = myWords.reduce( (prev, curr) => {
 return prev + ' ' + curr;
});

console.log(sentence);
