const pivot = (arr, start = 1, end = arr.length) => {
    let pivotIndex = 0;

    while (start < end) {
        if (arr[start] < arr[pivotIndex]) {
            pivotIndex++;
            [arr[pivotIndex], arr[start]] = [arr[start], arr[pivotIndex]];
        }
    }


    [arr[pivotIndex], arr[start]] = [arr[start], arr[pivotIndex]];


    return pivotIndex;
}