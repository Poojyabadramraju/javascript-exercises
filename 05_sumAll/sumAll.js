const sumAll = function(num1,num2) {
    let sum=0;
    if((num1<0 || num1!==parseInt(num1,10)) || (num2<0 || num2!==parseInt(num2,10))) return 'ERROR';
    let i=((num1<num2)?num1:num2);
    let j=((num1>num2)?num1:num2);
    for(;i<=j;i++){
        sum+=i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
