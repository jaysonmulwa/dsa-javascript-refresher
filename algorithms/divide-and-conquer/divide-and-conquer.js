/**
 * 
 * !Quick Notes: 
 * 
 * Divide and conquer algorithm is recursive.
 * Examples of divide and conquer algorithms:
 * 1. Merge sort
 * 2. Quick sort
 * 3. Finding maximum and minimum, 
 * 
 * 4. Binary search
 * 5. Strassen's matrix multiplication algorithm
 * 
 * 6. Finding closes pairs of points.
 * 7. Top-down parsers
 * 8. Fourier transforms
 * 
 * 
 * Fundamental concepts of divide and conquer:
 * 1. Divide and conquer is a technique that splits a problem into smaller subproblems, and then combines the solutions to the subproblems to solve the original problem.
 * 2. Recurrence relation -- - The recurrence relation is the formula for the number of subproblems in a problem of size n.
 * 
 * 
 * Hybrid algorithms are a combination of divide and conquer and other algorithms.
 * For example, Quick sort has base-cases of upto 3 elemeents whch it uses insertion sort for.
 * 
 * 
 * Space complexty is equal to the dept of recursion.
 * Time complexity can be calculated via recurrence relations.
 */

//Iterative method:
//time complexity: O(log(n))
//space complexity: O(1)
binarySearch = (arr, target) => {
    let low = 0;
    let high = arr.length - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1;
}


//Recursive method:
//time complexity: O(log(n))
//space complexity: O(log(n))
binarySearch = (arr, target, low, high) => {
    if (low > high) {
        return -1;
    }
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) {
        return mid;
    } else if (arr[mid] < target) {
        return binarySearch(arr, target, mid + 1, high);
    } else {
        return binarySearch(arr, target, low, mid - 1);
    }
}

//Merge sort:
//time complexity: O(n * log(n))
//space complexity: O(n)
//It works by breaking the array into two halves, sorting each half, and then merging the two sorted halves.
//It differs from the quick sort in that it does not use the pivot element as the pivot, but rather the middle element of the array.
mergeSort = (arr) => {
    if (arr.length < 2) {
        return arr;
    }
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}


//Merge sort helper function:
merge = (left, right) => {
    let result = [];
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    return result.concat(left).concat(right);
}

