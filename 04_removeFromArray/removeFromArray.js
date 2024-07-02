const removeFromArray = function(array,...args) {
    // for (const i of args){
    //     if(array.includes(i)){
    //         array=array.filter(x=>x!==i);
    //     }
    // }

    return array.filter(arr=>!args.includes(arr));
};

// Do not edit below this line
module.exports = removeFromArray;
