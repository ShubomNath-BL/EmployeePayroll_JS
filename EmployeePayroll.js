/*
Below program to Calculate Daily Employee Wage based onpart time or full time work 
- Use Math.Random to check absent, Part Time or Full Time.
- Assume Part Time is 4 Hrs and Full time is 8 Hrs and per hour wage is $20.
- Calculate Wages till a condition of total working hours of 160 or max days of 20 is
reached for a month.
- Storing Daily Wage in a Array.
*/
console.log("Welcome to Employee payroll");
const isPatrTime = 1;
const isFullTime = 2;
const partTimeHours = 4;
const fullTimeHours = 8;
const wagePerHours = 20;
const totalWorkingDays = 20;
const totalWorkingHours = 160;
let empHours = 0;
let workingDays = 0;
let totalEmpHrs = 0;
let empWageArray = new Array();
//check if employee is part time, full time or absent.
function getWorkHours(empCheck){
    switch(empCheck){
        case isPatrTime:
            return partTimeHours;
            break;
        case isFullTime:
            return fullTimeHours;
            break;
        default:
            return 0;
            break;        
    }
}
function calculateDailyWage(empHours){
    return empHours*wagePerHours;
}
//Calculating total working days & working hours
while(empHours<=totalWorkingHours && workingDays<totalWorkingDays){
    workingDays++;
    let empCheck = Math.floor(Math.random()*10)%3;
    empHours = getWorkHours(empCheck);
    totalEmpHrs += empHours;
    empWageArray.push(calculateDailyWage(empHours));
}
let empWage = calculateDailyWage(totalEmpHrs);  //Calculating total wages.
console.log(empWageArray);
console.log("Total wage is: "+empWage);
console.log("Total Working Days: "+workingDays);
console.log("Total Employee hours: "+totalEmpHrs);