// merge two already sorted Arrays

const merge = (A, B) => {
    let i = 0; j = 0, sortedArray = [];
    while (i < A.length && j < B.length) {
        if (A[i] <= B[j]) {
            sortedArray.push(A[i]);
            i++;
        }
        else {
            sortedArray.push(B[j]);
            j++
        }
    }

    return sortedArray.concat(...A.slice(i), ...B.slice(j));
}


const mergeSort = arr => {
    if (arr.length <= 1) return arr;
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

console.log(mergeSort([1,2,1,7,4]))