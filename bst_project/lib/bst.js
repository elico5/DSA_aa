class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(val, root = this.root) {
        if (!root) {
            this.root = new TreeNode(val);
        } else if (val < root.val) {
            if (!root.left) {
                root.left = new TreeNode(val);
            } else {
                this.insert(val, root.left);
            }
        } else {
            if (!root.right) {
                root.right = new TreeNode(val);
            } else {
                this.insert(val, root.right)
            }
        }
    }

    searchRecur(val, root = this.root) {
        if (!root) return false;
        if (root.val > val) {
            return this.searchRecur(val, root.left);
        } else if (root.val < val) {
            return this.searchRecur(val, root.right);
        } else {
            return true;
        }
    }
   
    searchIter(val) {
        if (!this.root) return false;
        let root = this.root;
        while (root) {
            if (root.val === val) {
                return true;
            } else if (root.val > val) {
                root = root.left;
            } else {
                root = root.right;
            }
        }
        return false;
    }
}

module.exports = {
    TreeNode,
    BST
};