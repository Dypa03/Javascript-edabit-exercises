function largestSwap(num) {
	/*if (num.toString().length > 2) {
        return "Error, enter only 2 digits numbers"
    }
    we can use num > 99 that's easier but I wanted to try another way
    */

    let firstDigit = parseInt(num.toString()[0])
    let secondDigit = parseInt(num.toString()[1])
    if (firstDigit >= secondDigit) {
        return true
    } else {
        return false
    }
}

console.log(largestSwap(43))

/* 
best solution: 

function largestSwap(num) {
	return num / 10 > num % 10
}
--------------------------------

another interesting one:

function largestSwap(num) {
	return num.toString().charAt(0) >= num.toString().charAt(1);
}

*/