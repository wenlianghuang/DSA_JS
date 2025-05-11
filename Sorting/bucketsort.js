let arr = [9,15,12,23,33,26,7,31,42,36]

function bucketSort(arr, bucketSize = 5) {
    let minValue = Math.min(...arr);
    let maxValue = Math.max(...arr);

    // 產生空的桶子
    let buckets = Array.from({ length: Math.floor((maxValue - minValue) / bucketSize) + 1 }, () => []);

    arr.forEach(function (val) {
        // 將數字放入對應的桶子中
        buckets[Math.floor((val - minValue) / bucketSize)].push(val);
    });

    result = [];
    // 對每個桶子進行排序
    for(i = 0; i < buckets.length;i++){
        buckets[i].sort()
        for(var j = 0; j < buckets[i].length; j++){
            result.push(buckets[i][j])
        }
    }

    return result;
}

console.log(bucketSort(arr, 5)); // [7, 9, 12, 15, 23, 26, 31, 33, 36, 42]