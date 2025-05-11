class MaxHeap{
    constructor(){
        this.list = [];
    }

    // 最大堆積化
    maxHeapify(arr,n,i){
        let largest = i;
        let left = 2*i + 1;// 左子節點
        let right = 2*i + 2;// 右子節點
        
        if(left < n && arr[left] > arr[largest]){
            largest = left;
        } // 如果左子節點大於父節點，則將 largest 設為左子節點的索引
        if(right < n && arr[right] > arr[largest]){
            largest = right;
        } // 如果右子節點大於父節點，則將 largest 設為右子節點的索引

        if(largest !== i){ // 如果 largest 不是父節點的索引
            // 將父節點和子節點交換
            [arr[i], arr[largest]] = [arr[largest], arr[i]]; // 交換父節點和子節點
            this.maxHeapify(arr, n, largest); // 遞迴調整
        }
    }

    // 新增元素
    push = (num) => {
        const size = this.list.length;
        if(size === 0){
            this.list.push(num);
        }
        else{
            this.list.push(num);
            for (let i = parseInt(this.list.length / 2) - 1; i >= 0; i--) {  
                this.maxHeapify(this.list, this.list.length, i); // 從最後一個非葉子節點開始調整
            }

        }
    }

    //刪除元素
  pop = (num) => {
    const size = this.list.length;
    
    let i;
    for(i = 0; i < size; i++){
      if(num === this.list[i]){
        break;
      }
    }
    
    //要刪除元素與最後一個元素交換
    [this.list[i], this.list[size - 1]] = [this.list[size - 1], this.list[i]];
    
    //刪除最後一個元素
    this.list.splice(size - 1);
    
    for (let i = parseInt(this.list.length / 2 - 1); i >= 0; i--) {
         this.maxHeapify(this.list, this.list.length, i); 
     }
  }
    getRoot = () => this.list[0]; // 取得根節點
    popRoot = () => {
        this.pop(this.list[0]); // 刪除根節點
    }
    printHeap = () => this.list;
}

let heap = new MaxHeap()
heap.push(20)
heap.push(10)
heap.push(5)
heap.push(80)
heap.push(75)
heap.push(78)
heap.push(72)
heap.push(73)
console.log(heap.printHeap())//80, 75, 78, 73, 20, 5, 72, 10
heap.popRoot()
console.log(heap.printHeap())//78, 75, 72, 73, 20, 5, 10  