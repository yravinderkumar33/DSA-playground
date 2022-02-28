
// check if two strings are anagram or not using frequency counter pattern

const anagram = (str1, str2) => {
    if (str1.length !== str2.length) return false;
    const freq1 = {}, freq2 = {};
    for (let index = 0; index < str1.length; index++) {
        const charFromStr1 = str1[index];
        const chartFromStr2 = str2[index];
        freq1[charFromStr1] = ++freq1[charFromStr1] || 1;
        freq2[chartFromStr2] = ++freq2[chartFromStr2] || 1;
    }
    for (const [key, value] of Object.entries(freq1)) {
        if (!(key in freq2)) return false;
        if (value != freq2[key]) return false;
    }
    return true
}

console.log(anagram('abc', 'dba'))