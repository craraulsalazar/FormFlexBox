

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
let firstDay = new Date("3/1/2020")

function getNextDay(day){
    let nextDay = new Date(day);
    nextDay.setDate(day.getDate()+1);
    return nextDay;
}

//console.log(getNextDay(firstDay))

function generateTasks() {

    return [...Array(roll(2,5))].map((_, i) => {
            return {
                index: i,
                name: `Task ${roll(1,60)}`,
                complete: roll(0,2) ? true: false
            }    
        }
    )

}

//console.log(generateTasks())

function buildWeek(day) {
    return [...Array(7)].map((_,i) => {

            let weekday = {
                index: i,
                date: day,
                tasks: generateTasks()
            }

            day = getNextDay(day);

            return weekday;

        }
    )
}

//console.log(buildWeek(firstDay))

let week = buildWeek(firstDay);

let schedule = document.getElementById("weeklyschedule");
let scheduleHtml = week.reduce((accum, day)=> {

        return accum + `<div class="day">
            <div>${weekdays[day.date.getDay()]} </div>
            <div class="tasks">
                ${tasksToHtml(day.tasks)}
            </div>
        </div>
        `
    }
,'')

schedule.innerHTML = scheduleHtml;

function tasksToHtml(tasks) {
    return tasks.reduce((accum, task) => {
        return accum + `
                <div class="circle-container ${task.complete ? 'checked':''} ">
                    <div class="circle"></div>
                    <label>${task.name}</label>
                </div>
        `
    }
    ,'')

}
