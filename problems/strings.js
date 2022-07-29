//!isAnagram
//Sort characters in string and compare to other string.
const areAnagram = (str1, str2) => str1.toLowerCase().split('').sort().join('') === str2.toLowerCase().split('').sort().join('');
//console.log(areAnagram("aabb", "ccbb"));


//!Longest substring without repeating characters
//Sliding window
const longestSubstring = (word) => {
    let i = 0;
    let j = 0;
    let max = 0;
    let arr = word.split(""); 
    let map = new Map();
    while (j < arr.length) {
        if (!map.has(arr[j])){
            map.set(arr[j], 1);
            j++;
            max = Math.max(map.size, max);
        } else {
            map.delete(arr[i]);
            i++;
        }
    }
    return max;
}

console.log(longestSubstring("abba"));
