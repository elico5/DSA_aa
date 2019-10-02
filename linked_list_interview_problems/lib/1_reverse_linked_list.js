// ============================================================================
// Interview Problem: Reverse a Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Given a Singly Linked List, write a function that reverses the order of the
// list's nodes.
//
// Note: You are guaranteed not to receive a linked list with cycles as input.
//
// ------------
// Constraints:
// ------------ 
//
// (1) Your function must run in linear time, O(n).
// (2) You must reverse the list *in place*. (i.e. Use constant space, O(1).)

// Traverse the linked list once to maintain O(n) runtime
// O(1) space achieved via 3 pointers during traversal
function reverseLinkedList(linkedList) {
  // Empty or single node list is already reversed
  if (linkedList.length <= 1) return linkedList;
  // Initialize pointers
  let prev = linkedList.head;
  let curr;
  let next = linkedList.head.next;
  // First node points to null
  prev.next = null;
  while (next !== null) {
    // Current node being operated on is next in line
    curr = next;
    // Next node to be operated on is after current node
    next = curr.next;
    // Current node now points to what was before it
    curr.next = prev;
    // Previous node reassigned for next iteration
    prev = curr;
  }
  // Swap class head/tail pointers
  [linkedList.tail, linkedList.head] = [linkedList.head, linkedList.tail];
  return linkedList;
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
}

exports.Node = Node;
exports.LinkedList = LinkedList;
exports.reverseLinkedList = reverseLinkedList;
