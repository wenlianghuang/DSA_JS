// Define an array of numbers to be sorted
const numbers = [99,44,6,2,1,5,63,87,283,4,0];

// Function to perform merge sort on an array
function mergeSort(array) {
    // Base case: if the array has only one element, return it
    if(array.length === 1) {
        return array;
    }

    // Get the length of the array
    const length = array.length;
    // Find the middle index of the array
    const middle = Math.floor(length / 2);
    // Split the array into left and right halves
    const left = array.slice(0,middle);
    const right = array.slice(middle);

    // Recursively sort the left and right halves and merge them
    return merge(
        mergeSort(left),
        mergeSort(right)
    );
}

// Function to merge two sorted arrays into one sorted array
function merge(left, right) {
    // Initialize an empty array to hold the merged result
    const result = [];
    // Initialize indices for left and right arrays
    let leftIndex = 0;
    let rightIndex = 0;

    // Loop until we reach the end of either left or right array
    while(leftIndex < left.length && rightIndex < right.length) {
        // Compare elements from left and right arrays and push the smaller one to the result
        if(left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    // Log the left and right arrays being merged
    console.log(left, right);
    // Concatenate any remaining elements from left and right arrays to the result
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Call mergeSort on the numbers array and store the result
const answer = mergeSort(numbers);
// Log the sorted array
console.log(answer);