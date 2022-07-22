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


//!Leetcode Problem 11 - Container With Most Water 
//Bruteforce is O(n*n)
//Pointers method is O(n) - solution below 
 var maxArea = function(height) {
    let maxArea= 0;
    let left= 0;
    let right = height.length-1;
     // we will keep moving till we cross the right
     while(left<right){
         let width= right-left;
         let minHeight= Math.min(height[left],height[right]);
         maxArea = Math.max(maxArea,(width*minHeight));
         
         // the logic is we will keep going closer to the max height either from left or right
         if(height[left]<height[right]){
             left++;
         }else{
             right--;
         }
     }
     return maxArea;
 };
