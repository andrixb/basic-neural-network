import { traversePostorder } from './traverse-postorder';
import { Operation } from './ops/operation.class';
import { Placeholder } from './placeholder.class';
import { Variable } from './variable.class';

export class Session {
    private _nodesPostorder: any;

    constructor() {
    //     this._nodesPostorder = new Operation();
    }
    
    run(operation: Operation, feedDict = {}) {
        this._nodesPostorder = traversePostorder(operation);

        for (let node in this._nodesPostorder) {
            let currentNode = this._nodesPostorder[node];

            if (currentNode instanceof  Placeholder) {
                currentNode.output = feedDict[node];
            } else if (currentNode instanceof Variable) {
                currentNode.output = currentNode.value;
            } else {
                for (let inputNode in currentNode.inputNodes) {
                    currentNode.inputNodes.push(currentNode[inputNode]);
                }
                currentNode.output = currentNode.compute(currentNode.input);
            }
        }

        return operation.output;
    }
}
