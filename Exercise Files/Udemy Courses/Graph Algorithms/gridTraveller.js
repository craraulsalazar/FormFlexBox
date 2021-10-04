
const gridTraveler = (m,n, memo={}) => {

    const key = m + ',' + n;
    if (key in memo) return memo[key];
    if (m == 1 && n ==1) return 1;
    if (m ==0 || n == 0) return 0;

    //going down one row, stay in same column
    //then going right one column
    //for more details checkout the graph logic
    memo[key] = gridTraveler(m-1,n, memo) + gridTraveler(m,n-1, memo);
    return memo[key];

};

// console.log(gridTraveler(3,3));
// console.log(gridTraveler(3,13));
// console.log(gridTraveler(13,3));
// console.log(gridTraveler(100,13));

//*********************************** */
// canSum memoization
// check an array for any posible combination or items that make up a sum

const canSum = (targetSum, numbers, memo={})=>{

    if (targetSum in memo) return memo[targetSum];
    if (targetSum == 0) return true;
    if (targetSum < 0) return false;

    for(let num of numbers){
        const remainder = targetSum - num;
        if (canSum(remainder, numbers,memo) === true){
            memo[targetSum] = true;
            return true;
        }

    }

    memo[targetSum] = false;
    return false;

}

// console.log(canSum(7,[2,3]));
// console.log(canSum(7,[2,4]));
// console.log(canSum(2107,[2,4]));

//*********************************** */
//How Sum - return all posible arrays that make up a target sum

const howSum = (targetSum, numbers, memo={})=>{

    if (targetSum in memo) return memo[targetSum];
    if (targetSum == 0) return [];
    if (targetSum < 0) return null;

    for(let num of numbers){
        const remainder = targetSum - num;
        const remainderResult = howSum(remainder, numbers,memo);

        if (remainderResult !== null){
            memo[targetSum] = [...remainderResult, num]; 
            //this is called the spread operator
            return memo[targetSum]; 
        }

    }

    memo[targetSum] = null;
    return memo[targetSum];
    
}

//  console.log(howSum(7,[2,3]));
//  console.log(howSum(7,[2,4]));
//  console.log(howSum(7,[5,3,4,7]));
//  console.log(howSum(300,[7,3]));
//  console.log(howSum(300,[7,14]));

//Best Sum

const bestSum = (targetSum, numbers, memo={})=>{

    if (targetSum in memo) return memo[targetSum];
    if (targetSum == 0) return [];
    if (targetSum < 0) return null;

    let shortestCombination = null;

    for(let num of numbers){
        const remainder = targetSum - num;
        const remainderCombination = bestSum(remainder, numbers, memo);

        if (remainderCombination !== null){
            const combination =  [...remainderCombination, num];
            if (shortestCombination === null || combination.length < shortestCombination.length) {
                shortestCombination = combination;
            }
            
        }

    }

    memo[targetSum] = shortestCombination;
    return shortestCombination;
    
}


// console.log(bestSum(7,[2,3]));
// console.log(bestSum(7,[5,3,4,7]));
// console.log(bestSum(100,[1,2,5,25]));

//Fibunachi algorith using tabulation

const fib = (n)=> {
    const table = Array(n+1).fill(0);

    table[1] =1;
    for(let i=0; i<=n; i++){
        table[i+1] += table[i];
        table[i+2] += table[i];
    }

    return table[n];
}


// console.log(fib(6));
// console.log(fib(60));


const gridTravelerTab = (m,n) => {
    const table = Array(m+1)
        .fill()
        .map(() => Array(n+1).fill(0) );

    table[1][1] =1;

    for(let i=0; i<= m; i++){
        for(let j=0; j<=n; j++){
            const current = table[i][j];

            if (j+1 <= n) table[i][j+1] += current;
            if (i+1 <= n) table[i+1][j] += current;

        }

    }

    return table[m][n];

}

console.log(gridTravelerTab(1,1));
console.log(gridTravelerTab(3,3));
console.log(gridTravelerTab(15,3));