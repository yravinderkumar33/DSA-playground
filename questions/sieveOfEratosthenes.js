// get all primes values in a range from 1 to n using sieve of eratgosthnes algorithm.


//space complexity - O(n) - auxillary space
// time complexity - O(n * log ( log n))

const primeFilter = n => {
    const booleanArr = Array(n + 1).fill(true);
    booleanArr[0] = false;
    booleanArr[1] = false;
    for (let i = 2; i * i <= n; i++) {
        if (booleanArr[i]) {
            for (let j = i * 2; j <= n; j += i) {
                booleanArr[j] = false;
            }
        }
    }
    return booleanArr;
}