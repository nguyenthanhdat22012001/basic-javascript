function validNumber(number) {
    if (typeof(number) == "number") {
        return number;
    }
    throw new Error(`${number} is type ${typeof(number)}, not number`);
}
function Distance(diff,unit) {
    let unitValid =  validNumber(unit);
    return Math.floor(diff / unitValid);
}

/// # bai1

function formatDate(Object_date,separation) {

   // return moment().format(`DD${params}MM${params}YYYY`);
    let day = Object_date;
    let date = day.getDate();
    let month = day.getMonth();
    let year = day.getFullYear();

   return `${date}${separation}${month}${separation}${year}`
}

console.log(formatDate(new Date(),'/'))

// bai2 

function getDaysInMonth(month,year) {
    let valid_month = validNumber(month);
    let valid_year = validNumber(year);
    // return moment(`${month}-${year}`, "MM-YYYY").daysInMonth();
    return new Date(year, valid_month,0).getDate();
}
//console.log(getDaysInMonth(9,2021))

// bai3 

function checkWeekend(day,month,year) {
    let valid_day = validNumber(day);
    let valid_month = validNumber(month);
    let valid_year = validNumber(year);

    let weekend =  d = new Date(valid_year,valid_month - 1,valid_day)

    return weekend == 0 || weekend == 6 ? 'weekend' : 'not weekend';
}

//console.log(checkWeekend(13,09,2021));


// bai4 

function howLong(h,m) {
    let valid_hours = validNumber(h);
    let valid_minute = validNumber(m);
    
    let timeNow = new Date();

    let time = new Date();
    time.setHours(valid_hours);
    time.setMinutes(valid_minute)

    if(timeNow < time) throw new Error('time is greater than current time')

    let diff = timeNow - time; // return  milliseconds

    let diffMins = Distance(diff,60000) //Math.floor(diff / 60000);
    return diffMins + " minutes ago";
}

//console.log(howLong(12,16))

// bai5

function daysFromBeginToNow() {
   let  now = new Date();
   let start = new Date(now.getFullYear(), 0, 1);
   let diff = now - start;
   let oneDay = 1000 * 60 * 60 * 24;
   let diffDays = Distance(diff,oneDay)
   return diffDays + " days";
}

//console.log(daysFromBeginToNow())

// # bai 6

function calculate_age(day,month,year) {

    let valid_day = validNumber(day);
    let valid_month = validNumber(month);
    let valid_year = validNumber(year);

    let birthday =  new Date(valid_year,valid_month - 1 , valid_day);
    let now = new Date(); 
    let diff =  now -birthday;
    let oneYear = 365 * 24 * 60 * 60 * 1000;
    let diffYear = Distance(diff,oneYear)

  return diffYear + " years ago";
}

//console.log(calculate_age(22,1,2001))

// bai 7 

function startOfWeek(day,month,year) {
    let valid_day = validNumber(day);
    let valid_month = validNumber(month);
    let valid_year = validNumber(year);
 

    let date = new Date(valid_year,valid_month - 1 , valid_day);
    
    let startOfWeek = date.getDate() - date.getDay() + 1;
    date.setDate(startOfWeek);
    return date.getDate() + " is start of week";
}

//console.log(startOfWeek(9,9,2021))


// bai8

function endOfMonth(month,year) {
    let valid_month = validNumber(month);
    let valid_year = validNumber(year);

    let endDay = new Date(valid_year,valid_month,0);

    return `the last day of the month ${endDay.getMonth() + 1} is ${endDay.getDate()}`;
}

//console.log(endOfMonth(10,2021))

//bai 9 
// function countDownNewYear() {
//     let today = moment();
//     let tagTime = document.querySelector('.time');
  
// // console.log(today.get('date'))
//    // return today.format('DD-MM-YYYY')

//     let setTime =  setInterval(() => {

//         if(today.month() != 0){
//             today.add(-1,'M');
//         }

//         if(today.month() == 0 && today.get('date') != 1){
//             today.add(-1,'d');
//         }

//         if(today.month() == 0 && today.get('date') == 1){
//             clearInterval(setTime);
//             console.log('stop');
//         }

//         tagTime.textContent = today.format('DD-MM-YYYY');
//     }, 1000);

// }
//countDownNewYear();
//console.log(countDownNewYear())

function countDownNewYear() {
    let today = new Date();
    let tagTime = document.querySelector('.time');

    let setTime =  setInterval(() => {

        if(today.getMonth() != 1){
            today.setMonth(today.getMonth() - 1);
        }

        if(today.getMonth() == 1 && today.getDate() != 1){
            today.setDate(today.getDate() - 1);
        }

        if(today.getMonth() == 0 && today.getDate('date') == 1){
            clearInterval(setTime);
            console.log('stop');
        }

        tagTime.textContent = formatDate(today,'/');
    }, 1000);

}
//countDownNewYear();



//bai 10

function countTime(stringTime,period) {
    let valid_period  = validNumber(period);

    if(valid_period > 1000 )
         throw new Error(`time < 1000`);
         
    let  arrTime =  StringTimeConvertArrayNum(stringTime);

    let preTime = new Date();
    preTime.setHours(arrTime[0]);
    preTime.setMinutes(arrTime[1]);
    preTime.setSeconds(arrTime[2]);

  

    let afterTime =new Date();
    afterTime.setHours(arrTime[0]);
    afterTime.setMinutes(arrTime[1]);
    afterTime.setSeconds(arrTime[2] + valid_period);

    return `pre time = ${formatTime(preTime,':')} , after time = ${formatTime(afterTime,':')}`
}

console.log(countTime('11:32:45',7));

// valid
function StringTimeConvertArrayNum(string) {
    let arrString = string.split(/[:\/-]/);
    let arrNumber =  arrString.map(element => {
       return Number(element);
    });
    return arrNumber;
}

function formatTime(Object_date,separation) {

     let time = Object_date;
     let hours = time.getHours();
     let minutes = time.getMinutes();
     let seconds = time.getSeconds();
 
    return `${hours}${separation}${minutes}${separation}${seconds}`
 }
