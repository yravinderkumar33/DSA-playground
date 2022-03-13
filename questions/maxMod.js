/*
Problem Description

Given an array A of size N, groot wants you to pick 2 indices i and j such that

1 <= i, j <= N
A[i] % A[j] is maximum among all possible pairs of (i, j).
Help Groot in finding the maximum value of A[i] % A[j] for some i, j.

*/


// solution is to get the second largest value in the array;
const maxMod = arr => {
    const highest = Math.max(...arr);
    arr.splice(arr.indexOf(highest), 1);
    while (arr.length > 0) {
        const secondHighest = Math.max(...arr);
        if (secondHighest !== highest) return secondHighest % highest;
        arr.splice(arr.indexOf(highest), 1);
    }
    return 0;
}




//Hint - Since we need the maximum value of A[i]%A[j], we should take A[i] and A[j] to be the last elements in the sorted array.

const secondSolution = arr => {
    const withoutDuplicates = new Set(arr);
    if ([0, 1].includes(withoutDuplicates.size)) return 0;
    const maxValue = Math.max(...withoutDuplicates);
    withoutDuplicates.delete(maxValue);
    const secondMaxValue = Math.max(...withoutDuplicates);
    return secondMaxValue % maxValue;
}

