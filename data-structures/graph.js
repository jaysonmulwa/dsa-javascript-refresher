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

/**
 * Graphs are represented with adjacency matrices _or_ adjacency lists.
 * Ajacency List (lists a node and its connected noted)
 * a : [ b, c ]
 * b : [ d
 * 
 * 
 * Adjacency matrix (matrix with 1s where there are connected nodes)
 *   a b c d
 * a 0 1 1 0
 * b 1 0 0 1
 * c 1 0 0 0
 * d 0 1 0 0
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

    //We can implement dfs iteratively with stack, and recursively 
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

    //Iteratively with queue
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




/**
 * !Problems
 */

let graph = {
    a: ['b', 'c'],
    b: ['d', 'e'],
    c: ['f'],
};

//!1. hasPath - dfs
hasPath = (graph, source, destination) => {
    if (source == destination) return true;
    for (let neighbour of graph[source]) {
        if (this.hasPath(graph, neighbour, destination) == true) {
            return true
        }
    }
    return false;
}

//!2. Convert edges list (for undirected graph) to adjacency list
let edges = [
    ['a', 'b'],
    ['a', 'c'],
    ['b', 'd'],
    ['b', 'e'],
    ['c', 'f'],
];

buildGraph = (edges) => {
    let graph = {};
    for (let edge of edges) {
        if (!graph[edge[0]]) graph[edge[0]] = [];
        if (!graph[edge[1]]) graph[edge[1]] = [];
        graph[edge[0]].push(edge[1]);
        graph[edge[1]].push(edge[0]);
    }
    return graph;
}

hasPath_withSet = (graph, source, destination, visited) => {
    if (visited.has(source)) return false; //no need to visit the same node twice
    if (source == destination) return true;
    for (let neighbour of graph[source]) {
        if (this.hasPath_withSet(graph, neighbour, destination, visited) == true) {
            return true
        }
    }
    return false;
}

const undirectedPath = (edges, nodeA, nodeB) => {
    let graph = buildGraph(edges);
    return hasPath_withSet(graph, nodeA, nodeB, new Set());
}


//!3. Connected components count -- undirected
const explore = (graph, current, visited) => {	
    if (visited.has(String(current))) return false;
    visited.add(String(current));

    for (let neighbour of graph[current]) {
        explore(graph, neighbour, visited);
    }

    return true;
}

const connectedComponents = (graph) => {
    let visited = new Set();
    let count = 0;

    for (let node in graph) {
        if (!visited.has(node)) {
            explore(graph, node, visited);
            count++;
        }
    }

    return count;
}


//!4. Largest component -- undirected
const largestComponent = (graph) => {
    let longest = 0;
    let visited = new Set();
    for (let node in graph) {
        const size = exploreSize(graph, node, visited);
        longest = Math.max(longest, size);
    }

    return longest;
}

const exploreSize = (graph, node, visited) => {
    if (visited.has(node)) return 0;
    visited.add(node);

    let size = 1;
    for (let neighbour of graph[node]) {
        size += exploreSize(graph, neighbour, visited);
    }

    return size;
}


//5. Shortest path -- bfs comes in handy

//6. Count islands = nested loop + dfs
//Time and space = O(rc)  -- row*col
const countIslands = (grid) => {
    let count = 0;
    const visited = new Set();
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            if (exploreGrid(grid, r, c, visited) == true) {
                count++;
            }
        }
    }

    return count;

}


const exploreGrid = (grid, row, col, visited) => {
    if (row < 0 || row >= grid.length || col < 0 || col >= grid[row].length) return false;
    if (grid[row][col] == W) return false;
    
    const pos  = `${row}-${col}`;
    if (visited.has(pos)) return false; //already traversed
    visited.add(pos);

    exploreGrid(grid, row + 1, col, visited);
    exploreGrid(grid, row - 1, col, visited);
    exploreGrid(grid, row, col + 1, visited);
    exploreGrid(grid, row, col - 1, visited);

    return true;
}


    