// ============================================================================
// Interview Problem: StackQueue
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement your preferred Stack implementation, including the methods:
//
//   - Push 
//   - Pop 
//   - Size
//
// Then, implement a Queue by instantiating two Stack instances for storage.
//
// The StackQueue implementation should include the following methods:
//
//   - Enqueue
//   - Dequeue
//   - Size
//
// -----------
// Let's code!
// -----------

class Node {
    // TODO: Implement the Node class!
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    // TODO: Implement the Stack class!
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    push(node) {
        if (node.next) node.next = null;
        if (!this.length) {
            [this.top, this.bottom] = [node, node];
        } else {
            node.next = this.top;
            this.top = node;
        }
        this.length++;
        return this.length;
    }

    pop() {
        if (!this.length) return null;
        const returnNode = this.top;
        if (this.length === 1) {
            [this.top, this.bottom] = [null, null];
        } else {
            this.top = returnNode.next;
        }
        this.length--;
        return returnNode;
    }

    size() {
        return this.length;
    }

}

class StackQueue {
    // TODO: Implement the StackQueue class!
    constructor() {
        this.inStack = new Stack();
        this.outStack = new Stack();
        this.front = null;
        this.back = null;
    }

    enqueue(value) {
        const newNode = new Node(value);
        if (!this.size()) {
            [this.front, this.back] = [newNode, newNode];
        } else {
            this.back.next = newNode;
            this.back = newNode;
        }
        this.inStack.push(new Node(newNode.value));
        return this.size();
    }

    dequeue() {
        if (!this.front) {
            return null;
        } else if (this.size() === 1) {
            this.front = null;
            this.back = null;
        } else {
            this.front = this.front.next;
        }
        if (!this.outStack.size()) {
            while (this.inStack.size()) {
                this.outStack.push(this.inStack.pop());
            }
        }
        return this.outStack.pop();
    }

    size() {
        return this.inStack.size() + this.outStack.size();
    }
};

exports.Node = Node;
exports.Stack = Stack;
exports.StackQueue = StackQueue;
