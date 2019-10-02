// ============================================================================
// Interview Problem: Linked List Intersection
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Write a function linkedListIntersection that returns the node at which the 
// intersection of two linked lists begins, or null if there is no such 
// intersection.

// If there was guaranteed to be in intersection, could achieve in constant space.
  // Cycle two pointers until they point to the same node and return it
// Since there can be no intersection, we must track all nodes we've visited
// Thus, just traverse one link and track unique identifiers for each node
// Then, traverse second list and return first node that appears in set
// Runtime O(m + n) where m and n are the list lengths
// Space O(m) where m is the length of one list... a set is being used to track data
function linkedListIntersection(list1, list2) {
  // Initialize set
  const set = new Set();
  // Traverse list1, adding nodes to set
  let node = list1.head;
  while (node.next) {
    set.add(node);
    node = node.next;
  }
  // Traverse list2
  node = list2.head;
  while (node.next) {
    // Return first node found in set
    if (set.has(node)) return node;
    node = node.next;
  }
  // No intersection node was found
  return null;
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

// --------------------------------------
// Helper For Testing Only - Do Not Edit!
// --------------------------------------
var stringify = function(list) {
  var result = [];
  while(list !== null) {
    result.push(list.value);
    list = list.next;
  }
  return result.join("");
}

exports.Node = Node;
exports.LinkedList = LinkedList;
exports.linkedListIntersection = linkedListIntersection;
exports.stringify = stringify;
