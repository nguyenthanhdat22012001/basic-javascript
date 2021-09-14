function validNumber(number) {
    if (typeof(number) == "number") {
        return number;
    }
    throw new Error(`${number} is type ${typeof(number)}, not number`);
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
    // return moment(`${month}-${year}`, "MM-YYYY").daysInMonth();
    return new Date(year, month,0).getDate();
}
//console.log(getDaysInMonth(9,2021))

// bai3 

function checkWeekend(day,month,year) {
    let weekend =  d = new Date(year,month - 1,day)

    return weekend == 0 || weekend == 6 ? 'weekend' : 'not weekend';
}

//console.log(checkWeekend(13,09,2021));

function Distance(diff,unit) {
    let unitValid =  validNumber(unit);
    return Math.floor(diff / unitValid);
}
// bai4 

function howLong(h,m) {
    //  return moment(`${h}:${m}`,'h:m').fromNow(); 
    let timeNow = new Date();

    let time = new Date();
    time.setHours(h);
    time.setMinutes(m)

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
  let birthday =  new Date(year,month - 1 , day);
  let now = new Date(); 
  let diff =  now -birthday;
  let oneYear = 365 * 24 * 60 * 60 * 1000;
  let diffYear = Distance(diff,oneYear)
  return diffYear + " years ago";
}

//console.log(calculate_age(22,1,2001))

// bai 7 

function startOfWeek(day,month,year) {
    let date = new Date(year,month - 1 , day);
    
    let startOfWeek = date.getDate() - date.getDay() + 1;
    date.setDate(startOfWeek);
    return date.getDate() + " is start of week";
}

//console.log(startOfWeek(9,9,2021))


// bai8

function endOfMonth(month,year) {
    let endDay = new Date(year,month,0);

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
countDownNewYear();



//bai 10

function countTime(t,x) {
    if(x > 1000 )
        return false;

      let preTime =  moment(t,"h:m:s").format("h:m:s");

      let  afterTime = moment(t,"h:m:s").add(x, 's').format("h:m:s");

      return `pre time = ${preTime} , after time = ${afterTime}`
}

//console.log(countTime('11:32:45',7));