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
    table[i] = table[i - 1] + table[i - 2];
  }
  return table;
};

//console.log(fib(6));

const gridTraveler = (m, n) => {
  const table = Array(m + 1).fill(0);
  for (key in table) {
    table[key] = Array(n + 1).fill(0);
  }
  table[1][1] = 1;

  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      if (i <= m - 1) {
        table[i + 1][j] += table[i][j];
      }

      if (j <= n - 1) {
        table[i][j + 1] += table[i][j];
      }
    }
  }

  return table;
};

console.log(gridTraveler(3, 3));
