const isPrime = n => {
    if (n === 1 || n < 1) return true;
    for (let i = 2; i < n; i++) {
        if (n % 2 === 0) return false
    }
    return true;
}

// more optimized way is to iterate till sqrt(n)

const isPrime = n => {
    if (n <= 1) return false;
    for (let i = 0; i < Math.floor(Math.sqrt(n)); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

console.log(isPrime(2));
console.log(isPrime(1));
console.log(isPrime(4));
console.log(isPrime(5));
