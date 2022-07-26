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

//--Time O(m * n)
//--Space O(m)
const canSum = (m, arr) => {
    const table = Array(m + 1).fill(false);
    table[0] = true;
    for (let i = 0; i <= table.length; i++){
        let curr = table[i];
        for (let j = 0; j < arr.length; j++ ) {
            let num = arr[j];
            let nextIndex = i + num;
            
            if ((nextIndex < table.length) && (curr == true)) {
                table[nextIndex] = curr;
            }
        }
    }
    return table;
}



const howSum = (m, arr) => {
    const table = Array(m + 1).fill(null);
    table[0] = [];
    for (let i = 0; i <= m; i++){
        if (table[i] != null) {
            for (num of arr) {
                table[i + num] = [...table[i], num]
            }
        }  
    }

    console.log(table);
    return table[m];
}




const bestSum = (m, arr) => {
    const table = Array(m + 1).fill(null);
    table[0] = [];
    for (let i = 0; i <= m; i++){
        if (table[i] != null) {
            
            for (num of arr) {
                let res = [];
                 res = [...table[i], num];

                 if (table[i + num] != null) {
                    if (res.length < table[i + num].length) {
                        table[i + num] = res; 
                    }
                } else {
                    table[i + num] = res; 
                }
            }
            
        }  
    }

    console.log(table);
    return table[m];
}

//console.log(bestSum(8, [2, 3, 5]));

const canConstruct = (word, array) => {
    
}

console.log(countConstruct("bakersend", ["baker", "bakers", "end", "send"]));