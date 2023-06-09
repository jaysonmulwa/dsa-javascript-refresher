//get best time to buy and sell stock and return max value

function stock(arr) {
  let min_value = Infinity;
  let max_value = null;
  let max_profit = 0;

  arr.forEach((el) => {
    if (!max_value) max_value = el;
    if (el < min_value) {
      min_value = el;
    } else {
      max_profit = Math.max(max_profit, el - min_value);
    }
  });

  return max_profit;
}

console.log(stock([7, 1, 5, 3, 6, 4]));
