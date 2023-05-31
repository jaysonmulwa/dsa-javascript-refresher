/**
 * Bubblesort = One of the slowest but easiest to implement. O(n * n) - Worcst Case; Best case is O(n)
 * * The space complexity of Bubble Sort is O(1).
 *
 * Insertion Sort = In-place sorting algorithm. O(n * n) - Worst Case; Best case is O(n)
 * * Maintains 2 sublists, a sorted and unsorted list. element from unsorted list is added onto the correct place in sorted list.
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
