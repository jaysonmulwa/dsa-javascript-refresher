const longestPalindromicSubstring = (str) => {
    //Bruteforce O(n^3)
    let longest = "";
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            let sub = str.substring(i, j + 1);
            if (sub.length > longest.length && isPalindrome(sub)) {
                longest = sub;
            }
        }
    }
    return longest;
}


//longestPalindromicSubstring -- Dynamic Programming
const longestPalindromicSubstringDP = (str) => {
    let dp = new Array(str.length);
    for (let i = 0; i < str.length; i++) {
        dp[i] = new Array(str.length);
    }
    for (let i = 0; i < str.length; i++) {
        dp[i][i] = true;
    }
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            if (i === j) {
                dp[i][j] = true;
            } else if (str[i] === str[j]) {
                dp[i][j] = dp[i + 1][j - 1];
            } else {
                dp[i][j] = false;
            }
        }
    }
    let start = 0;
    let end = 0;
    for (let i = 0; i < str.length; i++) {
        for (let j = i; j < str.length; j++) {
            if (dp[i][j] && j - i + 1 > end - start) {
                start = i;
                end = j;
            }
        }
    }
    return str.substring(start, end + 1);
}

//Manacher's Algorithm for Longest Palindromic Substring
const longestPalindromicSubstringManacher = (str) => {
    let newStr = "^#" + str.split("").join("#") + "#$";
    let newStrLength = newStr.length;
    let center = 0;
    let right = 0;
    let maxLength = 0;
    let maxCenter = 0;
    let p = new Array(newStrLength);
    for (let i = 1; i < newStrLength - 1; i++) {
        if (i < right) {
            p[i] = Math.min(right - i, p[2 * center - i]);
        } else {
            p[i] = 1;
        }
        while (newStr[i + p[i]] === newStr[i - p[i]]) {
            p[i]++;
        }
        if (i + p[i] > right) {
            center = i;
            right = i + p[i];
        }
        if (p[i] > maxLength) {
            maxLength = p[i];
            maxCenter = i;
        }
    }
    let start = (maxCenter - maxLength) / 2;
    let end = start + maxLength - 1;
    return str.substring(start, end + 1);
}