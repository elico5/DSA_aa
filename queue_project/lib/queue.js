// ============================================================================
// Implementation Exercise: Queue
// ============================================================================

// Using list nodes allows for O(1) dequeue operation
// Using an array is O(n) as each element in queue must be shifted forwards

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.back = null;
        this.length = 0;
    }

    enqueue(value) {
        const newNode = new Node(value);
        if (!this.length) {
            [this.front, this.back] = [newNode, newNode];
        } else {
            this.back.next = newNode;
            this.back = newNode;
        }
        this.length++;
        return this.length;
    }

    dequeue() {
        if (!this.length) {
            return null;
        } else {
            const returnValue = this.front.value;
            if (this.length === 1) {
                this.front = null;
                this.back = null;
            } else {
                this.front = this.front.next;
            }
            this.length--;
            return returnValue;
        }
    }

    size() {
        return this.length;
    }
}

exports.Node = Node;
exports.Queue = Queue;