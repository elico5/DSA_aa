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
        if (child > parent && parentIdx > 0) {
            [this.array[idx], this.array[parentIdx]] = [parent, child];
            this.siftUp(parentIdx);
        }
    }

    insert(val) {
        this.array.push(val);
        this.siftUp(this.array.length - 1);
    }

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