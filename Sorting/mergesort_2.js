let data = [8,6,1,10,5,3,9,2,4,7]

function merge(left, right){
    let result = [];
    while(left.length && right.length){
        if(left[0] < right[0]){
            result.push(left.shift()); // 將左邊的最小值放入結果陣列
        } else {
            result.push(right.shift()); // 將右邊的最小值放入結果陣列
        }
    }

    result = left.length ? result.concat(left): result.concat(right);
    return result;
}

function MergeSort(arr){
    if(arr.length < 2){
        return arr;
    }

    let mid = Math.floor(arr.length / 2);
    let leftArray = arr.slice(0, mid);
    let rightArray = arr.slice(mid);
    return merge(MergeSort(leftArray), MergeSort(rightArray));
}

console.log(MergeSort(data));