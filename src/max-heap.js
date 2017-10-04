const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes = [];
	}

	push(data, priority) {

	}

	pop() {
		if (this.heap){
			return this.data;
		}
		
	}

	detachRoot() {
		
	}

	restoreRootFromLastInsertedNode(detached) {
		
	}

	size() {
		
	}

	isEmpty() {
		
	}

	clear() {
		
	}

	insertNode(node) {
		if (this.root){
			this.parentNodes[0].appendChild(node);
			this.parentNodes.push(node);
			if (this.parentNodes[0].right){
				this.parentNodes = this.parentNodes.slice(1);
			}
		} else {
			this.root = node;
			this.parentNodes.push(this.root);
		}
	}

	shiftNodeUp(node) {
		if ((node.parent) && (node.priority > node.parent.priority)) {
			if (this.root === node.parent) {
				this.root = node;
			}
			var i = this.parentNodes.indexOf(node.parent);
			var j = this.parentNodes.indexOf(node);
			if (j !== -1){
				if (i !== -1){
					this.parentNodes[i] = node;
					this.parentNodes[j] = node.parent;
				} else {
					this.parentNodes[j] = node.parent;
				}
			}
			node.swapWithParent();
			this.shiftNodeUp(node);
		}

	}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;
