const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes = [];
		this.sizeHeap = 0;
		
	}

	push(data, priority) {
        let node = new Node (data, priority);
        this.insertNode(node);
        this.shiftNodeUp(node);
        this.sizeHeap++;
	}

	pop() {
        if (!this.isEmpty()) {
            const popRoot = this.detachRoot();
            this.restoreRootFromLastInsertedNode(popRoot);
            this.shiftNodeDown(this.root);
            this.sizeHeap--;
            return popRoot.data;
        }
    }

	detachRoot() {
		const returnRoot = this.root;
		if (returnRoot === this.parentNodes[0]) {
			this.parentNodes.shift();
		}
		this.root = null;

		return returnRoot;
	}

	restoreRootFromLastInsertedNode(detached) {
		
	}

	size() {
        return this.sizeHeap;
	}

	isEmpty() {
        return this.sizeHeap === 0;
	}

	clear() {
        this.root = null;
        this.parentNodes = [];
        this.sizeHeap = 0;
	}

	insertNode(node) {
		if (!this.root) {
			this.root = node;
		} else {
            this.parentNodes[0].appendChild(node);
        }
        this.parentNodes.push(node);
        if(this.parentNodes[0].left && this.parentNodes[0].right) {
            this.parentNodes.shift();
        }
	}

	shiftNodeUp(node) {
		
	}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;
