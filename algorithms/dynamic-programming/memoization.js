/**
 * !Fibonnaci
 */
//normal fibonacci
//time = O(2^n)
//space = O(n)
const fib = (n) => {
    if (n <= 2) return 1;
    return fib(n-2) + fib(n-1);
};

//?memoized fibonacci
//time = O(n)
//space = O(n)
const fibMemo = (n, memo = {}) => {
    if (n in memo) return n;
    if (n <= 2) return 1;
    memo[n] = fib(n-2, memo) + fib(n-1, memo);
    return memo[n];
};





/**
 * !Grid Trveller = gridTraveler(n, m)
 * @param {number} n - number of rows, m - number of columns in the grid
 * aka => In how many ways can a robot travel from (0, 0) to (N, N)
 * Can only move down or right
 */


/**
* n + m levels to the tree
* But ranches into two at every step
* therefore time = O(2^(m + n))
* Space complexity for recursion is generally the height pf the tree/ the depth of recursion
* therefore space = O(n+m)
*/
const gridTraveler = (n, m) => {
    if ((n == 1) && (m == 1)) return 1;
    if ((n <= 0) || (m <= 0)) return 0;
    return gridTraveler(n, m - 1) + gridTraveler(n - 1, m);
};


//?memoized
const gridTravelerMemo = (n, m, memo = {}) => {
    if ((n == 1) && (m == 1)) return 1;
    if ((n <= 0) || (m <= 0)) return 0;
    let key = `${n}${m}`
    memo[key] = gridTravelerMemo(n, m - 1, memo) + gridTravelerMemo(n - 1, m, memo);
    return memo[key];
}

console.log(gridTravelerMemo(3, 3));

