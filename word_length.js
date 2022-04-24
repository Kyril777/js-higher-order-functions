/* Use the filter method to extract words that are of a specific length. */ 

const words = ["cleaner", "torn", "tag" ,"chess", "very", "rank", "tool", "under"];

const fourLetterWords = words.filter(function(word) {
  if(word.length == 4) {
    return true;
  }
});
console.log(fourLetterWords);
