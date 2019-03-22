class Node {
    constructor(data, priority) {
        this.data = data;
        this.priority = priority;
        this.parent = null;
        this.left = null;
        this.right = null;
    }

    appendChild(node) {
        if (this.left && this.right) return;
        if (this.left) {
            this.right = node;
            this.right.parent = this;
        } else {
            this.left = node;
            this.left.parent = this;
        }
    }

    removeChild(node) {
        if (this.left === node) {
            this.left.parent = null;
            this.left = null;
            return;
        }
        if (this.right === node) {
            this.right.parent = null;
            this.right = null;
            return;
        }
        throw new Error("Error");
    }

    remove() {
        if (this.parent) {
            this.parent.removeChild(this);
        }
    }

    swapWithParent() {
        if (!this.parent) return;

        const thisNode = this;
        const thisLeft = this.left;
        const thisRight = this.right;
        const thisParent = this.parent;

        if (this.parent.left === this) {
            this.left = this.parent;
            this.right = this.parent.right;
            if (this.right) {
                this.right.parent = thisNode;
            }
        } else {
            this.right = this.parent;
            this.left = this.parent.left;
            this.left.parent = thisNode;
        }

        this.parent.left = thisLeft;
        this.parent.right = thisRight;
        if (this.parent.left) this.parent.left.parent = this.parent;
        if (this.parent.right) this.parent.right.parent = this.parent;
        if (this.parent.parent) {
            if (this.parent.parent.left === thisParent) {
                this.parent.parent.left = thisNode;
            } else {
                this.parent.parent.right = thisNode;
            }
        }
        this.parent = this.parent.parent;
        if (this.left === thisParent) {
            this.left.parent = thisNode;
        } else {
            this.right.parent = thisNode;
        }
    }
}

module.exports = Node;
