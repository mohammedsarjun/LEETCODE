var numOfStrings = function(patterns, word) {
    let result = 0;

    for (let i = 0; i < patterns.length; i++) {
        if (word.includes(patterns[i])) {
            result++;
        }
    }

    return result;
};

console.log(numOfStrings(["a", "abc", "bc", "d"],"abc"))