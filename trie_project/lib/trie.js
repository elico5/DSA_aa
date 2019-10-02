class Node {
    constructor() {
        this.children = {};
        this.isTerminal = false;
    }
}

class Trie {
    constructor() {
        this.root = new Node();
    }

    insertRecur(word, root = this.root) {
        const letter = word[0];
        if (!root.children[letter]) root.children[letter] = new Node();
        if (word.length > 1) {
            this.insertRecur(word.slice(1), root.children[letter]);
        } else {
            root.children[letter].isTerminal = true;
        }
    }

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
        if (word.length === 1) {
            return root.children[word] ? root.children[word].isTerminal : false;
        } else {
            const letter = word[0];
            const rest = word.slice(1);
            return root.children[letter] ? this.searchRecur(rest, root.children[letter]) : false;
        }
    }

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
        for (let i = 0; i < prefix.length; i++) {
            const letter = prefix[i];
            if (!root.children[letter]) return fill;
            root = root.children[letter];
        }
        this.dfs(root, prefix, fill);
        return fill;
    }

    dfs(root, prefix, fill) {
        if (root.isTerminal) fill.push(prefix);
        for (let child in root.children) {
            this.dfs(root.children[child], prefix + child, fill);
        }
    }
}

module.exports = {
    Node,
    Trie
};