function canNest(arr1, arr2) {
	if (Math.min(...arr1) > Math.min(...arr2) && 
        Math.max(...arr1) < Math.max(...arr2)) {
            return true
    } else {
        return false
    }
}

let myArray1 = [3,5,7,9]
let myArray2 = [2,4,6,8,10]
console.log(canNest(myArray1, myArray2))