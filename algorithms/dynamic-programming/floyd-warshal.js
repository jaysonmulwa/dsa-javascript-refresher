//A sketch of floyd-warshal algorithm fpr All pair shortest paths.

for (i = 0; i <= A.length();i++) {
    for (j = 0; j<= A.length(); j++) {
        A[i, j] = Math.min(A[i, k] + A[k, j]);
    }
}