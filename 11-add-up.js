function addUp(num) {
    let sum = 0
	for (let i = 1; i < num+1; i++) {
        sum += i
    }
    return sum
}

console.log(addUp(600))