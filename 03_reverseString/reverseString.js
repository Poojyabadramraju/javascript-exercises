const reverseString = function(string) {
    let strArr=string.split("").reverse();
    let str=strArr.join("");
    return str;
};

// Do not edit below this line
module.exports = reverseString;
