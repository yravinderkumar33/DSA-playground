/*
This pattern uses object or set to collect values/frequencies of value;
This can avoid nested loops and hence O(n2) operations with arrays/strings
*/

/*
    Write a function same which accepts two arrays. The function should return boolean based on whether every element in first array has its 
    corresponding squared value in the other array. Also frequency should be same
*/

//My solution : before
//Complexity O(n2)

const predicate = arr => x => {
    const index = arr.indexOf(Math.pow(x, 2)); // loop2
    if (index != -1) {
        arr = [...arr.slice(0, index), ...arr.slice(index + 1)] //new Arr
        return true;
    }
    return false
};

const same = (arr1, arr2) => {
    if (arr1.length !== arr2.length) return false;
    return arr1.every(predicate(arr2)); //loop 1
}

console.log(same([1, 2, 1], [1, 4, 1]))



// Solution 2 with frequency pattern  O(n)
const same2 = (arr1, arr2) => {

    if (arr1.length !== arr2.length) return false;

    const freq1 = {};
    const freq2 = {};

    //O(n)
    for (const val of arr1) {
        freq1[val] = (freq1[val] || 0) + 1;
    }

    //O(n)
    for (const val of arr2) {
        freq2[val] = (freq2[val] || 0) + 1;
    }

    //O(n)
    for (const [key, value] of Object.entries(freq1)) {
        const squared = Math.pow(+key, 2);
        if (!(squared in freq2)) return false;
        if ((value !== freq2[squared])) return false;
    }

    return true;
}

console.log(same2([1, 2, 1], [1, 4, 1]))
