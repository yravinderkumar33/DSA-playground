const sqrt = n => {
    let start = 0, end = n;
    while (start <= end) {
        const mid = start + (end - start) / 2;
        const squared = mid * mid;
        if (squared === n) return mid;
        else if (squared > n) end = mid - 1;
        else start = mid + 1;
    }
}