
/*
Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.
*/

// solution using js set
const unique = arr => {
    const set = new Set(arr);
    return Array.from(set);
}

// O(n) time complexity
const unique2 = array => {
    let start = 0, end = start + 1, uniques = [];
    while (start < array.length) {
        if (array[start] != array[end]) {
            uniques.push(array[start]);
            [start, end] = [end, end + 1];
        } else {
            end++
        }
    }
    return uniques.length;
}

//another solution
const unique3 = array => {
    let i = 0;
    for (let j = 1; j < array.length; j++) {
        if (array[i] != array[j]) {
            i++;
            array[i] = array[j];
        }
    }
    return i + 1;
}


console.log(unique3([1, 2, 3, 3]));