
// 5 Must Know JavaScript Features That Almost Nobody Knows
// https://www.youtube.com/watch?v=v2tJ3nzXh8I

// JavaScript Higher Order Functions & Arrays
// https://www.youtube.com/watch?v=rRgD1yVwIvE&t=1196s

// 8 Must Know JavaScript Array Methods
// https://www.youtube.com/watch?v=R8rmfD9Y5-c

//Create a number generator number
//https://www.youtube.com/watch?v=IJ6EgdiI_wU

const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//High order functions
//foreach

// for(let i=0; i < companies.length; i++){
//     console.log(companies[i]);
// }

// companies.forEach(function(company){
//     console.log(company);
//   }
// )

// for(let company of companies){
//   console.log(company);
// }


//filter
let canDrink = ages.filter( function (age) {
  if ( age > 62) {
    return true;
  }
});


let canDrinkIE6 = ages.filter((age)=> age > 20);

let retailCompanies = companies.filter(
(company)=> 
    company.category === 'Retail'
)

// console.log(canDrink)
// console.log(canDrinkIE6)
// console.log(retailCompanies)

//map

const companyNames = companies.map(
  (company)=>{
      return `${company.name} [${company.start} - ${company.end}]`;
  }

)

const ageMap = ages.map(age=> Math.sqrt(age)).map(age=> age * 2);

// console.log(ageMap)
// console.log(companyNames)



//sort


//reduce

const items = [
  {name: "Rice", price: 5.25},
  {name: "Book", price: 20.03},
  {name: "Chicken", price: 10.55},
  {name: "Monitor", price: 100.99}
]

const peopleAge = [
  {name: "Kyle", age: 26},
  {name: "John", age: 31},
  {name: "Sally", age: 42},
  {name: "Jill", age: 42}
]

const totalPrice = items.reduce((total, item)=>{

  return total + item.price

}, 0
)

console.log(totalPrice);

const result = peopleAge.reduce((groupedAges,person)=>{

    const age = person.age;
    if (groupedAges[age] == null) groupedAges[age] = [];
    groupedAges[age].push(person)

    return groupedAges

},{}
)

console.log(result);


//How to use JS Array Methods | JavaScript Full Tutorial
//https://www.youtube.com/watch?v=0m3lBRVSTH8

//IndexOf
let supers = ['Superman','Batman','Flash','Aquaman'];

console.log(supers);

console.log(super.indexOf('Flash')); //2
console.log(super.indexOf('Green Lantern')); //-1

//includes

console.log(super.includes('Batman'));  //true
console.log(super.includes('baTman'));  //false

//Pop
//remove last value of Array
console.log(supers.pop());
console.log(supers);  //Aquaman was removed

//shift
//remove first value of Array
console.log(supers.shift());
console.log(supers);  //Superman was removed

//push
//add new value to the end of the array
console.log(supers.push('Spiderman'));

//unshift
//add new value to the beginning of the array
console.log(supers.unshift('Thorn'));

//concat
let newSuppers = supers.concat(['Wolverine','Cyclops','Professor X']);
console.log(newSuppers);

//join

console.log(supers.join('|'));

//split
let DCcommicHeroes = 'Superman, Batman, Flash';
let suppersArray = DCcommicHeroes.split(',');

console.log(suppersArray);

//Slice (removes range of items from the array)

let xmen = newSuppers.slice(6,9);  //that includes index 6,7,8 but NOT 9
console.log(xmen);

//Splice (removes and replace item in the array)
newSuppers.splice(5,1,'Green Lantern');

//add item in between array
newSuppers.splice(5,0,'Green Lantern');

//remove item 
newSuppers.splice(3,1);


//reverse method
console.log(newSuppers.reverse());

//sort method
console.log(newSuppers.sort());

//Task

/*
  1. Create an array with the following fruites: apple, orange, banana.
  Use the correct array method to add the fruits cherry and pinneappe to the
  beginning of the array. Then add the fruits plum and grapes to the end of
  the array, once again using the relevent array method.

 2. Replace orange with lemon using the splice() method.

 3. Sort the values alphabetically.

 */

 //task #1 done
let fruits = ['apple','orange','banana'];
fruits.unshift('cherry','pineapple');

fruits.push('plum','grapes');

//task #2 done
fruits.splice(3,1,'lemon');

//task #3 done
fruits.sort();


//some (returns true of false)
let numbers = [1,2,3,11];

let higherThanTen = numbers.some(
  function (value) {
     return value > 10;   //returns true
  }

);


//every (checks all items in the array meet this condition)
let allhigherThanTen = numbers.every(
  function (value) {
     return value > 10;  //returns false
  }

);


//find

let findSuper = supers.find(
   function (value) {
      return value === 'Thorn'
   }
);


//findIndex
let findIndexSuper = supers.findIndex(
  function (value) {
     return value === 'Thorn'
  }
);


//spread operator

let nums = [1,2,3];

let myArray = [...numbers, 4,5,6];

console.log(numbers);
console.log(myArray);


const book = {
  title: "the lion, the witch and the wardrobe",
  release: "16/10/1950",
  author: "C.S. Lewis"
};

const updatedBook = {
  ...book,
  characters: "Peter, Susan, Edmund, Lucy"
};

console.log(book);
console.log(updatedBook);


//Rest Parameter

function restParameter(...z) {
  console.log(z);
}

let petAnimals = ['apple','ball','cat','dog','elephant']

restParameter(...petAnimals);

//Nullish coalescing Operator

let game; //undefine
let game2 = null; //null
let game3 = 'Sonic' //string

console.log(
    game2 ?? game3

);


let user;  //undefine
console.log(user || "Guest");

let score = 0; //falsy value
console.log( score || "no score registered");

console.log(score ?? "no score registered")

//the ternary operator
let age = 18;
let message = age >=18 ? "You can vote": "You can not vote";

console.log(message);


