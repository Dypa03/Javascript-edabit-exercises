function mutation(arr) {
  let result = true
  let listLetters = arr[0].toLowerCase().split("")
  for (const letter of arr[1].toLowerCase()) {
    console.log(letter)
    if (listLetters.includes(letter) == false) {
      result = false
      break
    }
  }
  console.log(result)
  return result;
}

mutation(["hello", "hey"]);
mutation(["hello", "Hello"]);