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
// Height is m - assuming we are subtracting -1 at every level, height would be m eventually
// branching factor is n - the number of items in the array.
// Therefore Time complexity = O(n^m);
// Space comlexity = O(m) 
const canSum = (sum, array) =>{
    if (sum == 0) return true;
    if (sum < 0) return false;
    let bool = false;
    for (let x = 0; x <= array.length - 1; x++){
        bool = canSum(sum - array[x], array);
    }
    return bool;
};

//Time = O(m * n)
//Space = O(m)
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

//console.log(canSumMemo(7, [11, 3, 5, 7]));



/**
 * !HowSum - Similar to canSum, but we now return an array of numbers that add up to targetSum.
 * 
 */
//Time  = O(n^m * m)
//Space = O(m)
 const howSum = (sum, array) =>{
    if (sum === 0) return [];
    if (sum < 0) return null;

    for (let x = 0; x <= array.length - 1; x++){
        const remainderResult = howSum(sum - array[x], array);
        if (remainderResult != null) {
            return [...remainderResult, array[x]];
        }
    }
 }

 //!memoized
 //Time = O(n*m^2)
 //Space = O(m * m) 
 const howSumMemo = (sum, array, memo = {}) =>{
    if (sum in memo) return memo[sum];
    if (sum === 0) return [];
    if (sum < 0) return null;
    for (let x = 0; x <= array.length - 1; x++){
        const remainderResult = howSumMemo(sum - array[x], array, memo);
        if (remainderResult != null) {
            memo[sum] = [...remainderResult, array[x]];
            return memo[sum];
        }
    }
 }

 //console.log(howSumMemo(7, [11, 3, 4, 5, 7]));




/**
 * !Best sum
 * - Return an array of the shortest combination of numbers that add up exactly to the tartgetSum. 
 * 
 */

const bestSum = (sum, array) => {
    if (sum == 0) return [];
    if (sum < 0) return null;
    let shortestCombination = null;
    for (let x = 0; x <= array.length - 1; x++){
        const  remainderResult = bestSum(sum - array[x], array)
        if (remainderResult != null){
            let returnable = [...remainderResult, array[x]];
            if (shortestCombination == null) {
                shortestCombination = returnable
            }

            if (shortestCombination.length > returnable.length){
                shortestCombination = returnable;
            }
        } 
    }
    return shortestCombination;
}



const bestSumMemo = (sum, array, memo = {}) => {
    if (sum in memo) return memo[sum];
    if (sum == 0) return [];
    if (sum < 0) return null;
    let shortestCombination = null;
    for (let x = 0; x <= array.length - 1; x++){
        const  remainderResult = bestSumMemo(sum - array[x], array, memo)
        if (remainderResult != null){
            memo[sum] = [...remainderResult, array[x]];
            
            if (shortestCombination == null) {
                shortestCombination = memo[sum];
            }

            if(shortestCombination.length > memo[sum].length){
                shortestCombination = memo[sum];
            }
        } 
    }
    return shortestCombination;
}

console.log(bestSum(100, [1, 3, 4, 5, 7]));