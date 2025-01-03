const reverseString = function(string) {
    text = string.split("").reverse().join("");
    return text;
};

reverseString('hello')

// Do not edit below this line
module.exports = reverseString;
