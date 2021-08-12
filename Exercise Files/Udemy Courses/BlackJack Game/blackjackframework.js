(function(global, empty) {

    var BlackJack = function(card1, card2){

        return new BlackJack.init(card1, card2);
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

    var cards = [];
    let sum = 0;
    var cardsEl = document.getElementById("cards-el"); 
    var messageEl = document.getElementById("message-el");
    var sumEl = document.getElementById("sum-el"); 

    //this prototype will be exposed to the outside world
    BlackJack.prototype = {
        render: function() {
                       
            // cardsEl.textContent = "Cards " + cards[0] + ' ' + cards[1];
            this.newCard();
            this.validate();
            
        },
        dealNewCard:function() {
            cards.push(this.getRandomCard());
        },
        newCard: function(){

            // for(var i=0; i<=cards.length-1; i++){

            // }

            cards.push(this.getRandomCard());
            cards.push(this.getRandomCard());


        },
        getRandomCard: function(){

            //13 number of cards in a suit
            let randomNum = Math.floor(Math.random() * 13) + 1;
            if (randomNum == 1) {
                return 11;
            }
            else if (randomNum > 10)
            {
                return 10;
            }
            else
            {
                return randomNum;
            }
            
        },
        GetTotalCards: function(){
            
            for(var card in cards)
            {
                console.log(card);
                sum += card;
            }

            return sum;
        },
        validate: function() {

            // if (supportLangs.indexOf(this.language) == -1) {
            //     throw "Invalid Language";
            // }

            sum = this.GetTotalCards();
            if (sum <= 20){
                message = "Do you want to draw a new card";
            }
            else if (sum === 21){
                message = "Do you want to draw a new card";
            }
            else {
                message = "You're out of the game"
            }
            
            sumEl.textContent = "Sum: " + sum;
            messageEl.textContent = message;

        },
        greeting: function() {
            return greetings[this.language] + ' ' + this.firstname + '!';
        },
        formalGreeting: function(){
            return formalGreetings[this.language] + ', ' + this.fullName();
        },
        log: function() {

            if (console){
                console.log(logMessages[this.language] + ':' + this.fullName());
            }

            return this;
        }

    };

    BlackJack.init = function(card1, card2){
     
        var self = this;
        self.card1 = card1 || '';
        self.card2 = card2 || '';

        //self.validate();

    }

    //all my functions will be added to Greetr.prototype
    BlackJack.init.prototype = BlackJack.prototype;

    //this methods will be exposed the window object
    global.BlackJackGame = global.BJ$ = BlackJack;

}(window,{})

);