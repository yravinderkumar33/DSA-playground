/*
Simillar to bubble sort but instead of first placing the largest values into sorted position, it places smaller values into the sorted positions.

*/


const selectionSort = arr => {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    return arr;
}

console.log(selectionSort([1, 3, 1, 1, 40, 2]));