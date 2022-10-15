const {NotImplementedError} = require('../extensions/index.js');

const {ListNode} = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
    constructor() {
        this.queue = null;
    }

    getUnderlyingList() {
        return this.queue;
    }

    enqueue(value) {
        if (null == this.queue) {
            this.queue = new ListNode(value);
            return;
        }
        let nodePointer = this.queue;
        while (true) {
            if (null == nodePointer.next) {
                nodePointer.next = new ListNode(value);
                break;
            }
            nodePointer = nodePointer.next;
        }
    }

    dequeue() {
        if (null == this.queue) return null;
        if (this.queue) {
            let nodePointer = this.queue;
            this.queue = nodePointer.next;
            return nodePointer.value;
        }
    }
}

module.exports = {
    Queue
};
