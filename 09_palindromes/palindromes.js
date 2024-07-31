const palindromes = function (string) {
    const alphanumerical="abcdefghijklmnopqrstuvwxyz0123456789";
    let newString=string
    .toLowerCase()
    .split("")
    .filter((char)=>alphanumerical.includes(char))
    .join("");
    let reverseString=newString.split("").reverse().join("");
    return newString===reverseString;
};

// Do not edit below this line
module.exports = palindromes;
