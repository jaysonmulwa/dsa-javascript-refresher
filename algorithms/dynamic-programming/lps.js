const longestPalindromicSubstring = (str) => {
    //Bruteforce
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
