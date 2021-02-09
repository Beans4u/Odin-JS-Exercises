const today = new Date();

function findAge(person) {
    const endYear = person.yearOfDeath || today.getFullYear();
    return endYear - person.yearOfBirth;
}

let findTheOldest = function(people) {

    const sortedByAge = people.sort((personA, personB)=>{
        return findAge(personB) - findAge(personA);
      });
  
      return sortedByAge[0];

}

module.exports = findTheOldest