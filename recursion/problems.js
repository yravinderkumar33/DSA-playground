
const checkForOdd = (arr, hasOdd = false) => {
    if (!arr?.length) return hasOdd;
    const [ele, ...rest] = arr;
    return checkForOdd(rest, !(ele % 2 === 0));
}

const sumRange = n => {
    if (n === 1) return 1;
    return n + sumRange(n - 1);
}


const factorial = n => {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

//solution 1 to flatten array
const flattenArr = (arr, flattened = []) => {
    for (const el of arr) {
        if (Array.isArray(el)) {
            flattenArr(el, flattened);
        } else {
            flattened.push(el)
        }
    }
    return flattened;
}
//solution 2 to flatten array
function flatten(oldArr) {
    var newArr = []
    for (var i = 0; i < oldArr.length; i++) {
        if (Array.isArray(oldArr[i])) {
            newArr = newArr.concat(flatten(oldArr[i]))
        } else {
            newArr.push(oldArr[i])
        }
    }
    return newArr;
}

const pow = (base, exponent) => {
    if (exponent < 1) return 1;
    return base * pow(base, exponent - 1);
}

const productOfArray = (arr, product = null) => {
    if (arr.length <= 0) return product;
    const [head, ...tail] = arr;
    productOfArray(tail, (head | 1) * product);
}

function productOfArray2(arr) {
    if (arr.length === 0) {
        return 1;
    }
    const [head, ...tail] = arr;
    return head * productOfArray(tail);
}

const recursiveRange = n => {
    if (n <= 0) return 0;
    return n + recursiveRange(n - 1);
}

const fib = (n) => {
    if (n <= 2) return 1;
    return fib(n - 2) + fib(n - 1);
}

//  reverse a string using recursion
const reverse = str => {
    if (str.length === 0) return '';
    const index = str.length - 1;
    const lastChar = str.charAt(index);
    return `${lastChar}${reverse(str.substr(0, index))}`;
}

// solution using multi pointers
const palindrome = str => {
    let start = 0, end = str.length - 1;
    while (start < end) {
        if (str[start] === str[end]) {
            start++;
            end++;
        } else {
            return false;
        }
    }
    return true;
}

//solution using recursion
const palindrome2 = str => {
    return str === reverse(str);
}

const someRecursive = (arr, cb) => {
    if (arr.length === 0) return false;
    const [head, ...tail] = arr;
    if (cb(head)) {
        return true;
    }
    return someRecursive(tail, cb);
}

const isRect = (...sides) => {
    const frequency = sides.reduce((acc, side) => acc.set(side, (acc.get(side) || 0) + 1), new Map());
    for (const [key, value] of frequency) {
        if(![2, 4].includes(value)) return false;
    }
    return true;
}
// someRecursive([2,2,1], isOdd)

const gcd = (a, b) => {
    if (a % b === 0) return b;
    return gcd(b, b % a)
}
