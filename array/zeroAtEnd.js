/*

I/p - [1, 0, 2, 3, 0, 0, 4]
o/p - [1, 2, 3, 4, 0, 0, 0]
*/


const sendZeroesAtEnd = A => {
    let count = 0, size = A.length;

    for (let i = 0; i < size; i++) {
        if (A[i] !== 0) {
            [A[i], A[count]] = [A[count], A[i]];
            count++;
        }
    }

    return A;

}

console.log(sendZeroesAtEnd([1, 0, 2, 3, 0, 0, 4]))
console.log(sendZeroesAtEnd([1, 0, 0]))