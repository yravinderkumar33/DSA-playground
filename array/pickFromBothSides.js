/*

Problem Description

You are given an integer array A of size N.

You can pick B elements from either left or right end of array A to get the maximum sum.

Find and return this maximum possible sum.

NOTE: Suppose B = 4, and array A contains 10 elements, then

You can pick the first four elements or can pick the last four elements, or can pick 1 from front and 3 from the back, etc. You need to return the maximum possible sum of elements you can pick.

*/


//Solution 1 

const PSArray = A => {
    const size = A.length;
    if (size === 0) return [];
    let PS = [];
    PS[0] = A[0];
    for (let i = 1; i < size; i++) {
        PS[i] = PS[i - 1] + A[i]
    }

    return PS;
}


const main = (A, B) => {
    const maxSum = -Infinity;
    const size = A.length;
    const prefixArray = PSArray(A);
    for (let i = 0; i <= B; i++) {
        const sum = PS[i - 1] + PS[size - 1] + PS[size - (i + 1)];
        maxSum = Math.max(maxSum, sum);
    }

    return maxSum;

}



//Solution 2 


const solution = (A, B) => {

    const ALength = A.length;
    let tempSum = 0, maxSum = -Infinity;

    for (let i = 0; i < B; i++) tempSum += A[i];

    for (const i = 1; i <= B; i++) {
        tempSum -= A[B - i];
        tempSum += A[ALength - i];
        maxSum = Math.max(maxSum, tempSum);
    }

    return maxSum;
}