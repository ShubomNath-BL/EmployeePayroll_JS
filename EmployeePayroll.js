/*
Below program to Calculate Daily Employee Wage based onpart time or full time work 
- Use Math.Random to check absent, Part Time or Full Time.
- Assume Part Time is 4 Hrs and Full time is 8 Hrs and per hour wage is $20.
- Calculate Wages till a condition of total working hours of 160 or max days of 20 is
reached for a month.
- Storing Daily Wage in a Array.
- Store the Day and the Daily Wage along with the Total Wage useing Map.
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
let empWageMap = new Map();
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
    empWageMap.set(workingDays, calculateDailyWage(empHours));
}
let empWage = calculateDailyWage(totalEmpHrs);  //Calculating total wages.
console.log(empWageMap);
console.log("Total wage is: "+empWage);
console.log("Total Working Days: "+workingDays);
console.log("Total Employee hours: "+totalEmpHrs);

//UC7A - Calc total Wage using Array forEach or reduce method
let totEmpWage = 0;
function sum(dailyWage){
    totEmpWage += dailyWage;
}
empWageArray.forEach(sum);
console.log("---------------UC7A--------------");
console.log("Total Working Days: "+workingDays);
console.log("Total Employee hours: "+totalEmpHrs);
console.log("Total wage is: "+totEmpWage);
function totalWages(totalWage, dailyWage){
    return totalWage + dailyWage;
}
console.log("Emp wage with reduce: "+ empWageArray.reduce(totalWages,0));

//UC7B-Show the Day along with Daily Wage using Array map helper function.
console.log("---------------UC7B--------------");
let dailyCntr = 0;
function mapDailyWage(dailyWage){
    dailyCntr++;
    return dailyCntr +" = "+ dailyWage;
}
let mapDailyWageArr = empWageArray.map(mapDailyWage);
console.log("Daily wage map: "+mapDailyWageArr);

//UC7C-Show Days when Full time wage of 160 were earned using filter function.
console.log("---------------UC7C--------------");
function fullTimeWage(dailyWage){
    return dailyWage.includes(160);
}
let fullTimeWageArray = mapDailyWageArr.filter(fullTimeWage);
console.log("Full time wage earned on: "+ fullTimeWageArray);

//UC7D-Find the first occurrence when Full Time Wage was earned using find function.
console.log("---------------UC7D--------------");
console.log("Full time wage first earned on: "+ mapDailyWageArr.find(fullTimeWage));

//UC7E-Check if Every Element of Full Time Wage is truly holding Full time wage.
console.log("---------------UC7E--------------");
console.log("Check every element has full time wage: "+ mapDailyWageArr.every(fullTimeWage));

//UC7F-Check if there is any Part Time Wage.
console.log("---------------UC7F--------------");
function partTimeWage(dailyWage){
    return dailyWage.includes(80);
}
console.log("Part time wage earned on: "+ mapDailyWageArr.some(partTimeWage));

//UC7G-Find the number of days the Employee Worked.
console.log("---------------UC7G--------------");
function totalDaysWorked(numOfDays, dailyWage){
    if(dailyWage>0) return numOfDays+1;
    return numOfDays;
}
console.log("Number of days employee worked: "+ empWageArray.reduce(totalDaysWorked,0));