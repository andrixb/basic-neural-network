import { Operation } from './operation.class';

export class add extends Operation {
    private _inputs: any[];

    constructor(x: any, y: any) {
        super([x, y]);
        this._inputs = [];
    }

    public compute(xVar, yVar){
        this._inputs.push([xVar, yVar]);
        return xVar + yVar;
    }
}
