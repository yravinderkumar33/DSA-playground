
// Complexity is O(log(n))

const binarySearch = (arr, n) => {
    let start = 0, end = arr.length - 1;
    while (start != end) {
        // in order to avoid overflow we can calculte mid using Math.floor(s + ((e-s)/2))
        const middleIndex = Math.floor(end - start / 2);
        const middleElement = arr[middleIndex]
        if (n > middleElement) { start = middleIndex + 1 }
        if (n < middleElement) { end = middleIndex - 1 }
        if (middleElement === n) return middleIndex;
    }
    return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 9));

module.exports = { binarySearch }