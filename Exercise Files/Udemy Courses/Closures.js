
console.log(new Date())

console.log(new Date())

//bad sample (NOT A CLOSURE)
function buildFunctions() {
    var arr = [];

    for(var i=0; i<3; i++)
    {
        arr.push(
            function() {
                console.log(i);
            }

        );

    }

    return arr;
}

var fs = buildFunctions();
fs[0](); /*?*/
fs[1]();
fs[2]();

//ES5 Way
function buildFunctions2() {
    var arr = [];

    for(var i=0; i<3; i++)
    {
        arr.push(
            (
                //create new execution context
                function(j) {

                    return function(){
                        console.log(j);
                    }
                    
                }
            )(i)

        );

    }

    return arr;
}

var fs2 = buildFunctions2();
fs2[0]();
fs2[1]();
fs2[2]();


//*********************************** */

//Using ES6
function buildFunctions3() {
    var arr = [];

    for(var i=0; i<3; i++)
    {
        let j = i;
        arr.push(
            function() {
                console.log(j);
            }

        );

    }

    return arr;
}

var fs3 = buildFunctions3();
fs3[0]();
fs3[1]();
fs3[2]();
