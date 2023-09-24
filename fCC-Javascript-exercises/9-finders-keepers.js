function findElement(arr, func) {
  let num = undefined
  for (const x of arr) {
    if (func(x) === true) {
      num = x
      break
    }
  }
  console.log(num)
  return num;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);