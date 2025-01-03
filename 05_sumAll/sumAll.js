const sumAll = function(num1, num2) {

    if(!Number.isInteger(num1) || !Number.isInteger(num2) || num1 < 0 || num2 < 0) {
        return 'ERROR';
    }

    const small = Math.min(num1, num2);
    const large = Math.max(num1, num2);

    let sum = 0;
    for(let i = small; i <= large; i++) {
        sum += i;
    }

    return sum;
};

console.log(sumAll(123, 1));

// Do not edit below this line
module.exports = sumAll;
