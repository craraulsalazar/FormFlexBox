
// 5 Must Know JavaScript Features That Almost Nobody Knows
// https://www.youtube.com/watch?v=v2tJ3nzXh8I

// JavaScript Higher Order Functions & Arrays
// https://www.youtube.com/watch?v=rRgD1yVwIvE&t=1196s

// 8 Must Know JavaScript Array Methods
// https://www.youtube.com/watch?v=R8rmfD9Y5-c

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
