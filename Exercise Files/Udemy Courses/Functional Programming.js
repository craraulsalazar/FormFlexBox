

//bad code

var arr1 = [1,2,3];
var arr2 = [];

for (var i=0; i < arr1.length; i++) {
    arr2.push(arr1[i] * 2);
}

//good code using functional programming technique

function mapForEach(arr, fn) {
    
    var newArr = [];
    for(var i=0; i <arr.length; i++){
        newArr.push(
            fn(arr[i])
        );
    }

    return newArr;
}

var mappedArr = mapForEach(arr1, function(item){
    return item*2;
}
); 

console.log(mappedArr);

var mappedArr2 = mapForEach(arr1, function(item){
    return item > 2;
}
); 

console.log(mappedArr2);

var checkPastLimit = function(limiter, item){
    return item > limiter;
}

var arr4 = mapForEach(arr1, checkPastLimit.bind(this,1)
    )

console.log(arr4);    

// this function returns a function expression that take 'limiter' as a parameter
// then it maps it into a function expression,
// then it bind it to itself and set the first parameter as the default
var checkPastLimitSimplified = function(limiter){
    return function(limiter, item){
        return item > limiter;
    }.bind(this, limiter);
}

var arr5 = mapForEach(arr1, checkPastLimitSimplified(2));
console.log(arr5);

// read https://underscorejs.org/ to learn more about functional programming
// https://lodash.com/
// https://momentjs.com/docs/#/use-it/  for dates


var root = typeof self == 'object' && self.self === self && self ||
          typeof global == 'object' && global.global === global && global ||
          Function('return this')() ||
          {};

//console.log(root);          