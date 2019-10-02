// Runtime O(n * log(n))...
// O(n) operations at each recursive level and recursive calls halve input each time
function quickSort(array) {
    if (array.length <= 1) {
        return array;
    }
    const pivot = array.shift();
    const left = quickSort(array.filter(el => el < pivot));
    const right = quickSort(array.filter(el => el >= pivot));
    return [...left, pivot, ...right];
}

module.exports = {
    quickSort
};