/**
 * graph definitions:
 * Edges = (v1, v2) , (v2, v3) = Have a cost or weight between them
 * Verices = v1, v2, v3
 * Path = sequence of vertices in a graph
 * loop=  a path that consists of a vertex to itself - Is of length 0. 
 * directed graph = A graph whose pairs are ordered(indicated by an arrow to show flow from one vertex to another.)
 * Two vertices are considered strongly connected if there is a path from the first vertex to the second vertex, and vice versa.
 * 
 * Edges in a graph can be reprsented via an adjacency list or adjacency matrix;
 * 
 * 
 * Searching: depth-first search, breadth first search.
 * dfs = recusrson
 * bfs = queue-like structure.
 * 
 * Shortest path uses bfs
 * Topological sorting uses dfs
 */

class Vertex {
    constructor (label){
        this.label = label;
        this.wasVisited = false;
    }
}

class Graph {
    constructor (v) {
        this.vertices = v;
        this.edges = 0;
        this.adj = [];
        for (var i = 0; i < this.vertices; ++i) {
            this.adj[i] = [];
            this.adj[i].push("");
        }
        this.addEdge = addEdge;
        this.showGraph = showGraph;

        //for search
        this.marked = [];
        for (var i = 0; i < this.vertices; ++i) {
            this.marked[i] = false;
        }

        //bfs
        this.edgeTo = [];

        //topsort
        this.vertexList = [];

    }
    addEdge = (v,w) => {
        this.adj[v].push(w);
        this.adj[w].push(v);
        this.edges++;
    }

    showGraph = () => {
        for (var i = 0; i < this.vertices; ++i) {
            putstr(i + " -> ");
            for (var j = 0; j < this.vertices; ++j) {
                if (this.adj[i][j] != undefined){
                    putstr(this.adj[i][j] + ' ');
                } 
            }
            print();
        }
    }

    dfs = (v) =>{
        this.marked[v] = true;

        if(this.marked[v] != null){
            console.log(`visited ${this.marked[v]}`);
        }

        for(let w in this.adj[v]){
            if(this.marked[w] == false){
                this.dfs(w);
            }
            
        }

    }

    bfs = (s) => {
        var queue = [];
        this.marked[s] = true;
        queue.push(s); // add to back of queue
        while (queue.length > 0) {
            var v = queue.shift(); // remove from front of queue
            if (v !== undefined) {
                print("Visited vertex: " + v);
            }

            for (let w in this.adj[v]) {
                if (!this.marked[w]) {
                    this.edgeTo[w] = v;
                    this.marked[w] = true;
                    queue.push(w);
                }
            }
        }
    }

    topologicalSort = () => {
        var stack = [];
        var visited = [];
        for (var i = 0; i < this.vertices; i++) {
            visited[i] = false;
        }
        for (var i = 0; i < this.vertices; i++) {
            if (visited[i] == false) {
                this.topSortHelper(i, visited, stack);
            }
        }
        for (var i = 0; i < stack.length; i++) {
            if (stack[i] != undefined && stack[i] != false) {
                print(this.vertexList[stack[i]]);
            }
        }
    }

    topSortHelper = (v, visited, stack) => {
        visited[v] = true;
        for(let w in this.adj[v]) {
            if (!visited[w]) {
            this.topSortHelper(visited[w], visited, stack);
            }
        }
        stack.push(v);
    }
       
       
}