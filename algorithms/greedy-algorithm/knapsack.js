const knapsack = (items, capacity) => {

    let output = 0;
    let weighted = items.sort((a, b) =>{
        return (b.value/b.weight)  - (a.value/ a.weight); //profit per weight;
    });

    for (let i = 0; i < items.length; i++) {
        if (weighted[i].weight <= capacity){
            capacity -= weighted[i].weight;
            output += weighted[i].value;
        }
    }

    return output;
};

//Get max value of items in knapsack
let items = [
  { weight: 5, value: 10 },
  { weight: 7, value: 30 },
  { weight: 3, value: 40 },
  { weight: 4, value: 50 },
];

console.log(knapsack(items, 14));
