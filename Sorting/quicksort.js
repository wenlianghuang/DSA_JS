// This code implements the Quick Sort algorithm to sort an array of numbers.
const numbers = [99,44,6,2,1,5,63,87,283,4,0]; // Initialize an array of numbers

function quickSort(array,left,right){
    const len = array.length; // Get the length of the array
    let pivot; // Declare pivot variable
    let partitionIndex; // Declare partitionIndex variable

    if(left < right){
        pivot = right; // Set pivot to the rightmost element
        partitionIndex = partition(array,pivot,left,right); // Get the partition index

        console.log(`QuickSort called with left: ${left}, right: ${right}, pivot: ${pivot}`);

        // Sort left and right subarrays
        quickSort(array,left,partitionIndex - 1); // Recursively sort the left subarray
        quickSort(array,partitionIndex + 1,right); // Recursively sort the right subarray
    }
    return array; // Return the sorted array
}

function partition(array,pivot,left,right){
    let pivotValue = array[pivot]; // Get the pivot value
    console.log(`Pivot value: ${pivotValue}`);
    let partitionIndex = left; // Set partition index to the leftmost element

    console.log(`Partitioning with pivotValue: ${pivotValue}, left: ${left}, right: ${right}`);

    for(let i = left; i < right; i++){
        if(array[i] < pivotValue){
            swap(array,i,partitionIndex); // Swap elements if current element is less than pivot value
            console.log(`Swapping elements: ${array[i]} and ${array[partitionIndex]}`);
            partitionIndex++; // Increment partition index
        }
    }
    swap(array,right,partitionIndex); // Swap the pivot element with the element at the partition index
    console.log(`Partition index: ${partitionIndex}`);
    return partitionIndex; // Return the partition index
}

function swap(array,firstIndex,secondIndex){
    let temp = array[firstIndex]; // Store the value of the first index in a temporary variable
    array[firstIndex] = array[secondIndex]; // Assign the value of the second index to the first index
    array[secondIndex] = temp; // Assign the value of the temporary variable to the second index
}

// Select first and last index as 2nd and 3rd parameters
quickSort(numbers,0,numbers.length - 1); // Call quickSort on the entire array
console.log(numbers); // Print the sorted array