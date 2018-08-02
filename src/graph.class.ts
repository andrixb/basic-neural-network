export class Graph  {
    public operations: any[];
    public placeholders: any[];
    public variables: any[];

    private static instance: Graph; 

    constructor() {
        this.operations = [];
        this.placeholders = [];
        this.variables = [];
    }

    static getInstance() {
        if(!Graph.instance) {
            Graph.instance = new Graph();
        }
        return Graph.instance;
    }
}
