/*
Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.
findLongestSubstring('') // 0
findLongestSubstring('rithmschool') // 7
findLongestSubstring('thisisawesome') // 6
findLongestSubstring('thecatinthehat') // 7
findLongestSubstring('bbbbbb') // 1
findLongestSubstring('longestsubstring') // 8
findLongestSubstring('thisishowwedoit') // 6
Time Complexity - O(n)
*/

const findLongestSubStrLen = (str) => {
    if (!str) return 0;
    let maxLen = 1;
    for (let i = 1; i < str.length; i++) {
        if (str[i] !== str[i - 1]) {
            maxLen++
        }
    }
    return maxLen;
}

console.log(findLongestSubStrLen('thisishowwedoit'))