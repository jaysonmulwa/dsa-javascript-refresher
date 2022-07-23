//complexity: O(m*n)
//space: O(m*n)
//m = str1.len && n = str2.len	-- Dynamic programming
const longestCommonSubsequenceDP = (str1, str2) => {
    const m = str1.length;
    const n = str2.length;
    const dp = new Array(m + 1);
    for (let i = 0; i <= m; i++) {
        dp[i] = new Array(n + 1);
    }
    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            if (i === 0 || j === 0) {
                dp[i][j] = 0;
            } else if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    return dp[m][n];
}
//console.log(longestCommonSubsequence("abcde", "ace"));


//Longest Common Subsequence - Recursive
//Given two strings, find the longest common subsequence (LCS).
//str[str.length - 1] === str2[str2.length - 1] --> check if last char is same
//str.slice(0, -1) --> remove last char	
const longestCommonSubsequence = (str1, str2) => {
    if (str1.length === 0 || str2.length === 0) {
        return 0;
    }
    if (str1[str1.length - 1] === str2[str2.length - 1]) {
        return 1 + longestCommonSubsequence(str1.slice(0, -1), str2.slice(0, -1)); //remove last char from both strings
    } else {
        return Math.max(longestCommonSubsequence(str1.slice(0, -1), str2), longestCommonSubsequence(str1, str2.slice(0, -1))); //compare which yields max after removing last char
    }
}
console.log(longestCommonSubsequence("abcde", "ace"));


//leetcode problem 12 - Integer to Roman
//convert integer to roman numeral
//1 = I, 5 = V, 10 = X, 50 = L, 100 = C, 500 = D, 1000 = M
//I = 1, V = 5, X = 10, L = 50, C = 100, D = 500, M = 1000
//I can be placed before V (5) and X (10) to make 4 and 9.
//X can be placed before L (50) and C (100) to make 40 and 90.
//C can be placed before D (500) and M (1000) to make 400 and 900.
//Given an integer, convert it to a roman numeral. Input is guaranteed to be within the range from 1 to 3999.
//Input: 3
//Output: "III"
const intToRoman = (num) => {
    let roman = "";
    let romanNumeral = [
        ["M", 1000],
        ["CM", 900],
        ["D", 500],
        ["CD", 400],
        ["C", 100],
        ["XC", 90],
        ["L", 50],
        ["XL", 40],
        ["X", 10],
        ["IX", 9],
        ["V", 5],
        ["IV", 4],
        ["I", 1]
    ];
    for (let i = 0; i < romanNumeral.length; i++) {
        while (num >= romanNumeral[i][1]) {
            roman += romanNumeral[i][0];
            num -= romanNumeral[i][1];
        }
    }
    return roman;
}
