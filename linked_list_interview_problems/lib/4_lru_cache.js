// ============================================================================
// Interview Problem: Design and Implement an LRU Cache
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Given the implementation of a Doubly Linked List, design and implement 
// an LRU, or Least Recently Used, cache.
//
// ------------
// Explanation:
// ------------
//
// An LRU Cache is a data structure valued for its constant time read and write
// operations. Its methods, get(key) and set(key, val), are both O(1), just
// like a Hash Table.
//
// However, unlike a Hash Table, instead of re-sizing once it reaches its
// maximum capacity for stored items, it instead removes the least recently
// used item from the cache, also in O(1) time.
//
// NOTE: We determine the item that is "Least Recently Used" by its most-recent
// "get" time, not just by its creation time!

// Basically, to create an LRU Cache, we combine the hash map data structure with a doubly linked list
// This allows for O(1) lookup, insertion, deletion, and promotion
// Store cache items (keys, values) in a hash map, and each cache item has a node reference
// If the cache item is accessed, it's node reference is pushed to the front of our linked list
// If a cache item is inserted, the least used item in the list is removed, and a new item is created and pushed to front
//
// Briefly: a hash map allows for constant key value look up
// Briefly: a doubly linked list allows for constant adjustment of relative orders of use recency for items in cache
class LRUCacheItem {
  constructor(val = null, key = null) {
    this.val = val;
    this.key = key;
    this.node = null;
  }
}

class LRUCache {
  constructor(limit) {
    // Hash map to track cache items
    this.items = {};
    // Doubly Linked List to track ordering of cache items
    this.ordering = new List();
    this.limit = limit;
    this.length = 0;
  }

  size() {
    return this.length;
  }

  get(key) {
    if (!this.items[key]) return null;
    const item = this.items[key];
    // Promote the item as it was recently used
    this.promote(item);
    return item.val;
  }

  set(key, val) {
    let item;
    // Set an existing item (item with that key exists already)
    if (this.items[key]) {
      item = this.items[key];
      item.val = val;
      // Refresh ordering
      this.promote(item);
    } else {
      // Set a new item (no item exists at that key)
      // Make space if necessary
      if (this.isFull()) this.prune();
      item = new LRUCacheItem(val, key);
      item.node = this.ordering.unshift(item);
      this.items[key] = item;
      this.length += 1;
    }
  }

  isFull() {
    return this.length >= this.limit;
  }

  prune() {
    // Remove oldest element from list
    const oldest = this.ordering.pop();
    // Delete item that exists in cache at that key
    delete this.items[oldest.key];
    // Decrement length
    this.length = Math.max(0, this.length - 1);
  }

  promote(item) {
    // Move node for item to front of linked list
    this.ordering.moveToFront(item.node);
  }
}

// ----------------------------------------
// Given: Doubly Linked List - Do Not Edit!
// ----------------------------------------
class ListNode {
  constructor(val, prev = null, next = null) {
    this.prev = prev;
    this.val = val;
    this.next = next;
  }


  delete() {
    if (this.prev) this.prev.next = this.next;
    if (this.next) this.next.prev = this.prev;
  }
}

class List {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // Insert at the head of the list.
  unshift(val) {
    if (this.head === null && this.tail === null) {
      this.head = new ListNode(val);
      this.tail = this.head;
    } else {
      this.head = new ListNode(val, null, this.head);
      this.head.next.prev = this.head;
    }

    return this.head;
  }

  // Delete at the head of the list.
  shift() {
    if (this.head === null && this.tail === null) {
      return null;
    } else {
      let head = this.head;
      this.head = this.head.next;
      head.delete();
      return head.val;
    }
  }

  // Insert at the end of the list.
  push(val) {
    if (this.head === null && this.tail === null) {
      this.head = this.tail = new ListNode(val);
    } else {
      this.tail = new ListNode(val, this.tail, null);
      this.tail.prev.next = this.tail;
    }

    return this.tail;
  }

  // Delete at the end of the list.
  pop() {
    if (this.head === null && this.tail === null) {
      return null;
    } else {
      let tail = this.tail;
      this.tail = this.tail.prev;
      tail.delete();
      return tail.val;
    }
  }

  // Move a node to the front of the List
  moveToFront(node) {
    if (node === this.tail) {
      this.pop();
    } else if (node === this.head) {
      return;
    } else {
      node.delete();
    }

    node.prev = node.next = null;

    // Don't delegate to shift, since we want to keep the same
    // object.

    if (this.head === null && this.tail === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }
  }

  // Move a node to the end of the List
  moveToEnd(node) {
    if (node === this.head) {
      this.shift();
    } else if (node === this.tail) {
      return;
    } else {
      node.delete();
    }

    // Don't delegate to push, since we want to keep the same
    // object.

    node.prev = null;
    node.next = null;

    if (this.head === null && this.tail === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
  }
}

exports.List = List;
exports.ListNode = ListNode;
exports.LRUCache = LRUCache;
exports.LRUCacheItem = LRUCacheItem;
