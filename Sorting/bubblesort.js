let data = [8,6,1,10,5,3,9,2,7,4]

function BubbleSort(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length - i - 1; j++){ // 每次迴圈都會將最大的數字放到最後面
            // 如果當前數字大於下一個數字，則交換它們
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}
console.log(BubbleSort(data))