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

// To implement a queue using two stacks, we must allocate an enqueue stack as well as a dequeue stack...
// When enqueueing into the queue, we push elements to the enqueue stack
// When dequeueing from the queue, we check if the dequeue stack is empty...
// If the dequeue stack is empty, we must pop elements from the enqueue stack and push them to the dequeue stack until the enqueue stack is empty...
// When the dequeue stack is not empty, we simply pop off of it to dequeue an element from the queue
// 
// Runtime is amortized O(1) for operations (we will focus on dequeue), to see this, we consider the worst case with a queue consisting of n elements
// If all elements are in the enqueue stack, we must move all elements to the dequeue stack before we can dequeue an element
// This will result in O(n) operations to make one dequeue, but all subsequent dequeue operations will be constant time,
// since the dequeue stack will not be empty
// 
// Space is O(n)... despite the use of two arrays as stacks, n elements are allocated between the two where n is the number of elements in the stack queue

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
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
