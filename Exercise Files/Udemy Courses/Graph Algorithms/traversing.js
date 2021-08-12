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