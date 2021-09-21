// Date trong js object Date ( getDay, getDate, getMonth, getFullYear)
// input Date (string) -> output(number)
function toString(number) {
    if (number < 10) {
        return `0${number}`;
    }
    return `${number}`;
}
// Bài 1: Viết một hàm JavaScript để lấy ngày hiện tại
// Lưu ý: Truyền dấu phân tách làm đối số.
// getCurrentDate("/") => 17/08/2020
function getCurrentDate(string) {
    const now = new Date().toLocaleDateString("en-gb");
    // const day = toString(new Date().getDate());
    // const month = toString(new Date().getMonth());
    // const year = new Date().getFullYear();
    // return `${day}${string}${month}${string}${year}`;
    return now.split("/").join(string)
}
//console.log(getCurrentDate("*"))

// Bài 2: Viết một hàm JavaScript để lấy số ngày trong tháng
// getDaysInMonth(8, 2020) => 31
function getDaysInMonth(month, year) {
    // return new Date(month, year, 0).getDate();
    // timestamp : ms -> 01/01/1970
    const startOfCurrentMonth = new Date(`${month}/01/${year}`).getTime(); // ms
    const startOfNextMonth = new Date(`${month + 1}/01/${year}`).getTime(); // ms
    const oneDay = 24 * 60 * 60 * 1000; //ms
    return (startOfNextMonth - startOfCurrentMonth) / oneDay;
}
//console.log(getDaysInMonth(2, 2020))
// Bài 3: Viết một hàm JavaScript để kiểm tra xem một ngày có phải là ngày cuối tuần hay không.
function checkWeekend(str) {
    // const day = new Date().getDay();
    // return day;
    // 0 - 6 :  0 Sunday --> 6 : Sat
    const options = {
        weekday: "short"
    }
    let day = new Date(str).toLocaleDateString("en-gb", options);
    day == "Sat" ? day = true : day = false
    return day;
}
// console.log(checkWeekend("09/18/2021"))
// Bài 4: Viết một hàm JavaScript sẽ trả về số phút theo giờ và phút
function getMin(min) {
    const hours = Math.floor(min / 60);
    const mins = min - hours * 60;
    return `${hours}h : ${mins}m`;
}
// console.log(getMin(120))
// Bài 5: Viết một hàm JavaScript để đếm số ngày đã trôi qua kể từ đầu năm.
function getDays() {
    const year = new Date().getFullYear();
    const startOfYear = new Date(`01/01/${year}`).getTime(); //ms
    const now = Date.now(); //ms new Date().getTime()
    const oneDay = 24 * 60 * 60 * 1000;
    const days = Math.floor((now - startOfYear) / oneDay); // math.ceil
    return `${days} days`;
}
//console.log(getDays())
// template string : a = 3, b = 2 --> "So " + a + " lon hon " + "so " + b --> `So ${a} lon hon so ${b}`
// Bài 6: Viết chương trình JavaScript để tính tuổi.
// calculate_age(new Date(1982, 11, 4))// 09/18/1990 [18/9/1990]
function calculateAge(str) {
    const birthday = new Date(str).toLocaleDateString("en-gb").split("/").map(Number);
    const now = new Date().toLocaleDateString("en-gb").split("/").map(Number);
    let age;
    if (birthday[1] < now[1]) {
        age = now[2] - birthday[2];
    } else if (birthday[1] == now[1]) {
        if (birthday[0] <= now[0]) {
            age = now[2] - birthday[2];
        } else {
            age = now[2] - birthday[2] - 1;
        }
    } else {
        age = now[2] - birthday[2] - 1;
    }
    return age;
}
// console.log(calculateAge("09/17/1990"))

// Bài 7: Viết một hàm JavaScript để lấy ngày bắt đầu của tuần.
// let dt = new Date();
// startOfWeek(dt)
function startOfWeek(str) {
    const day = new Date(str).getDay(); // 0 -6
    const date = new Date(str).getDate();
    const month = new Date(str).getMonth() + 1;
    const year = new Date(str).getFullYear();
    if (day == 1) {
        return `start day of week : ${date}/${month}/${year}`;
    }
    let countDay;
    if (day == 0) {
        countDay = 6;
    } else {
        countDay = day - 1;
    }
    const getTime = new Date(str).getTime(); // ms
    const startOfWeek = getTime - countDay * 24 * 60 * 60 * 1000; // ms
    return new Date(startOfWeek).toLocaleDateString("en-gb")
}
// console.log(startOfWeek("09/01/2021"))
// Bài 8: Viết một hàm JavaScript để lấy ngày kết thúc tháng
// dt = new Date();
// endOfMonth(dt);

// Bài 10: Viết hàm có 2 tham số, tham số đầu tiên là 1 chuỗi thời gian t dạng ''giờ:phút:giây'', 
//tham số thứ 2 là 1 số x <= 1000. Kết quả trả về là 1 chuỗi biểu thị thời gian sau x giây kể từ thời điểm t. Ví dụ với t = ''9:20:56'' và x = 7 thì kết quả là ''9:21:3''
const ONE_DAY = 24 * 60 * 60 * 1000;
// Bài 9: Viết hàm đếm ngược thời gian đến tết dương lịch // countDown --> setInterVal setTimeOut // game engine // fps // 1s --> ui render frame --> fps 60fps (an ui - render ui)
function countDown() {
    setInterval(() => {
        const year = new Date().getFullYear();
        const startOfNextYear = new Date(`01/01/${year + 1}`).getTime(); //ms
        const now = Date.now(); //ms
        const days = Math.floor((startOfNextYear - now) / ONE_DAY);
        const hours = Math.floor((((startOfNextYear - now) / ONE_DAY) - days) * 24);
        const min = Math.floor((((((startOfNextYear - now) / ONE_DAY) - days) * 24) - hours) * 60);
        const sec = Math.floor((((((((startOfNextYear - now) / ONE_DAY) - days) * 24) - hours) * 60) - min) * 60);
        console.log(`Count Down to New Year ${year + 1} : ${days}d-${hours}h-${min}m-${sec}s`);
    },100) //ms
}
// countDown()
