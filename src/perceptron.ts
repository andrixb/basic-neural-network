import { Graph } from './graph.class';
import { Variable } from './variable.class';
import { Placeholder } from './placeholder.class';
import { multiply } from './ops/multiply.ops';
import { add } from './ops/add.ops';

export class Perceptron {
    private _graph: Graph;
    private _A: Variable;
    private _b: Variable;
    private _x: Placeholder;
    private _y: multiply;
    private _z: add;

    constructor() {
        this._init();
    }

    private _init() {
        this._graph = new Graph();

        this._A = new Variable(10);
        this._b = new Variable(1);
        this._x = new Placeholder();
        this._y = new multiply(this._A, this._x);
        this._z = new add(this._y, this._b);
    }

    get z() {
        return this._z;
    }
}
