/*
Pseudo Code

Start looping with a variable called i from the end of the array moving towards the beginning.
Start inner loop with var called j from beginning to i - 1.
Compare j with j + 1, if arr[j] is greater than arr[j+1] then swap.
return the array
*/

const bubbleSort = arr => {
    for (let i = arr.length - 1; i >= 0; i--) {
        let isSwapped = false;
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                isSwapped = true;
                [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
            }
        }
        if(!isSwapped) break;
    }
    return arr;
}

console.log(bubbleSort([1,2,3,4, 1]));