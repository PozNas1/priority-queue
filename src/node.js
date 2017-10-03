class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.left = null;
		this.right = null;
		this.parent = null;
	}

	appendChild(node) {
		if (!this.left) {
			node.parent = this;
			this.left = node;
		}
		else if (!this.right) {
			node.parent = this;
			this.right = node;
		}
	}

	removeChild(node) {
		if (node === this.left) {
			node.parent = null;
			this.left = null;
		}
		else if (node === this.right) {
			node.parent = null;
			this.right = null;
		}
		else throw new Error('This parent do not have the child');
	}

	remove() {
		if (this.parent) {
			this.parent.removeChild(this);
		}
	}

	swapWithParent() {
		if (this.parent) {
			var ded = this.parent.parent;
			var papa = this.parent;
			var bro;
			var leftSon = this.left;
			var rightSon = this.right;

			if (ded) {
				if (this.parent === ded.left) {
					ded.left = this;
				} else if (this.parent === ded.right) {
					ded.right = this;
				}
			}

			if (this === papa.left){
				bro = this.parent.right;
				this.right = bro;
				this.left = papa;
			} else if (this === papa.right){
				bro = this.parent.left;
				this.left = bro;
				this.right = papa;
			}

			this.parent = ded;

			if (bro) { bro.parent = this };
			papa.parent = this;
			papa.left = leftSon;
			papa.right = rightSon;
			if (leftSon) { leftSon.parent = papa };
			if (rightSon) { rightSon.parent = papa };
		}
	}
}

module.exports = Node;
