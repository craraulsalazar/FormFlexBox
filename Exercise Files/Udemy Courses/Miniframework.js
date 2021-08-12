
(function(global, empty) {

    var Greetr = function(firstname, lastname, language){

        return new Greetr.init(firstname,lastname, lastname);
    }

    //private data structures
    var supportLangs = ['en','es'];
    var greetings = {
        en: 'Hello',
        es: 'Hola'
    };
    var formalGreetings = {
        en:'Greetings',
        es:'Saludos'
    };

    var logMessages = {
        en:'Logged in',
        es:'iniciar sesion'
    };

    //this prototype will be exposed to the outside world
    Greetr.prototype = {
        fullName: function() {
            return this.firstname + ' ' + this.lastname;
        },
        validate: function() {

            if (supportLangs.indexOf(this.language) == -1) {
                throw "Invalid Language";
            }
        },
        greeting: function() {
            return greetings[this.language] + ' ' + this.firstname + '!';
        },
        formalGreeting: function(){
            return formalGreetings[this.language] + ', ' + this.fullName();
        },
        greet: function(formal){
            var msg;

            if (formal){
                msg = this.formalGreeting();
            }
            else {
                msg = this.greeting();
            }

            if (console){
                console.log(msg);
            }

            return this;
        },
        log: function() {

            if (console){
                console.log(logMessages[this.language] + ':' + this.fullName());
            }

            return this;
        },
        setLang: function(lang) {
            this.language = lang;
            this.validate();
            return this;
        }

    };

    Greetr.init = function(firstname,lastname, language){
     
        var self = this;
        self.firstname = firstname || '';
        self.language = lastname || '';
        self.language = language || 'en';

        self.validate();

    }

    //all my functions will be added to Greetr.prototype
    Greetr.init.prototype = Greetr.prototype;

    //this methods will be exposed the window object
    global.Greetr = global.G$ = Greetr;

}(window,{})

);



var g = G$('John','Doe');
//chainable methods because returning keyword 'this'
g.greet().greet(true).setLang('es').greet(true);
console.log(g.greet().greet(true).setLang('es').greet(true));