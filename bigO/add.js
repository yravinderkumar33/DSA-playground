const { calc } = require('../util/calculatTimingDiff');

const add1 = n => n * (n + 1) / 2;

const add2 = n => {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

const add3 = (n, sum = 0) => {
    if (n < 1) {
        return sum;
    }
    return add3(n - 1, sum + n);
}

calc(add3)(3)