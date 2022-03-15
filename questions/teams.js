/*
Given a string A, A is made up of 0's and 1's. Break A into substrings such that , all broken substrings have equal number of 1's and 0's.

Find and return maximum number of substrings in which A can be broken.

Input Format

The only argument given is string A.
Output Format

Find and return maximum number of substrings in which A can be broken.
Constraints

1 <= length of A <= 10^5
A will always have equal number of 0's and 1's
For Example

Input 1:
    A = "011100"
Output 1:
    2
Explanation 1:
    "01" + "1100"

Input 2:
    A = "00011011"
Output 2:
    1
Explanation 2:
    "00011011"
*/

const teams = str => {
    let counter = 0, freq = { 0: 0, 1: 0 };
    for (let index = 0; index < str.length; index++) {
        freq[str[index]]++;
        if (Object.values(freq).every(value => value && value % 2 === 0)) {
            counter++;
        }
    }
    return counter;
}

console.log(teams("00011011"));