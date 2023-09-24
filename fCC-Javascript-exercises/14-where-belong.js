function getIndexToIns(arr, num) {
  let testArray = [...arr];
  testArray.push(num)
  testArray.sort((a, b) => a - b)
  // console.log(testArray)
  let index = testArray.indexOf(num)
  // console.log(index)
  return index;
}

getIndexToIns([3, 10, 5], 3);
getIndexToIns([2, 5, 10], 15);