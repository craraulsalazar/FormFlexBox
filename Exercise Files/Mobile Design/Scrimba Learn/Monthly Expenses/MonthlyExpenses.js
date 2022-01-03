//Ctrl+Shift + P == COMMAND PALETTE

function roll(min, max, floatFlag){
    let r = Math.random() * (max - min) + min;
    //console.log(floatFlag);
    return floatFlag? r: Math.floor(r);
}

let startDate = new Date("3/15/2020")

function getNextDay(day){
    let nextDay = new Date(day);
    nextDay.setDate(day.getDate()+1);
    return nextDay;
}

//Generate an array of all days in the month of a given date
function buildMonth(day) {
    let daysInMonth = getDaysInMonth(day.getMonth()+1, day.getFullYear());
    let iterableDay = new Date(day);
    iterableDay.setDate(1);
    let month = [...Array(daysInMonth)].map((_, i) =>{
        let monthDay = {
            index: i,
            date: iterableDay,
            expenses: []
        }
        iterableDay = getNextDay(iterableDay);

        return monthDay;
    }

    )
    return month;

}

//write a function to get thenumber of days in a given month
function getDaysInMonth(month, year){
    return new Date(year, month, 0).getDate();
}

let month = buildMonth(startDate);

function displayMonth(month,budget){

    let monthHtml = `<div class="monthly-summary">
        Budget: ${budget.toFixed(2)}
    </div>` +

     month.reduce(function(accumulator, day){
        return accumulator + `<div class="day">${day.date.getDate()}</div>`
    },''
)

    document.getElementById("MonthlyExpenses").innerHTML = monthHtml;

}



let annualIncome = roll(31000, 40000,1).toFixed(2);
let monthlyIncome = parseFloat(annualIncome)/12;
let rent = roll(1200, 1800, 1).toFixed(2);
let utilities = roll(300,500,1).toFixed(2);
let monthlyBudget = monthlyIncome - parseFloat(rent) - parseFloat(utilities);

displayMonth(month, monthlyBudget);
