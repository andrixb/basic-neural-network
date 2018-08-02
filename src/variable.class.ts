import { Graph } from './graph.class';

export class Variable {
    private _value: any;
    private _output: any;
    private _outputNodes: any;

    private _graph = Graph.getInstance();

    constructor(initValue?: any) {
        if  (initValue) {
            this._value = initValue;
        }

        this._outputNodes = [];
        this._graph.variables.push(this);
    }

    get value() {
        return this._value;
    }

    set value(newValue: any) {
       this._value = newValue;
    }

    get output() {
        return this._output;
    }

    set output(newValue: any) {
       this._output = newValue;
    }
}
