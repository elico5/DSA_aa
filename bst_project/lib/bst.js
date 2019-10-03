// Basic binary tree node
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

// Tree class just holds reference to root (root contains entire tree)
class BST {
    constructor() {
        this.root = null;
    }

    insert(val, root = this.root) {
        if (!root) {
            // Create root
            this.root = new TreeNode(val);
        } else if (val < root.val) {
            // Value is less than root's value
            if (!root.left) {
                // Create left subtree
                root.left = new TreeNode(val);
            } else {
                // Insert with left subtree's root as root
                this.insert(val, root.left);
            }
        } else {
            // Value greater than or equal to root's value
            if (!root.right) {
                // Create right subtree
                root.right = new TreeNode(val);
            } else {
                // Insert with right subtree's root as root
                this.insert(val, root.right)
            }
        }
    }

    // Binary search algorithm just implemented on tree structure instead of an array...
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
   
    // Traverse the tree changing the current node with traversal
    searchIter(val) {
        if (!this.root) return false;
        let root = this.root;
        // Loop until a leaf is reached
        while (root) {
            if (root.val === val) {
                // Value is found
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