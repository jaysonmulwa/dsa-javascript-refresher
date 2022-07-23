//normal fibonacci
//time = O(2^n)
//space = O(n)
const fib = (n) => {
    if (n <= 2) return 1;
    return fib(n-2) + fib(n-1);
};

//memoized fibonacci
//time = O(n)
//space = O(n)
const fibMemo = (n, memo = {}) => {
    if (n in memo) return n;
    if (n <= 2) return 1;
    memo[n] = fib(n-2, memo) + fib(n-1, memo);
    return memo[n];
};