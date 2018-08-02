import { Operation } from './ops/operation.class';

export function traversePostorder(operation: Operation) {
    let nodesPostorder = [];

    function recurse(node: Operation) {
        if (node) {
            for (let inputNode in node.inputNodes) {
                recurse(node.inputNodes[inputNode]);
            }
        }
        nodesPostorder.push(node);
    }

    recurse(operation);

    return nodesPostorder;
}
