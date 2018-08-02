import { Graph } from './graph.class';

export class Placeholder {
    private _outputNodes: any[];
    private _output: any;
    
    private _graph = Graph.getInstance();

    constructor() {
        this._outputNodes = [];
        this._graph.placeholders.push(this);
    }

    get output() {
        return this._output;
    }

    set output(value: any) {
        this._output = value;
    }
}
