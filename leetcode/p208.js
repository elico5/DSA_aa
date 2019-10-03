// Implement Trie (Prefix Tree) - https://leetcode.com/problems/implement-trie-prefix-tree/
// Trie Implementation...
// 
// Notes:
// Very similar code to the trie project
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

    insert(word, root = this.root) {
        const letter = word[0];
        if (!root.children[letter]) root.children[letter] = new Node();
        if (word.length > 1) {
            this.insert(word.slice(1), root.children[letter]);
        } else {
            root.children[letter].isTerminal = true;
        }
    }

    search(word, root = this.root) {
        if (word.length === 1) {
            return root.children[word] ? root.children[word].isTerminal : false;
        } else {
            const letter = word[0];
            const rest = word.slice(1);
            return root.children[letter] ? this.search(rest, root.children[letter]) : false;
        }
    }

    startsWith(word, root = this.root) {
        if (word.length === 0) return true;
        const letter = word[0];
        const rest = word.slice(1);
        return root.children[letter] ? this.startsWith(rest, root.children[letter]) : false;
    }
}