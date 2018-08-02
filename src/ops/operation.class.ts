export class Operation {
    private _inputNodes: any;
    private _outputNodes: any[];

    constructor(inputNodes: any[]){
        this._outputNodes = [];
        this._inputNodes = inputNodes;
        
        this._init();
    }

    private _init() {
        for (let node in this._inputNodes) {
            this._outputNodes.push(node);
        }
    }

    get inputNodes() {
        return this._inputNodes;
    }

    set inputNodes(value: any) {
        this._inputNodes.push(value);
    }

    get output() {
        return this._outputNodes;
    }

    set output(value) {
        this._outputNodes.push(value);
    }
}
