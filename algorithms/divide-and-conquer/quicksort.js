//O(n log n) -- traverses all elements but also has recursion
//Worst case is O (n * n)
//Uses a pivot, which is the last element of the array
const quickSort = array => {
    if (array.length <= 1) return array;
    let pivot = array[array.length - 1]; //last element
    let leftArr = [];
    let rightArr = [];
    for (let i = 0; i < array.length; i++){
        if (array[i] < pivot) leftArr.push(array[i]);
        if (array[i] > pivot) rightArr.push(array[i]);
    }

    if(leftArr.length > 0 && rightArr.length > 0){
        return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];

    }else if (leftArr.length > 0){
   
        return [...quickSort(leftArr), pivot];
        
    }else if (rightArr.length > 0){
     
        return [pivot, ...quickSort(rightArr)];
    }
}

console.log(quickSort([1, 4, 5, 2, 14, 78]));