
var person = {
    firstname: 'Jonh',
    lastname: 'Doe',
    getFullName: function() {

        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }

}


var logName = function(lang1, lang2) {

    console.log('Logged: ' + this.getFullName());
    console.log('Arguments: ' + lang1 + ' ' + lang2);
    console.log('----------------------');

}

// Bind will bind whatever object literal and methods to any other function
// and will assign the keyword 'this' to that object method(s)
var logPersonName = logName.bind(person);
logPersonName('en','es');

//logName.call(person, 'en','es');

//logName.apply(person, ['en','es']);

//----------------------------------
// function Borrowing

var person2 = {
    firstname: 'Raul',
    lastname: 'Salazar',
}

console.log(person.getFullName.apply(person2));

// function Currying

function multiply(a,b){
    return a*b;
}

// the parameter 'this' refers to the same function, the 2 correspond to the 'a' parameter
var mutiplyByTwo = multiply.bind(this,2);
//by passing just on parameter 4, that will be the assign to the 'b' parameter
console.log(mutiplyByTwo(4));









