personData={
personid:101,
personName:"Jack",
age:30,
 personCars:{
   car1:"Swift",
   car2:"BMW",
   car3:"Alto"
 }

};

console.log(personData.personName + " has these cars:");
// console.log(personData.personCars.car1);
// console.log(personData.personCars.car2);
// console.log(personData.personCars.car3);
console.log(personData.personCars["car1"]);
console.log(personData.personCars["car2"]);
console.log(personData.personCars["car3"]);
