// solution using multi pointers

const stringSearch = (str1, str2) => {
    let i = 0; j = 0; count = 0;
    while (i < str1.length) {
        if (str1[i] === str2[j]) {
            j++;
        } else {
            j = 0;
        }

        if (j === str2.length) {
            count++;
            j = 0;
        }

        i++;
    }
    return count;
}

stringSearch("lorie loled", "lol")

// naive solution with inner loops
function naiveSearch(long, short) {
    var count = 0;
    for (var i = 0; i < long.length; i++) {
        for (var j = 0; j < short.length; j++) {
            if (short[j] !== long[i + j]) break;
            if (j === short.length - 1) count++;
        }
    }
    return count;
}

naiveSearch("lorie loled", "lol")