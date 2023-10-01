//my solution

function squareDigits(num){
    const numString = num.toString();
    let resultString = "";

    for (let digit of numString) {
        let squareDigit = (parseInt(digit))**2;
        resultString += squareDigit
    }
    return parseInt(resultString);
}

//best solution
function squareDigits(num){
    return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));    
}
  
