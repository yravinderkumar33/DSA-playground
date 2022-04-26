/* 

remove duplicates from a sorted Array

i/p - [1,2,2,3,4,42]
o/p - [1,2,3,4,2]

*/



const sort = A => {

    let size = A.length;
    let count = 1;

    for (let i = 1; i < size; i++) {
        if (A[i] !== A[i - 1]) {
            [A[i], A[count]] = [A[count], A[i]];
            count++;
        }
    }

    return A;
}

console.log(sort([1, 2, 2, 3, 2, 4, 42]));