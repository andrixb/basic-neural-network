import { traversePostorder } from './traverse-postorder';
import { Operation } from './ops/operation.class';
import { Placeholder } from './placeholder.class';
import { Variable } from './variable.class';

export class Session {
    private _nodesPostorder: any;

    constructor() {}
    
    run(operation: Operation, feedDict = {}) {
        this._nodesPostorder = traversePostorder(operation);

        for (let node in this._nodesPostorder) {
            let dictIndex = 0;
            let currentNode = this._nodesPostorder[node];

            if (currentNode instanceof Placeholder) {
                currentNode.output = feedDict[dictIndex];
                dictIndex++;
            } else if (currentNode instanceof Variable) {
                currentNode.output = currentNode.value;
            } else {
                for (let inputNode in currentNode.inputNodes) {
                    if (currentNode.inputNodes[inputNode].output !== undefined || 
                        currentNode.inputNodes[inputNode].output !== NaN) {
                        currentNode.input = currentNode.inputNodes[inputNode].output;
                    }
                }
                currentNode.output = currentNode.compute(currentNode.input);
                // the output is not correct. check what goes in the inputs of the Operation
                console.log(currentNode.output)
            }
        }
        return operation.output;
    }
}
