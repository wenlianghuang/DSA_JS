class Graph {
    constructor(){
        this.adjacencyList = {};
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = [];
        }else{
            return "Vertex already exists";
        }
    }

    addEdge(vertex1,vertex2){
        if(this.adjacencyList[vertex1]){
            if(this.adjacencyList[vertex2]){
                this.adjacencyList[vertex1].push(vertex2);
                this.adjacencyList[vertex2].push(vertex1);
            }else{
                return "Vertex 2 does not exist";
            }
        }else{
            return "Vertex 1 does not exist";
        }
    }

    removeVertex(vertex){
        if(this.adjacencyList[vertex]){
            this.adjacencyList[vertex].forEach(function(item){
                this.removeEdge(vertex,item);
                delete this.adjacencyList[vertex];
            });
        }else{
            return "Vertex does not exist";
        }
    }
    
    removeEdge(vertex1,vertex2){
        if(this.adjacencyList[vertex1]){
            if(this.adjacencyList[vertex2]){
                this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(function(item){
                    return item !== vertex2;
                });
                this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(function(item){
                    return item !== vertex1;
                });
            }else{
                return "Vertex 2 does not exist";
            }
        }else{
            return "Vertex 1 does not exist";
        }
    }
    printGraph(){
        console.log(this.adjacencyList);
    }

    // BFS
    bfs(start){
        const queue = [start];
        const result = [];
        const visited = {};

        visited[start] = true;
        let currentVertex;
        while(queue.length){
            currentVertex = queue.shift(); // 取出第一個元素然後刪掉
            result.push(currentVertex);
            this.adjacencyList[currentVertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }
        return result;
    }

    // DFS
    dfs(start){
        const result = [];
        const stack = [start];
        const visited = {};
        visited[start] = true;
        let currentVertex;
        while(stack.length){
            currentVertex = stack.pop(); // 取出最後一個元素然後刪掉
            result.push(currentVertex);
            this.adjacencyList[currentVertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    visited[neighbor] = true;
                    stack.push(neighbor);
                }
            }); 
        } //當stack不為空時
        return result;
    }

}

let graph = new Graph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B');
graph.addEdge('A', 'D');
graph.addEdge('A', 'E');
graph.addEdge('B', 'C');
graph.addEdge('D', 'E');
graph.addEdge('E', 'F');
graph.addEdge('E', 'C');
graph.printGraph();

console.log(graph.bfs('A')); // [ 'A', 'B', 'D', 'E', 'C', 'F' ]
console.log(graph.dfs('A')); // [ 'A', 'E', 'F', 'C', 'B', 'D' ]