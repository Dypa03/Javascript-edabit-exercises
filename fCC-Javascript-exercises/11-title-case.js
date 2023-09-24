function titleCase(str) {
  const words = str.toLowerCase().split(" ");
  const titleCasedWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  return titleCasedWords.join(" ");

  /*
  let finalString = ""
  for (const word of str.split(" ")) {
    finalString += word.slice(0,1).toUpperCase() + word.slice(1,word.length).toLowerCase() + " "
  }
  // console.log(finalString)
  return finalString;

  The outputs are correct but it doens't accept so idk
  */
}

titleCase("I'm a little tea pot");