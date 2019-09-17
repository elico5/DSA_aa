function digitFromPlace(int, place) {
    return Math.floor(int / Math.pow(10, place)) % 10;
}

function numberLength(int) {
    return int === 0 ? 1 : Math.floor(Math.log10(int)) + 1;
}

function maxLength(ints) {
    let maxLength = 0;
    for (let i = 0; i < ints.length; i++) {
        maxLength = Math.max(maxLength, numberLength(ints[i]));
    }
    return maxLength;
}

function radixSort(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }
    const maxDigits = maxLength(arr);
    for (let i = 0; i < maxDigits; i++) {
        const buckets = Array.from({length : 10}, () => []);
        for (let j = 0; j < arr.length; j++) {
            const digit = digitFromPlace(arr[j], i);
            buckets[digit].push(arr[j]);
        }
        arr = [].concat(...buckets);
    }
    return arr;
}

module.exports = {
    radixSort
};