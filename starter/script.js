'use strict'

// let hasDriversLicense = false;
// let passTest = true

// if(passTest) hasDriverLicense = true;

// if(hasDriversLicense) console.log("drive");



// function logger(){
//     console.log(arguments[0]);
// }
// console.log(logger(10));

// function juicer(apples, oranges){
//     const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//     return juice;
// }

// const appleJuice = juicer(10, 0)
// const orangeJuice = juicer(0, 20)

// console.log(appleJuice);
// console.log(orangeJuice);


// const age = function(birthYear){

//     return 2023 - birthYear;
// }
// console.log(age(2002));


//*****Function Declarations vs. Expressions

// const worldPopulation = 7900;

// function percentageOfWorld1(population){
//     return (population * 100)/ worldPopulation;
// }
// const indiaPop = percentageOfWorld1(235)
// const chinaPop = percentageOfWorld1(543)
// const americaPop = percentageOfWorld1(989)

// console.log(indiaPop);
// console.log(chinaPop);
// console.log(americaPop);

// const percentageOfWorld2 = function(population){
//     return (population * 100)/ worldPopulation;
// }
// const canadaPop = percentageOfWorld1(235)
// const southAfPop = percentageOfWorld1(543)
// const PerisPop = percentageOfWorld1(989)
// console.log(canadaPop);
// console.log(southAfPop);
// console.log(PerisPop);


//*****Arrow Functions
// const worldPopulation = 7900;
// const percentageOfWorld3 = (population) => {
//     return (population * 100) / worldPopulation;
// }

// const indiaPop = percentageOfWorld3(1358);

// console.log(indiaPop);


//*****Functions Calling Other Functions
// const worldPopulation = 7900;

// const calPersentage = (population)=>{
//     return (population * 100) / worldPopulation;

// }

// const describePopulation= (country, population)=>{
//     const persentage = calPersentage(population);
//     return `${country} has ${population} million people, which is about ${persentage}% of the world`
// }

// console.log(describePopulation("india", 579));
// console.log(describePopulation("china", 342));
// console.log(describePopulation("pak", 173));


// ***** Coding Challenge #1

// let calcAverage = (val1, val2, val3) => {
//     return (val1 + val2 + val3) / 3;
// }

// let avgDolphine = calcAverage( 85, 54 ,41)
// let avgKoalas = calcAverage(23, 34 ,27)


// let checkWin = (dol, koal) => {
//     if (2 * koal <= dol) {
//         return "dolphine wins"
//     } else if (2 * dol <= koal) {
//         return "koalas wins"
//     } else {
//         return "no one wins"
//     }
// }

// console.log(checkWin(avgDolphine, avgKoalas))


// *****  Introduction to Arrays

const worldPopulation = 7900;
const populations = [13, 234, 2452, 123];

const pop1 = populations[0]
const pop2 = populations[1]
const pop3 = populations[2]
const pop4 = populations[3]

const calPersentage = (population) => {
    return (population * 100) / worldPopulation;
}
const pop1Per = calPersentage(pop1)
const pop2Per = calPersentage(pop2)
const pop3Per = calPersentage(pop3)
const pop4Per = calPersentage(pop4)

const percentageOfWorld1 = [pop1Per, pop2Per, pop3Per ,pop4Per]
console.log(percentageOfWorld1);





