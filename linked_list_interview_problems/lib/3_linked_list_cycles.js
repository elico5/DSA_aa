// ============================================================================
// Interview Problem: Linked List Cycles
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Given a Singly Linked List, write a function that returns true if the linked
// list contains a cycle, or false if terminates somewhere.
//
// ------------
// Constraints:
// ------------ 
//
// (1) Your function must run in linear time, O(n).
// (2) Your function must use constant space, O(1).
// (3) Do not mutate the linked list or it's nodes in any way.

// Given the class definition of our linked list, we can use the length to our advantage
// Simply traverse the list for the length of the list, and if the last node doesn't point to null, there must be a cycle
// Runtime O(n) where n is the length of the list
// Space O(1)
// 
// Usually, the linked list will not give you length, then:
// Traverse the linked list, adding each node to a set
// If tail node can be reached there is no cycle
// If a node appears in set there is a cycle
// Runtime O(n) where n is the list length
// Space O(n) where n is the list length
  // For both analyses, the worst case is that every node is touched once and there is no cycle
function hasCycle(linkedList) {
  // Traverse linked list
  let node = linkedList.head;
  let i = 1;
  while (i < linkedList.length) {
    node = node.next;
    i++;
  }
  // Return whether the tail was reached
  return node.next ? true : false;
}

// ----------------------------------------
// Given: Singly Linked List - Do Not Edit!
// ----------------------------------------
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

    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }

    this.tail = newNode;
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
exports.hasCycle = hasCycle;