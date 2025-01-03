    const removeFromArray = function(ara, ...rem) {
        const newArray = [];
        ara.forEach((item) => {
            if (!rem.includes(item)) {
                newArray.push(item);
            }
        });
        return newArray;
};

console.log(removeFromArray([1, 2, 3, 5, 8, 8], 2))

// Do not edit below this line
module.exports = removeFromArray;
