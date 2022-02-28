// Count the number of occurences of alphanumeric inside a string

//solution one

const reducerFn = (acc, char) => ({ ...acc, [char]: (acc[char] || 0) + 1 });
const count = str => [...str].reduce(reducerFn, {});


//Solution two

const predicateFn = char => {
    const code = char.charCodeAt(0);
    if (!(code > 96 && code < 123) && !(code > 47 && code < 58) && !(code > 64 && code < 91)) {
        return false;
    }
    return true;
}

const solution2 = predicateFn => str => {
    const result = {};
    for (let char of str) {
        if (predicateFn(char)) {
            const loweredChar = char.toLowerCase();
            result[loweredChar] = ++result[loweredChar] || 1;
        }
    }
    return result;
}

console.log(solution2(predicateFn)('my2'))

console.log(count('my name is ravinder'))

/*

input 
output
examples
edge cases

pseudo code 

context obj
loop through each element in string
filter logic - ex only use alpha numberic elements not spaces and tabs;

return context obj

*/