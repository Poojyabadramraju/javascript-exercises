const fibonacci = function(numN) {
    let num1=num2=1;
    let sum=0;
    numN=parseInt(numN);
    if(numN===0){
        return 0;
    }else if(numN===1 || numN===2){
        return 1;
    }else if(numN<0){
        return "OOPS";
    }
    for(i=3;i<=numN;i++){
        sum=num1+num2;
        [num1,num2]=[num2,sum]
    }
    return num2;
};

// Do not edit below this line
module.exports = fibonacci;
