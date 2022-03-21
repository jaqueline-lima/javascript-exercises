const reverseString = function(string) {
    let split = string.split("");
    let reverse = split.reverse();
    reverse = reverse.toString();
    reverse = reverse.replace(/,/g, '');
    return reverse;
};

// Do not edit below this line
module.exports = reverseString;
