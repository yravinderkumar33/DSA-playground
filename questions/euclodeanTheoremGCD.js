const gcd = (a, b) => {
    if (a % b === 0) return b;
    return gcd(b, b % a)
}