const mergeSort = array =>{
    if (array.length <= 1) return array; 
    let middle = Math.floor(array.length/2);
    let left = array.slice(0, middle);
    let right  = array.slice(middle);
  
    return merge(
      mergeSort(left),
      mergeSort(right)
    );
  };
  
  //helper
  const merge = (left, right) =>{
      let output = [];
      let len_left = left.length;
      let len_right = right.length;
  
      let leftIndex = 0;
      let rightIndex = 0;
  
      while(leftIndex < len_left && rightIndex < len_right){
  
          if (left[leftIndex] == right[rightIndex]){
              output.push(left[leftIndex]);
              output.push(right[rightIndex]);
              leftIndex++;
              rightIndex++;
          }
  
          if (left[leftIndex] < right[rightIndex]){
              output.push(left[leftIndex]);
              leftIndex++;
          }
          
          if (left[leftIndex] > right[rightIndex]){
              output.push(right[rightIndex]);
              rightIndex++;
          }
      }
  
      return [...output, ...left.slice(leftIndex), ...right.slice(rightIndex)];
  }
  
  console.log(mergeSort([1, 4, 78, 2, 64]));
  
  console.log(merge([1, 4], [2, 64]))