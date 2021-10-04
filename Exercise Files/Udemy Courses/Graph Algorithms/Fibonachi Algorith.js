

// Dynamic Programming - Learn to Solve Algorithmic Problems & Coding Challenges
// https://www.youtube.com/watch?v=oBt53YbR9Kk&list=RDCMUC8butISFwT-Wl7EV0hUK0BQ&index=3


// using memoization

const fib = (n, memo = {}) => {

    if (n in memo) return memo[n];
    //this line means that is the first 2 fibonachi numbers, fib(1) and fib(2) is 1
    //1 2 3 4 5 6  7 8  9
    //1 1 2 3 5 8 13 21 34
    if (n<=2) return 1;

    //to calculate and fib number you only need the previous fib and second prev fib added together
    memo[n] = fib(n-1,memo) + fib(n-2, memo);
    return memo[n];

}

console.log(fib(40));