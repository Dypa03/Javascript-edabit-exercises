function frankenSplice(arr1, arr2, n) {
  let finalList = arr2.slice(0,n)
  for (const element of arr1) {
    finalList.push(element)
  }
  for (const element of arr2.slice(n)) {
    finalList.push(element)
  }
  // console.log(finalList)
  return finalList;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);