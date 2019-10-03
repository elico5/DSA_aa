class Node {
    constructor() {
        this.children = {};
        this.isTerminal = false;
    }
}

// Class holds reference to the tree's root node
// Notes:
// Tries differ a bit in implementation in that the edges between nodes represent letters in words...
class Trie {
    constructor() {
        this.root = new Node();
    }

    insertRecur(word, root = this.root) {
        // Take word's first letter
        const letter = word[0];
        // If letter not yet added from root
        if (!root.children[letter]) root.children[letter] = new Node();
        // If more letters in word, recursively call with next root and remainder of word
        if (word.length > 1) {
            this.insertRecur(word.slice(1), root.children[letter]);
        } else {
            // Mark node as terminal
            root.children[letter].isTerminal = true;
        }
    }

    // Traverse nodes of tree along with letters of word until the last letter creates terminal node
    insertIter(word) {
        let root = this.root;
        for (let i = 0; i < word.length; i++) {
            const letter = word[i];
            if (!root.children[letter]) root.children[letter] = new Node();
            root = root.children[letter];
            if (i === word.length - 1) root.isTerminal = true;
        }
    }

    searchRecur(word, root = this.root) {
        // Base case...
        if (word.length === 1) {
            // If edge with this letter exists, node on end of edge must be terminal for word to exist in our structure
            return root.children[word] ? root.children[word].isTerminal : false;
        } else {
            // Recursive call with new word and new root if we can
            const letter = word[0];
            const rest = word.slice(1);
            return root.children[letter] ? this.searchRecur(rest, root.children[letter]) : false;
        }
    }

    // Traverse edges of tree as we traverse letters of search word
    searchIter(word) {
        let root = this.root;
        for (let i = 0; i < word.length; i++) {
            const letter = word[i];
            if (!root.children[letter]) return false;
            root = root.children[letter];
            if (i === word.length - 1) return root.isTerminal;
        }
    }

    wordsWithPrefix(prefix) {
        const fill = [];
        let root = this.root;
        // Iteratively traverse tree until we get to the end of the prefix
        for (let i = 0; i < prefix.length; i++) {
            const letter = prefix[i];
            if (!root.children[letter]) return fill;
            root = root.children[letter];
        }
        // Populate fill with DFS from end of prefix node to see if any words have that prefix
        this._dfs(root, prefix, fill);
        return fill;
    }

    // DFS helper function that populates an array passed by reference
    _dfs(root, prefix, fill) {
        if (root.isTerminal) fill.push(prefix);
        for (let child in root.children) {
            this._dfs(root.children[child], prefix + child, fill);
        }
    }
}

module.exports = {
    Node,
    Trie
};