const reverse = n => {
    let i = 0, res = 0;
    while (n !== 0) {
        const last = n % 10;
        res = res * 10 + last;
        n = Math.floor(n / 10);
        i++;
    }
    return res;
}

reverse(40440);