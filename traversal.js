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

  recursiveDFS() {}

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

graph.iterativeBFS("a");
