const averagePair = (array, n) => {
    let start = 0, end = array.length - 1;
    while (start < end) {
        const avg = (array[start] + array[end]) / 2;
        if (avg === n) return true;
        if (avg < n) { start++; }
        if (avg > n) { end--; }
    }
    return false
}

console.log(averagePair([1, 2, 3], 2.5));
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
console.log(averagePair([], 8));
console.log(averagePair([-1, 0, 3, 4, 5, 6], 8));


