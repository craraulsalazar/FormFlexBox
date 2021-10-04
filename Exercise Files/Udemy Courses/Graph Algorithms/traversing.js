// Graph Algorithms
// for technical interviews
// https://www.youtube.com/watch?v=tWVWeAqZ0WU&t=4012s


const graph = {
    a: ['b','c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e:[],
    f:[]
}

const depthFirstPrint =(graph, source) => {

    const stack = [source];

    while (stack.length > 0) {
        var current = stack.pop();
        console.log(current);

        for(let neighbor of graph[current]){
            stack.push(neighbor);
        }

    }

}

//doing recursive function
const depthFirstPrint_Recursive =(graph, source) => {
    console.log(source);

    for(let neighbor of graph[source]){
        depthFirstPrint_Recursive(graph, neighbor);
    }

}

//doing BreathFirst algorithm function
const breathFirstPrint =(graph, source) => {

    const queue = [source];

    while (queue.length > 0) {
        const current = queue.shift();
        console.log(current);

        for(let neighbor of graph[current]){
            queue.push(neighbor);
        }

    }
    

}

//starting at node 'a'
//depthFirstPrint(graph,'a');
//depthFirstPrint_Recursive(graph,'a');
//breathFirstPrint(graph,'a');


// --------------------------------

const graph_src_dest = {
    f: ['g','i'],
    g: ['h'],
    h: [],
    i: ['g','k'],
    j:['i'],
    k:[]
}


const hasPath = (graph, src, dst) => {
    if (src===dst) return true;

    for(let neighbor of graph[src]){
        if (hasPath(graph,neighbor, dst) === true) {
            return true;
        }

    }

    return false;

}

const hasPath_breathFirstPrint =(graph, src, dst) => {

    const queue = [src];

    while (queue.length > 0) {
        const current = queue.shift();
        console.log(current);

        if (current === dst) return true;
        for(let neighbor of graph[current]){
            queue.push(neighbor);
        }

    }
    
    return false;

}


/*
console.log(hasPath(graph_src_dest,'f','k'));
console.log(hasPath(graph_src_dest,'j','f'));
console.log(hasPath_breathFirstPrint(graph_src_dest,'f','k'));
console.log(hasPath_breathFirstPrint(graph_src_dest,'j','f'));
*/


//Undirected Path Array
const edges = [
    ['i','j'],
    ['k','i'],
    ['m','k'],
    ['k','l'],
    ['o','n']
]

//Undirected Path object
//Adjacency List
const graph_Adjacency_List = {
    i:['j','k'],
    j:['i'],
    k:['i','m','l'],
    m:['k'],
    l:['k'],
    o:['n'],
    n:['o']
}

const hasPathWithVisitedFlag = (graph, src, dst, visited) => {
    if (src===dst) return true;
    if (visited.has(src)) return false;

    visited.add(src);

    for(let neighbor of graph[src]){
        if (hasPathWithVisitedFlag(graph,neighbor, dst, visited) === true) {
            return true;
        }

    }

    return false;

}


const underectedPath = (edges, nodeA, nodeB) =>{
    const graph = buildGraph(edges);
    console.log(graph);

    if (hasPathWithVisitedFlag(graph,nodeA,nodeB,new Set()) === true)
    {
        return true;
    }

    return false;
}


const buildGraph = (edges) => {

    const graph = {};

    for(let edge of edges){
        const [a,b] = edge;
        if (!(a in graph)) graph[a] = [];
        if (!(b in graph)) graph[b] = [];

        graph[a].push(b);
        graph[b].push(a);

        // console.log(edge);
        // console.log(graph[a]);
        // console.log(graph[b]);
        // console.log(graph);

    }

    return graph;

}

//console.log( underectedPath(edges,'j','m'));
// --------------------------------
// Counting Connected Components

const connectedComponentCount = (graph)=> {
    const visited = new Set();
    let count = 0;

    for(let node in graph){
        //console.log(visited);        
        if (explore(graph, node,visited)=== true){
            count+=1;
        }
    }

    return count;
}

const explore = (graph, current, visited) => {
    if (visited.has(String(current))) return false;
    visited.add(String(current));

    for(let neighbor of graph[current]){
        explore(graph, neighbor,visited)
    }

    return true;
}

var connectComponent_List = {
    0:[8,1,5],
    1:[0],
    5:[0,8],
    8:[0,5],
    2:[3,4],
    3:[2,4],
    4:[3,2]
}

 
//console.log(connectedComponentCount(connectComponent_List));

//Finding Largest Component for disconnected components

var LargestComponent_List = {
    0:[8,1,5],
    1:[0],
    5:[0,8],
    8:[0,5],
    2:[3,4],
    3:[2,4],
    4:[3,2]
}

const largestComponent = (graph) => {
    const visited = new Set();
    let longest = 0;
    for (let node in graph){
        const size = exploreSize(graph, node, visited);
        if (size > longest){
            longest = size;
        }
    }
    return longest;
}

const exploreSize = (graph, node, visited) => {
    if (visited.has(node)) return 0;

    visited.add(node);
    let size = 1;

    for(let neighbor of graph[node]){
        size+=exploreSize(graph, neighbor, visited);
    }

    return size;
}

//console.log(largestComponent(LargestComponent_List));


//Find Shortest Path

const edges_shortestPath = [
    ['w','x'],
    ['x','y'],
    ['z','y'],
    ['z','v'],
    ['w','v']
]

const edges_shortestPath_sample2 = [
    ['a','c'],
    ['a','b'],
    ['c','b'],
    ['c','d'],
    ['b','d'],
    ['e','d'],
    ['g','f'],
]


const shortestPath = (edges_shortestPath, nodeA, nodeB)=> {
    const graph = buildGraph(edges_shortestPath);
    console.log(graph)

    if (!(nodeA in graph)) return -2 
    if (!(nodeB in graph)) return -3 

    const visited = new Set([nodeA]);
    const queue = [[nodeA,0]];

    while (queue.length > 0) {
        const [node, distance] = queue.shift();
        console.log([node, distance])

        if (node=== nodeB) return distance;


        for (let neighbor of graph[node])
        {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push([neighbor, distance+1]);
            }
            
            
        }
            
    }

    return -1;
}

// console.log(shortestPath(edges_shortestPath,'z','v'));
// console.log(shortestPath(edges_shortestPath,'x','v'));
// console.log(shortestPath(edges_shortestPath_sample2,'a','e'));
// console.log(shortestPath(edges_shortestPath_sample2,'b','g'));
// console.log(shortestPath(edges_shortestPath_sample2,'z','g'));
// console.log(shortestPath(edges_shortestPath_sample2,'b','t'));


// Island Count

const grid = [
    ['W','L','W','L','L'],
    ['W','L','W','W','W'],
    ['W','W','W','L','W'],
    ['W','W','L','L','W'],
    ['L','W','W','L','L'],
    ['L','L','W','W','L'],

];

const islandCount = (grid) => {

    const visited = new Set();
    let count = 0;
    for(let r = 0; r<grid.length; r+=1){

        for(let c=0; c<grid[0].length; c+=1){

            if (exploreGrid(grid,r,c, visited) === true) {
                count+=1;
            }

        }

    }

    return count;

}

const exploreGrid =(grid,r,c, visited) =>{
    const rowInbounds = 0 <= r && r <grid.length;
    const colInbounds = 0 <= c && c <grid.length;

    if (!rowInbounds || !colInbounds) return false;

    //don't count water blocks
    if (grid[r][c] == 'W') return false;


    const pos = r + ',' + c;
    if (visited.has(pos)) return false;
    //cycle prevention for infinte loop
    visited.add(pos);

    exploreGrid(grid,r-1,c, visited);
    exploreGrid(grid,r+1,c, visited);
    exploreGrid(grid,r,c-1, visited);
    exploreGrid(grid,r,c+1, visited);

    return true;
}


// console.log(islandCount(grid));

// Graph Algorithms for Technical Interviews - Full Course
// https://www.youtube.com/watch?v=tWVWeAqZ0WU&t=4012s

//Minimum Island Count

const isLandgrid = [
    ['W','L','W','W','W'],
    ['W','L','W','W','W'],
    ['W','W','W','L','W'],
    ['W','W','L','L','W'],
    ['L','W','W','L','L'],
    ['L','L','W','W','L'],

];

const minimumIsland = (grid) => {

    const visited = new Set();

    let minSize = Infinity;
    for(let r = 0; r<grid.length; r+=1){

        for(let c=0; c<grid[0].length; c+=1){

            const size = exploreSizeMinimum(grid, r,c, visited);
            if (size > minSize && size > 0)
            {
                minSize = size;
            }

        }

    }

    return minSize;
}

const exploreSizeMinimum = (grid, r, c, visited)=> {

    const rowInbounds = 0 <= r && r <grid.length;
    const colInbounds = 0 <= c && c <grid.length;

    if (!rowInbounds || !colInbounds) return 0;

    //don't count water blocks
    if (grid[r][c] == 'W') return 0;

    const pos = r + ',' + c;
    if (visited.has(pos)) return 0;
    //cycle prevention for infinte loop
    visited.add(pos);

    let size = 1;
    size += exploreSizeMinimum(grid,r-1,c, visited);
    size += exploreSizeMinimum(grid,r+1,c, visited);
    size += exploreSizeMinimum(grid,r,c-1, visited);
    size += exploreSizeMinimum(grid,r,c+1, visited);

    return size;

}

console.log(exploreSizeMinimum(isLandgrid));