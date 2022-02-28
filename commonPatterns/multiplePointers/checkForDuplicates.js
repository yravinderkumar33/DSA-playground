
/*
Check for duplicates inside the arguements passed to the function;

*/

const checkForDuplicates1 = (...args) => {
    return !(args.length === (new Set(args)).size);
}

console.log(checkForDuplicates1(1, 2, 2))


//solution using frequency counter
const checkForDuplicates2 = (...args) => {
    let freq = new Map();
    for (const arg of args) {
        if (freq.has(arg)) return true;
        freq.set(arg, 1);
    }
    return false;
}

console.log(checkForDuplicates2(1, 2, 2))


//solution using multiple pointers pattern
const checkForDuplicates3 = (...args) => {

    const sorted = args.sort((a, b) => a - b);
    let start = 0, end = 1;
    while (start < sorted.length - 1) {
        if (sorted[start] === sorted[end]) return true;
        [start, end] = [end, end + 1];
    }
    return false;
}

console.log(checkForDuplicates3(1, 2, 3));