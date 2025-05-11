let data = [10,20,30,40,50,60,70,80,90,100]
let target = 50

function interpolationSearch(arr, target){
    let start = 0; // 開始索引
    let end = arr.length - 1; // 結束索引
    let mid;

    while(end >= start){
        mid = Math.floor(start + ((target - arr[start]) * (end - start)) / (arr[end] - arr[start])); // 計算中間索引
        if(arr[mid] === target){
            return mid;
        }else if (arr[mid] < target){
            start = mid + 1; // 更新開始索引
        }else{
            end = mid - 1; // 更新結束索引
        }
    }
    return -1; // 如果沒有找到目標值，返回 -1
}

console.log(interpolationSearch(data, target)); // 4

