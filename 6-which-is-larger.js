function whichIsLarger(f, g) {
    let x = f();
    let y = g();
    if (x > y) {
        return "f"
    } else if (x < y) {
        return "g"
    } else {
        return "neither"
    }
}

function f() {
    return 3
}

function g() {
    return 2
}

console.log(whichIsLarger(f(),g()))

/*
Best solution:

function whichIsLarger(f, g) {
	return f()>g()?'f':g()>f()?'g':'neither'
} 

I guess that the ? symbol makes as a return and the : symbol just divide the conditions
*/