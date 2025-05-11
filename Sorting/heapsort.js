let data = [30,20,15,1,10,5]
function maxHeapify(arr, n, i){
    let largest = i; // 初始化最大值為父節點
    let left = 2 * i + 1; // 左子節點的索引
    let right = 2 * i + 2; // 右子節點的索引

    if(left < n && arr[left] > arr[largest]){
        largest = left; // 如果左子節點大於父節點，則將 largest 設為左子節點的索引
    }
    
    if(right < n && arr[right] > arr[largest]){
        largest = right; // 如果右子節點大於父節點，則將 largest 設為右子節點的索引
    }

    if(largest !== i){ // 如果 largest 不是父節點的索引
        // 將父節點和子節點交換
        [arr[i], arr[largest]] = [arr[largest], arr[i]]; // 交換父節點和子節點
        maxHeapify(arr, n, largest); // 遞迴調整
    }
}
function heapSort(arr){
    let n = arr.length;
    // 建立最大堆
    for(let i = Math.floor(n / 2) - 1; i >= 0; i--){
        maxHeapify(arr, n, i);
    }

    for (let i = n - 1; i > 0; i--){
        // 將根節點（最大值）移到陣列的末尾
        [arr[0], arr[i]] = [arr[i], arr[0]];
        maxHeapify(arr, i, 0); // 調整堆
    }

}

heapSort(data);
console.log(data); // [1, 5, 10, 15, 20, 30]