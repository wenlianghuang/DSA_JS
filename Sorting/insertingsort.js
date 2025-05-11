let data = [8,6,10,5,3,9,2,7,4]
function InsertSort(array){
    for(let i = 1; i < array.length;i++){
        let current = i
        for( let j = i - 1; j >= 0; j--){
            if(array[current] < array[j]){
                [array[current], array[j]] = [array[j], array[current]]; // 交換當前數字和前一個數字
                current = j; // 更新當前數字的索引
            }
        }
    }
    return array;
}

console.log(InsertSort(data))