const {performance} = require('perf_hooks');

const calc = (fn) => (...args) => {
    const start = performance.now();
    const result = fn(...args);
    const end = performance.now();
    console.log(`end - start = ${(end - start) / 1000} seconds, result = ${result}`)
}

module.exports = {
    calc
}