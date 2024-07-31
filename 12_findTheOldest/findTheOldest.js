const findTheOldest = function(people) {
    return people
    .map((person)=>{
        if(!person.yearOfDeath){
            person.yearOfDeath=new Date().getFullYear();
        }
        return person;
    })
    .toSorted((a,b)=>{
        const prevPersonAge=a.yearOfDeath-a.yearOfBirth;
        const nextPersonAge=b.yearOfDeath-b.yearOfBirth;
        return (nextPersonAge-prevPersonAge);
    })[0];
};

// Do not edit below this line
module.exports = findTheOldest;
