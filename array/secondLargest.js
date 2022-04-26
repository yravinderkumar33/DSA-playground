/*
You are given an integer array A. You have to find the second largest element/value in the array or report that no such element exists.
*/

const secondLargest = A => {
    const size = A.length;
    if(size < 2) return -1;
    const largestValIndex = 0;
    
    //find largest value index.
    for(let i = 0; i < size; i++) {
        if(A[i] > A[largestValIndex]) largestValIndex = i;
    }

    for(let i = 0; i< size; i++) {
        if(i === largestValIndex) continue;
        if(A[i] <= A[largestValIndex]) return A[i];
    }

}