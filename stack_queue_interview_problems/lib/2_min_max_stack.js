// ============================================================================
// Interview Problem: Constant Time Stack Max
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Modify the definition of the Stack class provided to create an enhanced 
// version of a Stack data structure called MinMaxStack.
//
// A MinMaxStack has all of the same behavior as a Stack, but can also return
// the node with the minimum or maximum value in constant time.
//
// You may alter any of the original Stack's methods, including the 
// constructor.
//  
// Values of nodes of the MinMaxStack are always guaranteed to be numbers.
//
//
// ------------
// Constraints:
// ------------
//
// (1) All MinMaxStack methods must run in constant time, O(1).

// To implement a MixMaxStack, simply track the minimum and maximum at insertion for each node/element...
// Then, the minimum and maximum of the entire stack are encoded in the top element
// Code below uses nodes to allow for stack elements to carry data references with ease
class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.max = null;
        this.min = null;
    }
}

class MinMaxStack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    push(val) {
        const newNode = new Node(val);
        if (!this.top) {
            [newNode.max, newNode.min] = [newNode, newNode];
            [this.top, this.bottom] = [newNode, newNode];
        } else {
            const prev = this.top;
            newNode.value > prev.max.value ? newNode.max = newNode : newNode.max = prev.max;
            newNode.value < prev.min.value ? newNode.min = newNode : newNode.min = prev.min;
            newNode.next = prev;
            this.top = newNode;
        }
        return ++this.length;
    }

    pop() {
        if (!this.top) {
            return null;
        }
        const temp = this.top;
        if (this.top === this.bottom) {
            this.bottom = null;
        }
        this.top = this.top.next;
        this.length--;
        return temp;
    }

    size() {
        return this.length;
    }

    min() {
        if (!this.length) return null;
        return this.top.min;
    }

    max() {
        if (!this.length) return null;
        return this.top.max;
    }
}

exports.Node = Node;
exports.MinMaxStack = MinMaxStack;
