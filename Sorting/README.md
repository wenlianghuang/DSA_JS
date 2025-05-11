
# Quick Sort Implementation in JavaScript

This directory contains an implementation of the Quick Sort algorithm in JavaScript.

## File: `quicksort.js`

### Description

The `quicksort.js` file contains a JavaScript implementation of the Quick Sort algorithm. Quick Sort is an efficient, in-place sorting algorithm that uses a divide-and-conquer approach to sort an array of numbers.

### Code Overview

- **Initialization**: An array of numbers is initialized.
- **Quick Sort Function**: The `quickSort` function recursively sorts the array by partitioning it around a pivot element.
- **Partition Function**: The `partition` function rearranges the elements in the array such that elements less than the pivot are on the left, and elements greater than the pivot are on the right.
- **Swap Function**: The `swap` function exchanges the values of two elements in the array.

### Usage

To use the Quick Sort implementation, simply run the `quicksort.js` file. The sorted array will be printed to the console.

```javascript
node quicksort.js
```

### Example

Given the array:

```javascript
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
```

The output will be:

```javascript
[0, 1, 2, 4, 5, 6, 44, 63, 87, 99, 283]
```

### Notes

- The Quick Sort algorithm has an average time complexity of O(n log n).
- The implementation provided here sorts the array in place.

Feel free to modify and experiment with the code to better understand how Quick Sort works.
