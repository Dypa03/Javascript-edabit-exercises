function countTrue(arr) {
    function equalsTrue(element) {
        if (element === true) {
            return true
        }
    }
    let trueArray = arr.filter(equalsTrue)
    console.log(trueArray)
    let countTrue = trueArray.length
    return countTrue
}

const myArray = [true, false, true, true, "Roberto", false]
console.log(countTrue(myArray))

/*
So for this exercise to see how many true elements were in myArray we used the function filter 
instead of using a for cycle that apparently is too slow

the {myArray}.filter(fun) let us create an Array by applying a function(which is the argument we pass)
to all the elements of the {myArray}
*/


/* 
Now I'm just gonna copy some other solutions.
------------------------------------------------
const countTrue = r => r.filter(Boolean).length
------------------------------------------------
function countTrue(arr) {
	 return arr.filter(x=>x==true).length
}
-------------------------------------------------

Now there this => that should be an arrow function expressions but I have no idea on how they works.
Never saw anything like this in Python so I'm kinda confused.
*/

