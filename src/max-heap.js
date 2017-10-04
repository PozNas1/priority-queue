const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes = [];
	}

	push(data, priority) {
		var node = new Node(data, priority);
		this.insertNode(node);
		this.shiftNodeUp(node);
	}

	pop() {
	}

	detachRoot() {
		if (this.root){
			var top = this.root;
			if (this.parentNodes[0] === this.root){
				this.parentNodes.shift();
			}
			this.root = null;
			return top;
		}
	}

	restoreRootFromLastInsertedNode(detached) {
		var last = this.parentNodes.pop();
		this.root = last;
		if (last.parent === detached) {
			this.parentNodes.unshift(last);
		}
		last.remove();
		last.appendChild(detached.left);
		last.appendChild(detached.right);
	}

	size() {
		
	}

	isEmpty() {
		return this.root === null;
	}

	clear() {
		this.root = null;
		this.parentNodes = [];
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
		if (((node.left) && (node.left.priority > node.priority))
		 || ((node.right) && (node.right.priority > node.priority))) {
			var maxSon;
			if (node.left && node.right) {
				maxSon = (node.left.priority > node.right.priority)
				       ? node.left
				       : node.right;
			} else if (node.left) {
				maxSon = node.left;
			} else {
				maxSon = node.right;
			}
			var j = this.parentNodes.indexOf(maxSon);
			var i = this.parentNodes.indexOf(node);
			if (j !== -1){
				if (i !== -1){
					this.parentNodes[i] = maxSon;
					this.parentNodes[j] = node;
				} else {
					this.parentNodes[j] = node;
				}
			}
			if (node === this.root) {
				this.root = maxSon;
			}
			maxSon.swapWithParent();
			this.shiftNodeDown(node);
		}
	}
}

module.exports = MaxHeap;
