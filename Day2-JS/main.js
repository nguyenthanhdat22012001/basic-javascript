// --------------------------------- //
// -------- Bài tập Number --------- //
// --------------------------------- //
function validNumber(n) {
    if (typeof(n) == "number") {
        return n;
    }
    throw new Error(`${n} not number`);
}

function positiveNumber(n) {
    const number = validNumber(n);
    if (number > 0) {
        return number;
    }
    throw new Error(`${n} not positive number`);
}
// Bài 1: Viết hàm tính thể tích hình cầu, với tham số truyền vào là bán kính của hình cầu.
function Volume(r) {
    const radius = validNumber(r);
    return (4 * Math.PI * Math.pow(radius, 3)) / 3
}
// console.log(Volume(3))
// Bài 2: Viết hàm truyền vào 2 số nguyên, tính tổng tất cả các số nguyên nằm giữa chúng. Ví dụ với 
// tham số 3 và 8 ta có kết quả là 22 (bằng 4 + 5 + 6 + 7).
function Sum(a,b) {
    const numberA = validNumber(a);
    const numberB = validNumber(b);
    let sum = 0;
    for (let i = numberA + 1; i < numberB ; i++) {
        sum += i;
    }
    return sum;
}
// console.log(Sum(3,9))
// Bài 3: Cho 1 số, kiểm tra xem số đó có phải là số nguyên tố hay không, kết quả trả về true hoặc false. 
function checkPrime(n) {
    const number = validNumber(n);
    let isChecked;
    if (number <= 3) {
        isChecked = true;
    } else {
        for (let i = 2 ; i <= Math.sqrt(number) ; i++) {
            if (n % i == 0) {
                isChecked = false;
                break;
            } else {
                isChecked = true;
            }
        }
    }
    return isChecked;
}
//console.log(checkPrime(111))
// Bài 4: Cho 1 số nguyên dương bất kỳ. Tính tổng tất cả các số nguyên tố mà nhỏ hơn hoặc bằng tham số truyền vào.
function totalPrime(n) {
    const number = positiveNumber(n);
    // tao 1 cai array lien tiep tu 1->n
    const array = [...Array(number)].map((_, index) => index + 1);
    const sum = array.reduce((total, number) => {
        if (checkPrime(number)) {
            return total+number;
        }
        return total;
    });
    return sum;
}
// console.log(totalPrime(10))
// Bài 5: Cho 1 số nguyên dương, viết hàm tính tổng tất cả các ước số của số đó.

// Bài 6: Cho 1 số nguyên, hãy viết hàm sắp xếp lại các chữ số trong số nguyên đó sao cho ra 1 số nhỏ nhất có thể (không tính số 0 đầu tiên). Ví dụ với tham số 53751 thì kết quả là 13557.
// 50001
// [5,3,7,5,1] => [1,3,5,5,7] => join 1 so
// [5,0,0,0,1] => 10005
// Number(string) --> Wrapper (khuyen cao dung) // OOP
function minNumber(n) {
    const number = positiveNumber(n);
    const string = `${number}`;
    // nuber.toString()
    let results = [];
    let index;
    const arrString = string.split("").map(Number).sort((a,b) => a-b);
    for (let i = 0; i < arrString.length ; i++) {
        if (arrString[i] !== 0) {
            results.push(arrString[i]);
            index = i;
            break;
        }
    }
    for (let i = 0; i < arrString.length ; i++) {
        if (arrString[i] == 0) {
            results.push(arrString[i]);
        }
    }
    for (let i = 0; i < arrString.length ; i++) {
        if (arrString[i] !== 0 && i !== index) {
            results.push(arrString[i]);
        }
    }
    return parseInt(results.join(""));
}
// console.log(minNumber(53011))
//OBJ
function validObject(obj) {
    if (typeof(obj) == "object") {
        if (obj == null) {
            throw new Error("Object null can not keys and values")
        } 
        return obj
    }
    throw new Error(obj + " not object");
}
// Bài 1. Viết hàm để lấy danh sách các key của object
// vd :
// var user = {
//     name : "Nguyễn Tiến Đạt",
//     age : 25,
//     email : 'support@xtp.vn'
// };
// => name,age,email
function getKeys(obj) {
    const object = validObject(obj);
    // let results = [];
    // for (let key in object) {
    //     results.push(key);
    // }
    // return results;
    return Object.keys(object);
}
//console.log(getKeys(user))
// Bài 2. Viết hàm để lấy danh sách các value của object
// vd :
// var user = {
//     name : "Nguyễn Tiến Đạt",
//     age : 25,
//     email : 'support@xtp.vn'
// };
// => 'Nguyễn Tiến Đạt',25,'support@xtp.vn'
function getValues(obj) {
    const object = validObject(obj);
    // for (let value of object)
    return Object.values(object);
}
//console.log(getValues(user))
// bài 3. Viết hàm kiểm tra key có tồn tại trong Object không
// vd :
var user = {
    name : "Nguyễn Tiến Đạt",
    age : 25,
    email : 'support@xtp.vn'
};
// => checkKey('name') => true
// checkKey('study') => false
function checkKey(obj, key) {
    const object = validObject(obj);
    // const k = validString(key);
    // return object.hasOwnProperty(key);
    return key in object;
}
// console.log(checkKey(user, "name"))
// bài 4. Viết hàm kiểm tra Object có độ dài bao nhiêu
// vd :
// var user = {
//     name : "Nguyễn Tiến Đạt",
//     age : 25,
//     email : 'support@xtp.vn'
// };
// => getLengthObject(user) => 3

// Bài 5. Cho mảng các user
// mỗi user có cấu trúc như sau

// user = {
//     name : string,
//     age : number,
//     isStatus : bool
// }
// Viết function lấy ra những user có tuổi > 25 và isStatus = true
let users = [
    {
        name : "Tuan",
        age : 18,
        isStatus : false
    },
    {
        name : "Hoa",
        age : 26,
        isStatus : true
    },
    {
        name : "Long",
        age : 30,
        isStatus : true
    }
]
function checkUser(array) {
    // const arr = validArray(array);
    array.forEach(user => validObject(user));
    return array.filter(user => user.age > 25 && user.isStatus == true)
}
//console.log(checkUser(users))
// Bài 6. Tương tự bài 5
// Viết function sắp xếp các user theo tuổi tăng dần
function sortUserByAge(array) {
    array.forEach(user => validObject(user));
    array.sort((a,b) => a.age - b.age);
    return array;
}
//console.log(sortUserByAge(users))