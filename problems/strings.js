//!isAnagram
//Sort characters in string and compare to other string.
const areAnagram = (str1, str2) => str1.toLowerCase().split('').sort().join('') === str2.toLowerCase().split('').sort().join('');
//console.log(areAnagram("aabb", "ccbb"));


//!Longest substring without repeating characters
//Sliding window
