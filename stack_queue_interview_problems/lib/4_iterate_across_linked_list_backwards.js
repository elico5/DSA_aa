// ============================================================================
// Interview Problem: Constant Time Stack Max
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Iterate over a Singly Linked List of primitives backwards. When finished, 
// return a string representing the original linked list's values backwards 
// in the following format:
//
//                             'A -> B -> C -> D' 
//
// ------------
// Constraints:
// ------------
//
// (1) Your function must be iterative, not recursive.
// (2) Your function must consume O(n) space.
// (3) Employee either a Stack, Queue, or some combination of the two in your
//     solution. (Implement any data structures you need, as you need them.)

// Can utilize a stack... reframe the problem accordingly
// You are stack-pushing every value in the list as your traverse it
// This way, the first element pushed to the stack is the last element pushed out
// That is, the ordering is reversed when pushing out from the stack
// 
// List is traversed once and the resultant stack is reversed, thus, runtime is linear O(n) where n is list length
// Space complexity is O(n) as one array is used as a stack
//
// Worth noting, that the order of output from stack-pushing is really just the stack's values reversed, so simplified below...
function iterateAcrossLinkedListBackwards(linkedList) {
    const stack1 = [];
    let node = linkedList.head;
    while (node) {
        stack1.push(node.value);
        node = node.next;
    }
    return stack1.reverse().map(ele => String(ele)).join(' -> ');
}

exports.iterateAcrossLinkedListBackwards = iterateAcrossLinkedListBackwards;
