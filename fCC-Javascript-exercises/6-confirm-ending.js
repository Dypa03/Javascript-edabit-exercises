function confirmEnding(str, target) {
  let startingIndex = str.length - target.length;
  console.log(startingIndex)
  let substrat = str.slice(startingIndex, startingIndex+target.length)
  console.log(substrat)
  
  if (substrat == target) {
    return true
  } else {
    return false
  }
}

confirmEnding("Bastian", "n");