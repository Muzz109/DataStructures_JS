class Graph{
    constructor(){
        this.numberOfNodes = 0; // to keep track of vertex
        this.adjacentList = {};   // object
    }

    addvertex(node){
        this.adjacentList[node] = [];
        this.numberOfNodes++;

    }
    addEdge(node1,node2){
        //undirected graph
        this.adjacentList[node1].push(node2);
        this.adjacentList[node2].push(node1);
    }
}