
// this is a function constructor when using the new keyword
function Person(firstname, lastname){

    this.firstname = firstname;
    this.lastname = lastname;

    console.log('this function is invoked');    
}

Person.prototype.getFullName = function() {
    return this.firstname + ' ' + this.lastname;
}

var john = new Person('Jonh','Doe');
console.log(john);

var jane = new Person('Jane','Doe');
console.log(jane);

Person.prototype.getFormalFullName = function() {
    return this.lastname + ', ' + this.firstname;
}

console.log(jane.getFormalFullName());


String.prototype.isLengthGreaterThan = function(limit) {
    return this.length > limit;
}

console.log('John'.isLengthGreaterThan(3));
console.log('John'.isLengthGreaterThan(13));

Number.prototype.isPositive = function(){
    return  this > 0
}

var a = new Number(3);
console.log(a.isPositive());


/* b is primitive but c is a function object */ 
var b = 3;
var c = new Number(3)
console.log(a == b);

console.log(a===b);


/* Arrays are also objects

do not use (for.. in) format
but instead
user (for.. to) format

*/ 

var arr = ["Jonh","Jane","Jim"];

for(var prop in arr){
    console.log(prop + ': ' + arr[prop]);
}


/* Pure Prototypcally inherency
    using Object.create()
*/

var Client = {
    firstname: "John",
    lastname: "Doe",
    greet: function(){
        return "Hi " + this.firstname;
    }
}

var Thom = Object.create(Client);
Thom.firstname = "Thom";
console.log(Thom);

/* 
    using typeOf or InstanceOf
*/

var d = 3
console.log(typeof a);
console.log(Object.prototype.toString.call(d));


var greet = "Hello";
console.log(typeof greet);
console.log(Object.prototype.toString.call(greet));

var obj = {};
console.log(typeof obj);
console.log(Object.prototype.toString.call(obj));

var ar = [];
console.log(typeof ar);
console.log(Object.prototype.toString.call(ar));

function Org(name){
    this.name = name;
}

var e = new Org('Jane');
console.log(typeof e);
console.log(Object.prototype.toString.call(e));

console.log(Thom instanceof Org);
console.log(e instanceof Org);

console.log(typeof undefined);
console.log(typeof null);
console.log(typeof Number);
console.log(typeof String);
console.log(typeof Org);