import { Graph } from './graph.class';
import { Variable } from './variable.class';
import { Placeholder } from './placeholder.class';
import { multiply } from './ops/multiply.ops';
import { add } from './ops/add.ops';

export class Perceptron {
    private _graph: Graph;
    private A: Variable;
    private b: Variable;
    private x: Placeholder;
    private y: multiply;
    private _z: add;

    constructor() {
        this._init();
    }

    private _init() {
        this._graph = new Graph();

        this.A = new Variable(10);
        this.b = new Variable(1);
        this.x = new Placeholder();
        this.y = new multiply(this.A, this.x);
        this._z = new add(this.y, this.b);
    }

    get z() {
        return this._z;
    }
}
