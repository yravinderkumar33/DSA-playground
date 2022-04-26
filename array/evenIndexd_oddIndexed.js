/*
Given an array, arr[] of size N, the task is to find the count of array indices such that removing an element from these indices makes the sum of even-indexed and odd-indexed array elements equal.
*/


const PSO = A => {
    let n = A.length;
    if (n == 0) return [];
    let PS = [];
    PS[0] = 0;
    for (let i = 1; i < n; i++) {
        if (i % 2 === 0) {
            PS[i] = PS[i - 1];
        } else {
            PS[i] = PS[i - 1] + A[i];
        }
    }
    return PS;
}

const PSE = A => {
    let n = A.length;
    if (n == 0) return [];
    let PS = [];
    PS[0] = A[0];
    for (let i = 1; i < n; i++) {
        if (i % 2 !== 0) {
            PS[i] = PS[i - 1];
        } else {
            PS[i] = PS[i - 1] + A[i];
        }
    }
    return PS;
}

const main = A => {
    const n = A.length;
    let count = 0;

    const PSEven = PSE(A);
    const PSOdd = PSO(A);

    for (let i = 0; i < n; i++) {
        const evenSum = (PSEven[i - 1] || 0) + (PSOdd[N - 1] - PSOdd[i]);
        const oddSum = (PSOdd[i - 1] || 0) + (PSEven[N - 1] - PSEven[i]);
        if (evenSum === oddSum) count++;
    }

    return count;
}