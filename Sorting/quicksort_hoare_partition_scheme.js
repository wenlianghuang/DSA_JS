let data = [30,10,40,5,70,15,60,20,50,25,80,35]

function quickSort(arr,start,end){
    if(start < end){
        let pivot = hoarePartition(arr, start, end); // 使用 Hoare 分割方案
        quickSort(arr, start, pivot); // 遞迴排序左半邊
        quickSort(arr, pivot + 1, end); // 遞迴排序右半邊
    }
    return arr;
}

function hoarePartition(arr, start, end){
    let pivot = arr[start]; // 選擇最左邊的元素作為樞軸
    let i = start - 1; // 左指標
    let j = end + 1; // 右指標

    while(true){
        do{
            i++; // 向右移動左指標
        }while(arr[i] < pivot); // 找到大於樞軸的元素

        do{
            j--; // 向左移動右指標
        }while(arr[j] > pivot); // 找到小於樞軸的元素

        if(i >= j){ // 如果左指標大於等於右指標，則結束迴圈
            return j; // 返回右指標作為分割點
        }
        [arr[i], arr[j]] = [arr[j], arr[i]]; // 交換元素
    }
}

console.log(quickSort(data, 0, data.length - 1)); // [5, 10, 15, 20, 25, 30, 35, 40, 50, 60, 70, 80]