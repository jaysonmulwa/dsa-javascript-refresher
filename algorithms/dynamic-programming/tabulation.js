/**
 * Iterative solution to dp problems;
 */
//Time = O(n)
//Space = O(n)
const fib = (n) => {
    let table = Array(n + 1).fill(0);
    table[0] = 0;
    table[1] = 1;
    for (let i = 2; i <= n; i++) {
        table[i] = table[i-1] + table[i-2];
    }
    return table;
}

console.log(fib(6));