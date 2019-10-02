// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================

class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addToTail(val) {
        const newNode = new Node(val);
        if (this.length) {
            this.tail.next = newNode;
            this.tail = newNode;
        } else {
            // List is empty
            this.head = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    removeTail() {
        // Can't remove the tail from an empty list
        if (!this.length) return undefined;
        let returnNode;
        // Only a single node in list
        if (this.length === 1) {
            returnNode = this.tail;
            this.head = null;
            this.tail = null;
        } else {
            // Traverse list until tail is found and remove it
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

    addToHead(val) {
        const newNode = new Node(val);
        if (this.length) {
            newNode.next = this.head;
            this.head = newNode;
        } else {
            // List is empty
            this.head = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    removeHead() {
        // Can't remove head off of empty list
        if (!this.length) return undefined;
        const returnNode = this.head;
        // One node in list
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            // The class carries reference to the head...
            // Assign that reference to whatever is next in line
            this.head = this.head.next;
        }
        this.length--;
        return returnNode;
    }

    contains(target) {
        let flag = false;
        let node = this.head;
        // Traverse list until target is found or tail is reached
        while (node) {
            if (node.value === target) {
                flag = true;
                break;
            }
            node = node.next;
        }
        return flag;
    }

    get(index) {
        // No node outside of index greater than length
        if (index > this.length - 1) return null;
        let i = 0;
        let node = this.head;
        // Traverse list until index is reached
        while (i < index) {
            node = node.next;
            i++;
        }
        return node;
    }

    set(index, val) {
        // Find node at index
        const node = this.get(index);
        if (node) {
            // If it exists change its value
            node.value = val;
            return true;
        } else {
            return false;
        }
    }

    insert(index, val) {
        // Can't insert at a negative index or an index greater than the end of list
        if (index > this.length - 1 || index < 0) return false;
        // Get node at index before and change its reference pointers
        const node = this.get(index - 1);
        const insertNode = new Node(val);
        insertNode.next = node.next;
        node.next = insertNode;
        this.length++;
        return true;
    }

    remove(index) {
        if (index > this.length - 1) return undefined;
        // Get node at index before and change its reference pointers
        const node = this.get(index - 1);
        const removedNode = node.next;
        node.next = removedNode.next;
        this.length--;
        return removedNode;
    }

    size() {
        return this.length;
    }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
