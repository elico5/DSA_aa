// ============================================================================
// Implementation Exercise: Stack
// ============================================================================

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

    push(value) {
        const newNode = new Node(value);
        if (!this.length) {
            [this.top, this.bottom] = [newNode, newNode];
        } else {
            newNode.next = this.top;
            this.top = newNode;
        }
        this.length++;
        return this.length;
    }

    pop() {
        if (!this.length) {
            return null;
        } else {
            const returnValue = this.top.value;
            if (this.length === 1) {
                this.top = null;
                this.bottom = null;
            } else {
                this.top = this.top.next;
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
exports.Stack = Stack;