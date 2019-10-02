// Get digit at certain place of number
function digitFromPlace(int, place) {
    return Math.floor(int / Math.pow(10, place)) % 10;
}

// Get how many digits in a number
function numberLength(int) {
    return int === 0 ? 1 : Math.floor(Math.log10(int)) + 1;
}

// Max number of digits in given number in array
function maxLength(ints) {
    let maxLength = 0;
    for (let i = 0; i < ints.length; i++) {
        maxLength = Math.max(maxLength, numberLength(ints[i]));
    }
    return maxLength;
}

// Runtime(O(n * m)) where n is the number of input elements, m is max number of digits in a number
// Could argue constant space as input array is taken from and readded to as buckets are populated?
function radixSort(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }
    const maxDigits = maxLength(arr);
    // For each digit place
    for (let i = 0; i < maxDigits; i++) {
        const buckets = Array.from({length : 10}, () => []);
        // Push digit into its appropriate bucket
        for (let j = 0; j < arr.length; j++) {
            const digit = digitFromPlace(arr[j], i);
            buckets[digit].push(arr[j]);
        }
        // Concatenate bucket results and repeat for next digit place
        arr = [].concat(...buckets);
    }
    return arr;
}

module.exports = {
    radixSort
};