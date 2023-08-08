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

// const worldPopulation = 7900;
// const populations = [13, 234, 2452, 123];

// const pop1 = populations[0]
// const pop2 = populations[1]
// const pop3 = populations[2]
// const pop4 = populations[3]

// const calPersentage = (population) => {
//     return (population * 100) / worldPopulation;
// }
// const pop1Per = calPersentage(pop1)
// const pop2Per = calPersentage(pop2)
// const pop3Per = calPersentage(pop3)
// const pop4Per = calPersentage(pop4)

// const percentageOfWorld1 = [pop1Per, pop2Per, pop3Per ,pop4Per]
// console.log(percentageOfWorld1);


// ***** : Basic Array Operations (Methods)

// let neighbours = ["india", "china", "pak","shri-l"];

// neighbours.push("Utopia");

// neighbours.pop();

// if(!neighbours.includes("Germany")){
//     console.log("Probably not a central European country :D");
// }
//  neighbours.indexOf[2] = "pakistan"
//  console.log(neighbours);


// Coding Challenge-2

// const calTip = (bill)=> (bill >= 50 && bill <= 300) ? (bill * 15) / 100 : (bill * 20) / 100;
// let bills = [125,555,44]
// let tips= []
// tips[0] = calTip(bills[0])
// tips[1] = calTip(bills[1])
// tips[2] = calTip(bills[2])

// console.log(tips);

// *****: Introduction to Objects

// const myCountry ={
//     country : "india",
//     capital :"jasdfgas",
//     language: "ashkdg",
//     population: 734192,
//     neighburs :["sdfa","aas","ASdf"]
// }

// ***** Dot vs. Bracket Notation
// console.log(`${myCountry.country} has ${myCountry.population} peoples ${myCountry.language}- sepaking people ${myCountry.neighburs.length} neighbouring countries and capital called ${myCountry.capital}`);

// ***** Object Methods

// const myCountry ={
//     country : "india",
//     capital :"jasdfgas",
//     language: "ashkdg",
//     population: 734192,
//     neighburs :["sdfa","aas","ASdf"],
//     describe: function(){
//         return `${this.country} has ${this.population} peoples ${this.language}- sepaking people ${this.neighburs.length} neighbouring countries and capital called ${this.capital}`
//     },
//     checkIseLand: function(){
//         this.isIseland = (this.neighburs.length > 0) ? true : false;
//         return this.isIseland;
//     }
// }

// console.log(myCountry.describe());

// *****Coding Challenge #3

// const mark = {
//     fullName: "Mark Miller",
//     weight: 34,
//     height: 234,
//     calcBMI: function () {
//         this.BMI =  this.weight / this.height**2
//         return this.BMI
//     }
// }
// const john = {
//     fullName: "John Smith",
//     weight: 23,
//     height: 564,
//     calcBMI: function () {
//         this.BMI =  this.weight / this.height**2
//         return this.BMI
//     }
// }

// if(mark.calcBMI() > john.calcBMI()){
//     console.log(`${mark.fullName}'s BMI is higher then ${john.fullName}'s BMI`);
// }else{
//     console.log(`${john.fullName}'s BMI is higher then ${mark.fullName}'s BMI`);
// }

// *****  Iteration: The for Loop
// for(let i = 1; i <= 50 ; i++){
//     console.log(`Voter NUmber ${i} is voting now`);
// }


// ***** Looping Arrays, Breaking and Continuing

// const worldPopulation = 7900;
// const populations = [13, 234, 2452, 123];
// const persentages2 = []
// for(let i = 0 ; i < populations.length; i++){
//     persentages2[i] = populations[i] *100 / worldPopulation
// }
// console.log(persentages2);

// ***** Looping Backwards and Loops in Loops
// const listOfNeighbours =[['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];

// for(let i = 0 ; i < listOfNeighbours.length; i++){
//     for(let j = 0 ; j < listOfNeighbours[i].length; j++){
//         console.log(listOfNeighbours[i][j]);
//     }
// }

// ***** The while Loop

// const worldPopulation = 7900;
// const populations = [13, 234, 2452, 123];
// const persentages3 = []

// let i = 0;
// while(i < populations.length){
//     persentages3[i] = populations[i] * 100 / worldPopulation;
//     i++;
// }
// console.log(persentages3);



// ***** Coding challenge- 4

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86 , 52]
// const tips = []
// const totals = []


// const calTip = (bill)=> (bill >= 50 && bill <= 300) ? (bill * 15) / 100 : (bill * 20) / 100;
 
// for(let i = 0; i < bills.length ; i++){
//     let tip = calTip(bills[i]);
//     tips.push(tip)
//     totals.push(tip + bills[i])
// }

// const calcAverage = (arr)=>{
//     let sum = 0;
//     for(let i =0; i < arr.length; i++){
//         sum += arr[i];
//     }
//      return sum / arr.length
// }

// console.log(calcAverage(totals));




