/**
 * ES6 Cheat Sheet
 */

/*
 * Array methods
 */
const word = "01234";
let arr = word.split("");

arr.pop(); // removes last element 
arr.push(6); // adds element to end of array - 
arr.shift(); // removes first element
arr.unshift(0); // adds element to beginning of array
arr.slice(2, 4); // returns a new array with elements from index 2 to 4
arr.splice(2, 2); // removes elements from index 2 to 3
arr.reverse(); // reverses array

arr.sort(); // sorts array
arr.sort((a, b) => a - b); // sorts array in ascending order
arr.sort((a, b) => b - a); // sorts array in descending order




/*
 * Iterators
 */
//1. forEach
arr.forEach((element) =>{
    console.log(element);
})

//2. map
arr.map((element) =>{
    return element + 1;
});


//3. filter - returns a new array with elements that pass the test
arr.filter((element) =>{
    return element > 2;
});

//4. reduce - takes two arguments - accumulator and current value
arr.reduce((acc, element) =>{
    return acc + element;
});


//5. every - returns true if all elements in array pass the test
arr.every((element) =>{
    return element > 2;
});

//6. some -- returns true if at least one element in array passes the test
arr.some((element) =>{
    return element > 2;
}); 


//7. find -- returns the first element that passes the test
arr.find((element) =>{
    return element > 2;
});


//8. findIndex -- returns the index of the first element that passes the test
arr.findIndex((element) =>{
    return element > 2;
});
