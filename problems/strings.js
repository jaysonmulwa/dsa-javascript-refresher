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

//!Longest palindromic substring
//Expand arround center
// Time: O(n^2)
// Space: O(1)
const longestPalindrome = (s) =>{
    if (s == null || s.length() < 1) return "";
    let start = 0, end = 0;
    for (let i = 0; i < s.length(); i++) {
        let  len1 = expandAroundCenter(s, i, i);
        let len2 = expandAroundCenter(s, i, i + 1);
        let len = Math.max(len1, len2);
        if (len > end - start) {
            start = i - (len - 1) / 2;
            end = i + len / 2;
        }
    }
    return s.substring(start, end + 1);
}

const expandAroundCenter = (s, left, right) => {
    let L = left, R = right;
    while (L >= 0 && R < s.length() && s.charAt(L) == s.charAt(R)) {
        L--;
        R++;
    }
    return R - L - 1;
}

//!Longest common prefix 
//Accepted on Leetcode :-)
// Divide and conquer
// Time: O(n*log(n))
// Space: O(1)
var longestCommonPrefix = function(strs) {
    if (strs.length == 0) return "";
    if (strs.length == 1) return strs[0];
    return longest(
        longestCommonPrefix(strs.slice(0, strs.length/2)),
        longestCommonPrefix(strs.slice(strs.length/2))
    );
};

var longest = function(_a, _b) {
    let a = _a.split("");
    let b = _b.split("");
    let min = Math.min(a.length, b.length);
    let common = [];
    for (let x = 0; x < min; x++) {
        if (a[x] == b[x]){
          common.push(a[x]);  
        } else {
          break;  
        }
    }
    return common.join("");
}


//!First non-repeating character in a string
// Time: O(n)
//Hashmap solution
// Space: O(n)
var firstUniqChar = function(s) {
    let map = {};
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]] == undefined) {
            map[s[i]] = 1;
        } else {
            map[s[i]]++;
        }
    }
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]] == 1) {
            return i;
        }
    }
    return -1;
}

//IndexOf solution
// Time: O(n)
// Space: O(1)
var firstUniqChar = function(s) {
    for (let i = 0; i < s.length; i++) {
        if (s.indexOf(s[i]) == s.lastIndexOf(s[i])) {
            return i;
        }
    }
    return -1;
}