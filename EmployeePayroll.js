/*
Below program to Calculate Daily Employee Wage based onpart time or full time work 
- Use Math.Random to check absent, Part Time or Full Time.
- Assume Part Time is 4 Hrs and Full time is 8 Hrs and per hour wage is $20.
- Calculating Wages for a Month assuming 20 Working Days in a Month.
*/
console.log("Welcome to Employee payroll");
const isPatrTime = 1;
const isFullTime = 2;
const partTimeHours = 4;
const fullTimeHours = 8;
const wagePerHours = 20;
const totalWorkingDays = 20;
let empHours = 0;
//check if employee is part time, full time or absent.
function getWorkHours(empCheck){
    switch(empCheck){
        case isPatrTime:
            console.log("Employee is part time");
            return partTimeHours;
            break;
        case isFullTime:
            console.log("Employee is full time");
            return fullTimeHours;
            break;
        default:
            console.log("Employee is absent");
            return 0;
            break;        
    }
}
for(let day = 0; day < totalWorkingDays; day++){
    let empCheck = Math.floor(Math.random()*10)%3;
    empHours += getWorkHours(empCheck);
}
let empWage = empHours * wagePerHours;
console.log("Total wage is: "+empWage);