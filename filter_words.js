/* Function to filter four-letter words in an array. */

const filter = words => {
  const filtered = [];
  for (let i = 0, { length } = words; i < length; i++) {
    const word = words[i];
    if (word.length !== 4) filtered.push(word);
  }
  return filtered;
};

filter(['duck', 'free', 'dues', 'mud']);
