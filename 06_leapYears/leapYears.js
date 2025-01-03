const leapYears = function(year) {
    // const century = year % 100 == 0;
    if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) {
        return true;
    } else {
        return false;
    }
};

console.log(leapYears(1600));
// Do not edit below this line
module.exports = leapYears;
