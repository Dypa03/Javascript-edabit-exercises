function bouncer(arr) {
  let falsyValues = [false, null, 0, "", undefined, NaN]
  let finalArray = []
  for (const element of arr) {
    if (falsyValues.includes(element) == false) {
      finalArray.push(element)
    }
  }
  console.log(finalArray)
  return finalArray;
}

bouncer([7, "ate", "", false, 9]);