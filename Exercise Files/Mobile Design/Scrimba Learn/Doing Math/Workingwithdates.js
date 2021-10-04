

//Ctrl+Shift + P == COMMAND PALETTE

function roll(min, max, floatFlag){
    let r = Math.random() * (max - min) + min;
    //console.log(floatFlag);
    return floatFlag? r: Math.floor(r);
}


let today = new Date();
//console.log(today);

//let example1 = new Date(year,month,day,hour,minute,second,millisecond);
let example1 = new Date(2021,10,23,5,55,35,222);
//console.log(example1);

//let example2 = new Date(year,month)
let example2 = new Date(2019,2);
//console.log(example2);

let example3 = new Date("October 13, 2014 11:13")
//console.log(example3);

let d = new Date(2020, 0, 11, 20);
d.setFullYear(2000);
//console.log(d);

let weekdays = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
let firstDay = new Date("3/4/2020")

function getNextDay(day){
    let nextDay = new Date(day);
    nextDay.setDate(day.getDate()+1);
    return nextDay;
}

//console.log(getNextDay(firstDay))


