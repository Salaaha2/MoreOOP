//3. Nest one Array within Another Array
const myArray = [["One", 1, ["Two", 2]]];



//4. Create a function that takes a multi-dimensional array as an argument and console.logs every value in that two dimensional array using for-loop inside a for-loop.
function multiplyAll(arr) {
    let product = 1;
    //Only change code below this line
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[i].length; j++) {
            console.log(product *= arr[i][j]);
        }
    }
    //Only change code above this line
    return product
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);




//5. Create an array that is three-dimension. Each index of the array should contain an array. Each of those arrays should also have arrays inside them. Finally, the second level of arrays, should contain numbers or strings as their values.
//example var myArray = [ [ [1,2] , [3 , 4 ] , [ [5 , 6] , [ 7 ,8] ] , [ 9,10 ] ] ]

var threeArray = [[1, 2], [3, 4], [[5, 6], [7, 8]], [9, 10]]


// 6. Create a function that receives two numbers as arguments. The function should return whichever argument is the largest.
// Finally, console.log the function passing in two numbers as arguments.

function maxNum(n1, n2) {
    let result = 0
    if(n1 > n2) {
        result = n1
    } else {
        result = n2
    }
    return result
}

console.log(maxNum(30, 50))


// 7. Create a function that receives two values as arguments. The function should return one string if the two values are equal, and a different string if the two values are different. You may either test for equality in value or for equality in value /and/ type.

// Finaly console.log the function with two equal arguments, and then console.log the function with two arguments that are not equal.

// Same string 
function sameString(s1, s2) {
    if(s1 === s2) {
        return 'But... This is the exact same string'
    }
    else {
        return 'Not the same String! What is this?!?'
    }
}

console.log(sameString("hello", "hello"))
console.log(sameString("ice", "cool"))