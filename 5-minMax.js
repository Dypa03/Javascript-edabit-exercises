function minMax(arr) {
	return [Math.min(...arr), Math.max(...arr)]
}

const myArray = [2, 5, 9, 54, 7, 2]
console.log(minMax(myArray))

/* 
To use Math.min({arg}) or Math.max({arg}) we need to put ... before the argument 
cause it replaces the .apply(Math, {arg}).
ex. Math.min(...myArray) instead of Math.min.apply(Math, myArray)
*/