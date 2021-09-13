/// # bai1

function getCurrentDate(params) {

    return moment().format(`DD${params}MM${params}YYYY`);
}

//console.log(getCurrentDate('/'))

// bai2 

function getDaysInMonth(month,year) {
    return moment(`${month}-${year}`, "MM-YYYY").daysInMonth();
}
//console.log(getDaysInMonth(9,2021))

// bai3 

function checkWeekend(day,month,year) {
    let weekend =  moment(`${day}-${month}-${year}`, "DD-MM-YYYY").day();

   return weekend == 0 || weekend == 6 ? 'weekend' : 'not weekend';
}

//console.log(checkWeekend(13,9,2021));

// bai4 

function howLong(h,m) {
     return moment(`${h}:${m}`,'h:m').fromNow(); 
}

//console.log(howLong(22,11))

// bai5

function daysFromBeginToNow() {
   return moment().dayOfYear();
}

//console.log(daysFrom())

// # bai 6

function calculate_age(day,month,year) {
  let birthday =  moment(`${day}-${month}-${year}`, "DD-MM-YYYY");
  let now = moment(); 
  return now.diff(birthday,'years');
}

//console.log(calculate_age(22,1,2001))

// bai 7 

function startOfWeek(day,month,year) {
    // let day =  moment().isoWeekday();
    let date = moment(`${day}-${month}-${year}`,"DD-MM-YYYY")
    
    let startOfWeek = date.weekday(1).get('date');
    return "the first day of the week is " + startOfWeek;
}

//console.log(startOfWeek(9,9,2021))


// bai8

function endOfMonth(month,year) {
    let endDay = moment().year(year).month(month - 1 ).daysInMonth();

    return "the last day of the month is "+ endDay;
}

//console.log(endOfMonth(9,2021))

//bai 9 
function countDownNewYear() {
    let today = moment();
    let tagTime = document.querySelector('.time');
  
// console.log(today.get('date'))
   // return today.format('DD-MM-YYYY')

    let setTime =  setInterval(() => {

        if(today.month() != 0){
            today.add(-1,'M');
        }

        if(today.month() == 0 && today.get('date') != 1){
            today.add(-1,'d');
        }

        if(today.month() == 0 && today.get('date') == 1){
            clearInterval(setTime);
            console.log('stop');
        }

        tagTime.textContent = today.format('DD-MM-YYYY');
    }, 1000);

}
countDownNewYear();

//console.log(countDownNewYear())
//bai 10

function countTime(t,x) {
    if(x > 1000 )
        return false;

      let preTime =  moment(t,"h:m:s").format("h:m:s");

      let  afterTime = moment(t,"h:m:s").add(x, 's').format("h:m:s");

      return `pre time = ${preTime} , after time = ${afterTime}`
}

//console.log(countTime('11:32:45',7));