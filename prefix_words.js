/* Prefix words with underscore for each word. */

const  underscoreBeforeTool = (entry) => {
  return `_${entry}`
}

const entry = ['hammer', 'hacksaw', 'level', 'screwdriver', 'chisel']

const prefixedWords = words.map(underscoreBeforeWord)
