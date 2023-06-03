//Longest commen subsequence with recursion
//Without memoization 2^n
//With recursion O(mxn)

lcs = (A, B, i, j) => {

    if (i <= 0 && j <= 0){
        return 0;
    } else 

    if (A[i] == B[j]) {
        console.log(A, B, A[i])
        return 1 + lcs(A, B, i - 1, j - 1);
    } else 

    if (A[i] != B[j]) {
        if (i == 0) {
            return Math.max(lcs(A, B, 0, j - 1), lcs(A, B, 0, 0)); 
        }
        if (j == 0) {
            return Math.max(lcs(A, B, 0, 0), lcs(A, B, i - 1, 0)); 
        }
        return Math.max(lcs(A, B, i, j - 1), lcs(A, B, i - 1, j));
    }
}

strA = "acdbe";
strB = "cdme";

lengthA = strA.length;
lengthB = strB.length;

console.log(lcs(strA, strB, lengthA - 1 , lengthB - 1));