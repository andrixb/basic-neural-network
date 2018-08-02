import { Operation } from './operation.class';
import * as math from 'mathjs';

export class matmul extends Operation {
    private _inputs: any[];

    constructor(x: any, y: any) {
        super([x, y]);
        this._inputs = [];
    }

    public compute(aMat, bMat){
        this._inputs.push([aMat, bMat]);
        return math.multiply(aMat, bMat);
    }
}