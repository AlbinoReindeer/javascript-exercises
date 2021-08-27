const reverseString = function(str) {
    let testString = "";

    for(i = str.length - 1; i >= 0; i--) {
        testString += str[i];
    }
    return testString;
};

module.exports = reverseString;
