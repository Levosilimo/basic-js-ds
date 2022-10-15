const {NotImplementedError} = require('../extensions/index.js');

const {Node} = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
    constructor() {
        this.rootNode = null;
    }

    root() {
        return this.rootNode;
    }

    add(data) {
        if (!this.rootNode) {
            this.rootNode = new Node(data);
            return;
        }
        let nodePointer = this.rootNode;

        while (true) {
            if (data <= nodePointer.data) {
                if (null != nodePointer.left) {
                    nodePointer = nodePointer.left;
                    continue;
                } else {
                    nodePointer.left = new Node(data);
                    return;
                }
            }

            if (data > nodePointer.data) {
                if (nodePointer.right) {
                    nodePointer = nodePointer.right;
                } else {
                    nodePointer.right = new Node(data);
                    return;
                }
            }
        }
    }


    has(data) {
        return null != this.find(data);
    }

    find(data) {
        let nodePointer = this.rootNode;
        while (true) {
            if (data < nodePointer.data) {
                if (null != nodePointer.left) nodePointer = nodePointer.left;
                else return null;
            } else if (data > nodePointer.data) {
                if (null != nodePointer.right) nodePointer = nodePointer.right;
                else return null;
            } else {
                return nodePointer;
            }
        }
    }

    remove(data) {
        const recursiveAdd = (node) => {
            if (null == node) return;
            this.add(node.data);
            recursiveAdd(node.left);
            recursiveAdd(node.right);
        }

        if (!this.rootNode) {
            return;
        } else if (this.rootNode.data === data) {
            let left = this.rootNode.left;
            let right = this.rootNode.right;
            this.rootNode = left;
            recursiveAdd(right);

            return;
        }

        let nodePointer = this.rootNode;

        while (true) {
            if (data < nodePointer.data) {
                if (nodePointer.left) {
                    if (nodePointer.left.data === data) {
                        let left = nodePointer.left.left;
                        let right = nodePointer.left.right;
                        nodePointer.left = null;
                        recursiveAdd(left);
                        recursiveAdd(right);

                        return;
                    } else {
                        nodePointer = nodePointer.left;
                        continue;
                    }
                } else {
                    return;
                }
            }

            if (data > nodePointer.data) {
                if (nodePointer.right) {
                    if (nodePointer.right.data === data) {
                        let left = nodePointer.right.left;
                        let right = nodePointer.right.right;
                        nodePointer.right = null;
                        recursiveAdd(left);
                        recursiveAdd(right);
                        return;
                    } else {
                        nodePointer = nodePointer.right;
                    }
                } else {
                    return;
                }
            }
        }
    }


    min() {
        let nodePointer = this.rootNode;
        while (null != nodePointer.left) {
            nodePointer = nodePointer.left;
        }
        return nodePointer.data;
    }

    max() {
        let nodePointer = this.rootNode;
        while (null != nodePointer.right) {
            nodePointer = nodePointer.right;
        }
        return nodePointer.data;
    }
}

module.exports = {
    BinarySearchTree
};