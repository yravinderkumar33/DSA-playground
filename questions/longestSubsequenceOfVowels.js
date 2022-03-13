//complexity is O(n)
const longest = str => {
    let result = '';
    for (const char of str) {
        if (['a', 'e', 'i', 'o', 'u'].includes(char)) {
            result += char
        }
    }
    return result
}

const anotherSolution = str => {
    let s = 0; e = str.length - 1, frontStr = '', endStr = '', vowels = ['a', 'e', 'i', 'o', 'u'];
    while (s <= e) {
        if (vowels.includes(str[s])) frontStr += str[s];
        if(s === e) break;
        if (vowels.includes(str[e])) endStr = `${str[e]}${endStr}`;
        s++;
        e--;
    }
    return `${frontStr}${endStr}`
}

console.log(anotherSolution('azgakblhfenxsroljpu'));