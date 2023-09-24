function findLongestWordLength(str) {
  let wordsList = str.split(" ");
  let longestWordLength = 0;

  for (const word of wordsList) {
    if (longestWordLength < word.length) {
      longestWordLength = word.length;
      console.log(longestWordLength)
    }
  } 
  return longestWordLength;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");