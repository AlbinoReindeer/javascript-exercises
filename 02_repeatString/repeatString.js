const repeatString = function(string, num) {
    let testString = '';

    if (num < 0){
        return ('ERROR');
    }
    for(i = 1; i <= num; i++) {
        testString += string;
    }
    return testString;
};


module.exports = repeatString;
