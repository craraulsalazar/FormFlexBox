
function makeGreeting(lang){

    return function(Fname, Lname){

        if (lang === 'en'){
            console.log('Hello ' + Fname + ' ' + Lname);
        }

        if (lang === 'es'){
            console.log('Hola ' + Fname + ' ' + Lname);
        }

    }

}


//because makeGreeting returns only functions
//we can then save those functions to a variables
//then each of those variables when run create a unique execution context

var greetEnglish = makeGreeting('en');
var greetSpanish = makeGreeting('es');

greetEnglish('Jonh', 'Doe');
greetSpanish('Raul', 'Salazar');
makeGreeting('es')('Regina','Salazar');

