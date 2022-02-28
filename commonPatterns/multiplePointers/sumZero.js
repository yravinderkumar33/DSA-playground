/* Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0.
 Return an array that includes both values that sum to zero or undefined if a pair does not exist */

// Naive Solution O(n2)
const sumZero = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            const sum = arr[i] + arr[j];
            if (sum === 0) {
                return [arr[i], arr[j]];
            }
        }
    }
}

console.log(sumZero([-1, 0, 10]));


// O(n) optimized solution using multiple pointers pattern;
const optimizedSolution = array => {
    let start = 0, end = array.length - 1;
    while (start < end) {
        const sum = array[start] + array[end];
        if (sum === 0) return [array[start], array[end]];
        if (sum > 0) end--;
        if (sum < 0) start++;
    }
}

console.log(optimizedSolution([-1, 0, 1]));
