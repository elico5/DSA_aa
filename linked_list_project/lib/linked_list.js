// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

// TODO: Implement a Singly Linked List class here
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // TODO: Implement the addToTail method here
    addToTail(val) {
        const newNode = new Node(val);
        if (this.length) {
            this.tail.next = newNode;
            this.tail = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    // TODO: Implement the removeTail method here
    removeTail() {
        if (!this.length) return undefined;
        let returnNode;
        if (this.length === 1) {
            returnNode = this.tail;
            this.head = null;
            this.tail = null;
        } else {
            let node = this.head;
            while (true) {
                if (node.next.next === null) {
                    returnNode = node.next;
                    node.next = null;
                    this.tail = node;
                    break;
                }
                node = node.next;
            }
        }
        this.length--;
        return returnNode;
    }

    // TODO: Implement the addToHead method here
    addToHead(val) {
        const newNode = new Node(val);
        if (this.length) {
            newNode.next = this.head;
            this.head = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    // TODO: Implement the removeHead method here
    removeHead() {
        if (!this.length) return undefined;
        const returnNode = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
        }
        this.length--;
        return returnNode;
    }

    // TODO: Implement the contains method here
    contains(target) {
        let flag = false;
        let node = this.head;
        while (node) {
            if (node.value === target) {
                flag = true;
                break;
            }
            node = node.next;
        }
        return flag;
    }

    // TODO: Implement the get method here
    get(index) {
        if (index > this.length - 1) return null;
        let i = 0;
        let node = this.head;
        while (i < index) {
            node = node.next;
            i++;
        }
        return node;
    }

    // TODO: Implement the set method here
    set(index, val) {
        const node = this.get(index);
        if (node) {
            node.value = val;
            return true;
        } else {
            return false;
        }
    }

    // TODO: Implement the insert method here
    insert(index, val) {
        if (index > this.length - 1 || index < 0) return false;
        const node = this.get(index - 1);
        const insertNode = new Node(val);
        insertNode.next = node.next;
        node.next = insertNode;
        this.length++;
        return true;
    }

    // TODO: Implement the remove method here
    remove(index) {
        if (index > this.length - 1) return undefined;
        const node = this.get(index - 1);
        const removedNode = node.next;
        node.next = removedNode.next;
        this.length--;
        return removedNode;
    }

    // TODO: Implement the size method here
    size() {
        return this.length;
    }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
