const isPrime = n => {
    if (n === 1 || n < 1) return true;
    for (let i = 2; i < n; i++) {
        if (n % 2 === 0) return false
    }
    return true;
}

console.log(isPrime(2));
console.log(isPrime(1));
console.log(isPrime(4));
console.log(isPrime(5));
