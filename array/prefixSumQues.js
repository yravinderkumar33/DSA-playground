/*

You are given an integer array A of length N.
You are also given a 2D integer array B with dimensions M x 2, where each row denotes a [L, R] query.
For each query, you have to find the sum of all elements from L to R indices in A (1 - indexed).
More formally, find A[L] + A[L + 1] + A[L + 2] +... + A[R - 1] + A[R] for each query.
*/


const getPrefixSumArray = (A) => {
    const n = A.length;
    if (n === 0) return [];
    const PS = [];
    PS[0] = A[0];
    for (let i = 1; i < n; i++) {
        PS[i] = PS[i - 1] + A[i];
    }
    return PS;
}

const prefixSumArray = getPrefixSumArray([7n, 3n, 1n, 5n, 5n, 5n, 1n, 2n, 4n, 5n]);
console.log(...prefixSumArray)
const B = [
    [7, 10],
    [3, 10],
    [3, 5],
    [1, 10],
];

const response = B.map(value => {
    const [start, end] = value;
    return BigInt(prefixSumArray[end - 1]) - BigInt(prefixSumArray[start - 2] || 0);
});

console.log(response);