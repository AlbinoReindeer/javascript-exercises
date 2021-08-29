const sumAll = function(num, secondNum) {
    let sum = 0;
    if (!Number.isInteger(arguments[0]) || !Number.isInteger(arguments[1])) return "ERROR";
    if (arguments[0] < 0 || arguments[1] < 0) return "ERROR";
    if (arguments[0] > arguments[1]) {
        for (i = arguments[1]; i <= arguments[0]; i++) {
            sum += i;
        }
    } else {
        for (i = arguments[0]; i <= arguments[1]; i++) {
            sum += i;
        }
    }

    return sum;
};

module.exports = sumAll;
