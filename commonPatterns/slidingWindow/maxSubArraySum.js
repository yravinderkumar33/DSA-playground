/*
Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.
*/


// Complexity O(n2)
const maxSumArrayNaive = (arr, n) => {
    if (n > arr.length) return null;
    let maxSum = -Infinity;
    for (let i = 0; i < arr.length - n + 1; i++) {
        let tempSum = 0;
        for (let j = 0; j < n; j++) {
            tempSum += arr[i + j];
        }
        maxSum = Math.max(tempSum, maxSum);

    }
    return maxSum;
}

// console.log(maxSumArrayNaive([1, 2, 3, 4, 5, 5], 3));


const maxSumUsingSlidingWindow = (array, n) => {
    if (n > array.length) return null;
    let maxSum = -Infinity, tempSum = 0;
    for (let i = 0; i < n; i++) {
        tempSum += array[i];
    }
    maxSum = tempSum;
    for (let i = n; i < array.length; i++) {
        const element = array[i];
        tempSum -= array[i - n];
        tempSum += array[i];
        maxSum = Math.max(tempSum, maxSum);
    }

    return maxSum;

}


console.log(maxSumUsingSlidingWindow([1, 2, 3, 4, 5, 5], 3));
console.log(maxSumUsingSlidingWindow([1, 1, 1, 2], 3));
console.log(maxSumUsingSlidingWindow([], 3));
