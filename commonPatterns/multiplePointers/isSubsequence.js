
// solution using multi pointer pattern
const isSubsequence = (str1, str2) => {
    if (str2.length < str1.length) return false;
    let i = 0, j = str2.indexOf(str1.charAt(i));
    if (j == -1) return false;
    while (i < str1.length && j < str2.length) {
        if (str1[i] === str2[j]) {
            j++;
            i++;
        } else {
            j++;
        }
    }
    if (i === str1.length) return true;
    return false;
}

// solution using multi pointer pattern
function isSubsequenceOptimized(str1, str2) {
    var i = 0;
    var j = 0;
    if (!str1) return true;
    while (j < str2.length) {
        if (str2[j] === str1[i]) i++;
        if (i === str1.length) return true;
        j++;
    }
    return false;
}

console.log(isSubsequence('hello', 'hello world'))
console.log(isSubsequence('sing', 'sting'))
console.log(isSubsequenceOptimized('hello', 'hello world'))
console.log(isSubsequenceOptimized('sing', 'sting'))
