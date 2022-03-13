// calculate the sqrt of n using the newtons rapshons method

const sqrt = n => {
    let x = n, errorPrecision = 1;
    while (true) {
        root = (x + (n / x)) * 0.5;
        error = Math.abs(root - x);
        if (error <= errorPrecision) return root;
        x = root;
    }
}