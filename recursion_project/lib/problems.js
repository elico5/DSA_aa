// Write a function, lucasNumber(n), that takes in a number.
// The function should return the n-th number of the Lucas Sequence.
// The 0-th number of the Lucas Sequence is 2.
// The 1-st number of the Lucas Sequence is 1
// To generate the next number of the sequence, we add up the previous two numbers.
//
// For example, the sequence begins: 2, 1, 3, 4, 7, 11, ...
function lucasNumber(n) {
    if (n <= 1) {
        return [2, 1][n];
    }
    return lucasNumber(n - 1) + lucasNumber(n - 2);
}

// Write a function, sumArray(array), that takes in an array of numbers.
// The function should return the total sum of the elements.
// 
// Solve this recursively!
function sumArray(array) {
    if (array.length === 0) {
        return 0;
    } else {
        return array.pop() + sumArray(array);
    }
}

// Write a function, reverseString(str), that takes in a string.
// The function should return the string with it's characters in reverse order.
//
// Solve this recursively!
function reverseString(str) {
    if (str.length === 0) {
        return "";
    } else {
        return str.slice(-1) + reverseString(str.slice(0, -1));
    }
}

// Write a function, pow(base, exponent), that takes in two numbers.
// The function should calculate the base raised to the exponent power.
//
// Note: 
// A negative exponent can be calculate by taking the reciprocal of the positive exponent.
// That is, pow(2, -5) is equal to 1 / pow(2, 5)
// 
// Solve this recursively!
function pow(base, exponent) {
    if (exponent === 0) {
        return 1;
    } else if (exponent < 0) {
        return 1 / pow(base, -exponent);
    } else {
        return base * pow(base, exponent - 1)
    }
}

// A 1-dimensional array is also known as a flattened array.
// Write a method, flatten(data), that accepts a single argument. The
// method should take in an array of any dimension and return the flattened
// version of that array. Solve this recursively.
function flatten(data) {
    const fill = []
    if (Array.isArray(data)) {
        data.forEach(el => {
            fill.push.apply(fill, flatten(el));
        })
    } else {
        fill.push(data);
    }
    return fill;
}

// Write a function, fileFinder(directories, targetFile), that accepts an object representing directories and a string respresenting a filename.
// The function should return true, if the file is contained anywhere in the given directories.
// Note that directory names will begin with '/', but file names will not.
function fileFinder(directories, targetFile) {
    let flag = false;
    Object.keys(directories).forEach(name => {
        if (name === targetFile) {
            flag = true;
        } else if (name[0] === '/') {
            if (fileFinder(directories[name], targetFile)) flag = true;
        }
    })
    return flag;
}

// Write another function, pathFinder(directories, targetFile), that returns the path that contains the targetFile.
// If the targetFile is not found in the directories, then return null.
// You can assume the files are unique.
function pathFinder(directories, targetFile) {
    let string = "";
    Object.keys(directories).forEach(name => {
        if (name === targetFile) {
            string += '/' + name;
        } else if (name[0] === '/') {
            const check = pathFinder(directories[name], targetFile);
            if (check) string += name + check;
        }
    })
    return string ? string : null;
}

module.exports = {
    lucasNumber,
    sumArray,
    reverseString,
    pow,
    flatten,
    fileFinder,
    pathFinder
};