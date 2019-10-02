// ============================================================================
// Interview Problem: Balanced Parentheses
// ============================================================================
//
// -------
// Prompt:
// -------
//
// You are building a linter for your company's new custom text editor to keep
// the code smells out of your (anticipated) massive codebase! Part of your 
// technical design includes writing a function that checks that all of the 
// parentheses in your engineers' code are balanced.
//
// Given a string of text, write a function that returns true if the 
// parentheses are balanced, and false if they are not.
//
// Note: Your code should ignore all non-bracket characters in the input 
//       string.
//
// ------
// Bonus: 
// ------
//  
// Though you may want to start by writing a function that simply handles
// parentheses as an MVP, to build a truly impactful product you must handle 
// ALL bracket types, including:
//
//         - Parentheses:     ()
//         - Square Brackets: []
//         - Curly Brackets:  {}
//
// Update your original balancedParens function to handle all bracket types.
//
// ------------
// Constraints:
// ------------ 
//
// (1) Your function must run in linear time, O(n).
// (2) Your function must consume (at maximum) linear space, O(n).

// Runtime O(n)... input string is traversed once
// Space O(n)... worst case being something like (((((()))))) which would fill stack maximally
// 
// Strategy: loop through string...
// If you come across an open character add it to stack,
// If you come across closing character you must be able to pop the corresponding opening character off the stack
function balancedParens(str) {
    // Base case
    if (!str.length) return true;
    // Relation between open and close
    const map = {
        '}': '{',
        ')': '(',
        ']': '['
    };
    // Allow for open character constant lookup
    const open = new Set(Object.values(map));
    // Initialize array to use as a stack
    const stack = [];
    [...str].forEach(char => {
        if (open.has(char)) {
            // Push open character to stack
            stack.push(char);
        } else if (char in map) {
            // Character closes associated open character
            if (stack[stack.length - 1] === map[char]) {
                stack.pop();
            } else {
                // Character is unresolved
                stack.push(char);
            }
        }
    })
    // Empty stack implies validity (all open characters were closed)
    return stack.length ? false : true;
}

exports.balancedParens = balancedParens;
