
const factorial = (n) => {    
    
    let result = 0;

    if ((n-1)<1)
    {
        return 1;
    }
    else
    {
        result+= (n * factorial(n-1));
        return result; 
    }

}


console.log(factorial(0));
console.log(factorial(3));
console.log(factorial(6));
console.log(factorial(16));
