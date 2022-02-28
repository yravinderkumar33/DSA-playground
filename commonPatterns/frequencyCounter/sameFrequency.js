const sameFrequency = (number1, number2) => {

    const sNum1 = number1.toString(), sNum2 = number2.toString();
    if (sNum1.length !== sNum2.length) return false;
    let freq1 = {}, freq2 = {};

    for (let i = 0; i < sNum1.length; i++) {
        freq1[sNum1[i]] = ++freq1[sNum1[i]] || 1;
        freq2[sNum2[i]] = ++freq2[sNum2[i]] || 1;
    }

    for (const [key, value] of Object.entries(freq1)) {
        if (!(key in freq2)) return false;
        if (value !== freq2[key]) return false;
    }

    return true;
}

console.log(sameFrequency(181, 181))
console.log(sameFrequency(12345, 54321))
console.log(sameFrequency(22, 222))