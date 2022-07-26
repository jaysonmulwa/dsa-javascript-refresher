/**
 * JS/ES6 Cheat Sheet
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


/**
 * String methods
 */

//1. charAt -- returns the character at the specified index
word.charAt(2);

//2. charCodeAt -- returns the unicode value of the character at the specified index
word.charCodeAt(2);


//3. concat -- returns a new string with the current string concatenated with the given string
word.concat("hello");

//4. indexOf -- returns the index of the first occurrence of the given substring //!important
word.indexOf("2");

//5. lastIndexOf -- returns the index of the last occurrence of the given substring
word.lastIndexOf("2");

//6.To lowercase -- returns a new string with all characters converted to lowercase
word.toLowerCase();

//7.To uppercase -- returns a new string with all characters converted to uppercase
word.toUpperCase();

//8.To integer -- returns the string as an integer
word.toInt();


/**
 * Number methods
 */

//1. toString -- returns a string representation of the number
Number.toString();

//2. toFixed -- returns a string representation of the number with the specified number of decimals
Number.toFixed(2);

/**
 * Math methods
 */

//1. random -- returns a random number between 0 and 1
Math.random();

//2. floor -- returns the largest integer less than or equal to a number
Math.floor(2.9);

//3. ceil -- returns the smallest integer greater than or equal to a number
Math.ceil(2.1);

//4. round -- returns the nearest integer to a number
Math.round(2.4);

//5. abs -- returns the absolute value of a number
Math.abs(-2);

//6. pow -- returns the value of a number to the power of another number
Math.pow(2, 3);

//7. Min -- returns the smallest number in the array
Math.min([1, 2, 3]);

//8. Max -- returns the largest number in the array
Math.max([1, 2, 3]);
