/**
 * Bubblesort = One of the slowest but easiest to implement. O(n * n) - Worcst Case; Best case is O(n)
 * * The space complexity of Bubble Sort is O(1).
 *
 * Insertion Sort = In-place sorting algorithm. O(n * n) - Worst Case; Best case is O(n)
 * * Maintains 2 sublists, a sorted and unsorted list. element from unsorted list is added onto the correct place in sorted list.
 * 
 * * Common sorting algorithms
 *! 1. Quicksort:
 * - Quicksort is a divide-and-conquer algorithm that selects a pivot element and partitions the array around it. 
 * - It has an average time complexity of O(n log n) and is often faster than other sorting algorithms in practice. 
 * - However, its worst-case time complexity is O(n^2) if the pivot selection is inefficient.
 * 
 *! 2. Mergesort: 
 * - Mergesort is a divide-and-conquer algorithm that recursively divides the array into smaller sub-arrays, sorts them, and then merges them to obtain the final sorted array.
 * - It has a consistent time complexity of O(n log n) in all cases but requires additional memory for merging, resulting in a space complexity of O(n).
 * 
 *! 3. Insertion Sort: 
 * - Insertion Sort is an efficient algorithm for small input sizes or partially sorted arrays. 
 * - It iterates through the array, comparing each element with the preceding elements and inserting it into the correct position. 
 * - Its time complexity is O(n^2), but it performs well for small inputs.
 * 
 *! 4. Selection Sort: 
 * - Selection Sort repeatedly finds the minimum element from the unsorted part of the array and swaps it with the element in the correct position. 
 * - It has a time complexity of O(n^2) and is not suitable for large arrays due to its inefficient nature.
 * 
 *! 5. Bubble Sort:
 * - Bubble Sort compares adjacent elements and swaps them if they are in the wrong order, gradually moving the larger elements towards the end of the array. 
 * - It has a time complexity of O(n^2) and is primarily used for educational purposes or small input sizes due to its simplicity.
 * 
 *! 6. Heap Sort:
 * - Heap Sort uses a binary heap data structure to sort elements.
 * - It first builds a max-heap from the array and repeatedly extracts the maximum element, maintaining the heap property.
 * - It has a time complexity of O(n log n) and performs in-place sorting.
 * 
 *! 7. Radix Sort:
 * - Radix Sort sorts numbers by processing individual digits, starting from the least significant digit to the most significant digit.
 * - It has a time complexity of O(d * (n + k)), where d is the number of digits and k is the range of possible digit values.
 * 
 */

class Sort {
  constructor() {}

  bubbleSort = () => {
    var size = this.dataStore.length;
    for (var outer = size; outer >= 2; --outer) {
      for (var inner = 0; inner <= outer - 1; ++inner) {
        if (this.dataStore[inner] > this.dataStore[inner + 1]) {
          swap(this.dataStore, inner, inner + 1);
        }
      }
    }
  };

  insertionSort = () => {
    var size = this.dataStore.length;
    for (var outer = 1; outer <= size; ++outer) {
      var temp = this.dataStore[outer];
      var inner = outer; //** Important part start from the end of the sorted list
      while (inner > 0 && this.dataStore[inner - 1] >= temp) {
        this.dataStore[inner] = this.dataStore[inner - 1];
        --inner;
      }
      this.dataStore[inner] = temp;
    }
  };

  alternate_insertion_Sort = (nums) => {
    for (let i = 1; i < nums.length; i++) {
      let j = i - 1;
      let temp = nums[i];
      while (j >= 0 && nums[j] > temp) {
        nums[j + 1] = nums[j];
        j--;
      }
      nums[j + 1] = temp;
    }
    return nums;
  };

  swap = (arr, index1, index2) => {
    var temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
  };
}
