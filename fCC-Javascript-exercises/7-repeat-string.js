function repeatStringNumTimes(str, num) {
  let finalString = ""
  for (let i = 0; i < num; i++) {
    finalString+=str
  }
  return finalString;
}

repeatStringNumTimes("abc", 3);