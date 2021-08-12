
function tellMeWhenDone(callback){

        var a = 100;

        setTimeout(function() {

            callback();

            }, 2000

        )

}

tellMeWhenDone(function(){
    console.log("I am done..");
});

tellMeWhenDone(function(){
    console.log("Now I am done People..");
});