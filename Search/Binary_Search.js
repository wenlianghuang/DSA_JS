let data = [10,15,25,40,45,55,60,80,90];
let target = 15;
function binarySearch(arr,target){
    let start = 0; // 開始索引
    let end = arr.length - 1; // 結束索引
    let mid; // 中間索引
    while(start <= end){ // 當開始索引小於等於結束索引時
        mid = Math.floor((start + end) / 2); // 計算中間索引
        if(arr[mid] === target){ // 如果中間元素等於目標值
            return mid; // 返回中間索引
        } else if(arr[mid] < target){ // 如果中間元素小於目標值
            start = mid + 1; // 更新開始索引
        } else if(arr[mid] > target){ // 如果中間元素大於目標值
            end = mid - 1; // 更新結束索引
        }else{
            return "有搜尋到目標值: 在第"+ (mid + 1) + "個位置";
        }
    }
    return "沒有搜尋到目標值";

}

console.log(binarySearch(data,target)); // 5