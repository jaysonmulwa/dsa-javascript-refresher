/**
 * Memoization recipe
 * 1. Make it work
 * - Visualize problem as a tree.
 * - Implement the tree using recurions (think of base cases).
 * - test it .
 * - Now you have a brute-force solution.
 * 2. Make it efficient.
 * - add a memo object.
 * - add a new base case to return memo values.
 * - store return values in memo.
 */


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
    let key = `${n}${m}`;
    if (key in memo) return memo[key];
    if ((n == 1) && (m == 1)) return 1;
    if ((n <= 0) || (m <= 0)) return 0;
   
    memo[key] = gridTravelerMemo(n, m - 1, memo) + gridTravelerMemo(n - 1, m, memo);
    return memo[key];
}

//console.log(gridTravelerMemo(3, 3));

/**
 * !canSum - return boolean
 * Check whether their are value in the array that add up to the given total.
 */

const canSum = (sum, array) =>{
    if (sum == 0) return true;
    if (sum < 0) return false;
    let bool = false;
    for (let x = 0; x <= array.length - 1; x++){
        bool = canSum(sum - array[x], array);
    }
    return bool;
};


const canSumMemo = (sum, array, memo = {}) =>{
    if (sum in memo) return memo[sum];
    if (sum == 0) return true;
    if (sum < 0) return false;
    memo[sum] = false;
    for (let x = 0; x <= array.length - 1; x++){
        memo[sum] = canSumMemo(sum - array[x], array, memo);
    }
    return memo[sum];
};

console.log(canSumMemo(7, [11, 3, 5, 7]));




