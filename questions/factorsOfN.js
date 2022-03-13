// O(sqrt(n))

const factors = n => {
    const factors = new Set();
    for (let i = 0; i * i <= n; i++) {
        if (n % i === 0) {
            factors.add(i);
            factors.add(n / i);
        }
    }
    return [...factors];
}