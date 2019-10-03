// Heap class just holds reference to an array that stores the heap
class MaxHeap {
    constructor() {
        this.array = [ null ];
    }

    getParent(idx) {
        return Math.floor(idx / 2);
    }

    getLeftChild(idx) {
        return 2 * idx;
    }

    getRightChild(idx) {
        return 2 * idx + 1;
    }

    siftUp(idx) {
        const child = this.array[idx];
        const parentIdx = this.getParent(idx)
        const parent = this.array[parentIdx];
        // If heap rule is violated swap child with parent
        if (child > parent && parentIdx > 0) {
            [this.array[idx], this.array[parentIdx]] = [parent, child];
            // Check if heap rule is violated again after swap
            this.siftUp(parentIdx);
        }
    }

    // O(log(n)) runtime... worst case a node has to be sifted up the height of the tree
    // Add to right most leaf and check if heap rule is violated
    insert(val) {
        this.array.push(val);
        this.siftUp(this.array.length - 1);
    }

    // O(log(n)) runtime... worst case a node has to be sifted down the height of the tree
    // Node must be swapped down with the greater of its children otherwise heap rule remains violated
    siftDown(idx) {
        const parent = this.array[idx];
        const lChildIdx = this.getLeftChild(idx);
        const rChildIdx = this.getRightChild(idx);
        const lChild = this.array[lChildIdx] || -Infinity;
        const rChild = this.array[rChildIdx] || -Infinity;
        if (this.array[idx] < Math.max(lChild, rChild)) {
            if (lChild >= rChild) {
                [this.array[idx], this.array[lChildIdx]] = [lChild, parent];
                this.siftDown(lChildIdx);
            } else {
                [this.array[idx], this.array[rChildIdx]] = [rChild, parent];
                this.siftDown(rChildIdx);
            }
        }
    }

    // Move right most leaf to root position and sift down until heap rule is satisfied
    // Hold reference to max
    deleteMax() {
        if (this.array.length === 1) {
            return null;
        } else if (this.array.length === 2) {
            return this.array.pop();
        } else {
            const max = this.array[1];
            this.array[1] = this.array.pop();
            this.siftDown(1);
            return max;
        }
    }
}

module.exports = {
    MaxHeap
};