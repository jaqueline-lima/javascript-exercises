const leapYears = function(year) {
    let leap,
        divisable4,
        divisible100,
        divisible400;
    
    if (year % 4 === 0) {
        divisable4 = true;
    }
    if (year % 100 === 0) {
        divisible100 = true;
    }
    if (year % 400 === 0) {
        divisible400 = true;
    }

    if (divisable4) {
        if (divisible100 && divisible400) {
            leap = true;
        } else if (divisible100 && !divisible400) {
            leap = false;
        } else if (!divisible100) {
            leap = true;
        }
    } else {
        leap = false;
    }
    return leap;
};

// Do not edit below this line
module.exports = leapYears;
