class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(v) {
    if (!this.adjacencyList[v]) this.adjacencyList[v] = [];
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  // 정확한 버전
  iterativeDFS(v) {
    const result = [];
    const stack = [v];
    const visited = {};

    while (stack.length) {
      const current = stack.pop();

      if (visited[current]) continue;

      visited[current] = true;

      result.push(current);

      this.adjacencyList[current].forEach((neighbor) => {
        if (!visited[neighbor]) {
          stack.push(neighbor);
        }
      });
    }

    return result;
  }

  depthFirstIterative(start) {
    const stack = [start];
    const result = [];
    const visited = { [start]: true };
    const adjacencyList = this.adjacencyList;
    let currentVertex;

    while (stack.length) {
      currentVertex = stack.pop();
      result.push(currentVertex);
      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }
    return result;
  }

  recursiveDFS(v) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;

    (function dfs(v) {
      visited[v] = true;
      result.push(v);
      adjacencyList[v].forEach((neighbor) => {
        if (!visited[neighbor]) {
          dfs(neighbor);
        }
      });
    })(v);

    return result;
  }

  iterativeBFS(v) {
    const result = [];
    const queue = [v];
    const visited = { [v]: true };

    while (queue.length > 0) {
      const current = queue.shift();
      result.push(current);

      this.adjacencyList[current].forEach((el) => {
        if (!visited[el]) {
          queue.push(el);
          visited[el] = true;
        }
      });
    }
    console.log(result);
  }
}

const graph = new Graph();

graph.addVertex("a");
graph.addVertex("b");
graph.addVertex("c");
graph.addVertex("d");
graph.addVertex("e");
graph.addVertex("f");
graph.addVertex("g");

graph.addEdge("a", "b");
graph.addEdge("a", "c");
graph.addEdge("a", "d");
graph.addEdge("b", "e");
graph.addEdge("b", "f");
graph.addEdge("c", "d");
graph.addEdge("f", "g");

console.log(graph.iterativeDFS("a"));
console.log(graph.depthFirstIterative("a"));
