// --------------------------------- //
// -------- Bài tập String --------- //
// --------------------------------- //
function validString(str) {
    if (typeof(str) == "string") {
        return str;
    }
    throw new Error(`${str} is type ${typeof(str)}, not string`);
}

function validNumber(number) {
    if (typeof(number) == "number") {
        return number;
    }
    throw new Error(`${number} is type ${typeof(number)}, not number`);
}

// name convention : validString, ValidString, isChecked, convert_string (Check_String) 
// Bài 1. Viết 1 function kiểm tra 1 chuỗi có nằm trong chuỗi còn lại hay không. Nếu có trả về true, nếu không trả về false
// - Đầu vào có 2 tham số : Tham số 1 là chuỗi ban đầu, tham số 2 là chuỗi cần kiểm tra
// Ví dụ: checkStringExist("i love you", "you") => true
function checkStringExist(strA, strB) {
    const stringA = validString(strA);
    const stringB = validString(strB);
    return stringA.includes(stringB); // true-false
}
// console.log(checkString("i love you", "hate"))

// Bài 2. Viết hàm rút ngắn chuỗi bằng cách cắt ra 8 ký tự đầu của 1 chuỗi và thêm dấu ba chấm ở cuối chuỗi. 
// Ví dụ: shortenString('Xin chào các bạn') => Kết quả trả về là 'Xin chào...'
function shortenString(str) {
    const string = validString(str);
    return `${string.substr(0,8)}...`;
}
// console.log(shortenString(undefined));


// Bài 3. Viết hàm có tác dụng biến 1 chuỗi thành chỉ viết hoa từ đầu tiên. 
// Ví dụ: capitalizeString('chÀo MừnG đẾn với xTP') => Kết quả trả về là 'Chào Mừng Đến Với XTP'
function capitalizeString(str) {
    const string = validString(str);
    const arrString = string.split(" ").map(function(str) {
        let newStr = str.toLowerCase();
        return newStr[0].toUpperCase() + newStr.substr(1);
    })
    return arrString.join(" ");
}
// console.log(capitalizeString('chÀo MừnG đẾN với xTP'))
// map, filter, find, reduce, forEach, for loop i --> return, ko lam thay doi mang cu, ko ho tro bat dong bo
// ho tro bat dong bo, co return new [] (length = array.map) 

// Bài 4. Cho 1 chuỗi, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần.
function repeatString(str, number) {
    const string = validString(str);
    const num = validNumber(number);
    return string.repeat(num);
}
// console.log(repeatString("a", 100))

// Bài 5. Cho 1 chuỗi, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần, ngăn cách nhau bởi dấu gạch ngang. 
// Ví dụ: repeatString('a') => Kết quả trả về là 'a-a-a-a-a-a-a-a-a-a'
// Bài 6. Cho 1 chuỗi và 1 số nguyên n > 1, hãy viết hàm có tác dụng sao chép đó chuỗi lên n lần, ngăn cách nhau bởi dấu gạch ngang. 
// Ví dụ: repeatString('a', 5) => Kết quả trả về là 'a-a-a-a-a'
function repeatStr(str, number) {
    const string = repeatString(str , number);
    // return string.split("").join("-");
    // spread
    return [...string].join("-");
}
// console.log(repeatStr("a", 4))

// Bài 7. Viết hàm đảo ngược chuỗi. Viết dunction với đầu vào là 1 chuỗi string. Trả về chuỗi đảo ngược của chuỗi đó
// Ví dụ: reverseStrin('Hello') => Kết quả trả về là 'olleH'
function reverseString(str) {
    const string = validString(str);
    return [...string].reverse().join("");
}
// console.log(reverseString("hello")) 
// Bài 8. Cho 1 chuỗi, kiểm tra xem chuỗi đó có phải chuỗi đối xứng hay không (đọc xuôi hay ngược đều như nhau, không tính khoảng trắng, không phân biệt hoa thường), kết quả trả về true hoặc false. 
// Ví dụ 'Race car' trả về true, 'hello world' trả về false. // race car --> racecar
function validateString(str) {
    const string = validString(str);
    // Race car --> racecar --> [r,a,c,e,c,a,r] -> racecar
    const arrStr = string.toLowerCase().split(" ").join("");
    const newStr = reverseString(arrStr);
    return arrStr == newStr;
}
// console.log(validateString('hello world'))

// Bài 9: Kiểm tra 1 chuỗi có phải là chuỗi viết hoa hay không?
function checkcapitalizeString(str) {
    const string = validString(str);
    const strCap = string.toUpperCase();
    return string == strCap;
}

// console.log(checkcapitalizeString("AAAAb"))
// apply// bind // call --> higher order function --> this context // mat this, boc this lai di
// --------------------------------- //
// -------- Bài tập Array ---------- //
// --------------------------------- //
function validArr(arr) {
    if (Array.isArray(arr)) {
        return arr;
    }
    throw new Error(`${arr} is type ${typeof(arr)}, not array`);
}
// Bài 1. Viết hàm tìm ra số nhỏ nhất trong mảng các số. Ví dụ:
// minNumbers([2, 1, 3]) => Kết quả trả về là 1
function minNumbers(arr) {
    const array = validArr(arr);
    array.forEach(number => validNumber(number));
    // array.sort(function(a,b) {
    //     return a-b
    // });
    array.sort((a,b) => {
        return a-b
    });
    return array[0];
}
// console.log(minNumbers([1,null,3]))

// Bài 2. Viết hàm tìm ra số lớn thứ nhì trong mảng các số. Ví dụ:
// max2Numbers([2, 1, 3, 4]) => Kết quả trả về là 3
function max2Number(arr) {
    const array = validArr(arr);
    array.forEach(number => validNumber(number));
    // datatype Set -- obj -- {unique}
    const newSet = new Set(array.sort((a,b) => b-a));
    // return Array.from(newSet)[1];
    // spread
    return [...newSet][1];
}
// console.log(max2Number([2,1,4,3,4]))

// Bài 3. Viết hàm truyền vào 1 mảng tên học viên, sắp xếp lại mảng này theo chiều ngược của bảng chữ cái. Ví dụ:
// sortStudents(['Nam', 'Hoa', 'Tuấn']) => Kết quả trả về là ['Tuấn', 'Nam', 'Hoa']
function sortStudents(arr) {
    const array = validArr(arr);
    array.forEach(name => validString(name));
    array.sort((a,b) => b.localeCompare(a));
    return array;
}
// console.log(sortStudents(['Nam', 'Hoa', 'Tuấn']))

// Bài 4. Tính tổng các số chia hết cho 5 từ 0 -> 100
function Total() {
    let sum = 0;
    for (let i = 0; i <=100 ; i++) {
        if (i % 5 == 0) {
            sum += i;
        }
    }
    return sum;
}
// console.log(Total())

// Bài 5. Viết hàm cho phép truyền vào 1 mảng các số, kết quả trả về là 1 mảng mới với các số là số dư tương ứng khi chia mảng cũ cho 2
function divineArr(arr) {
    const array = validArr(arr);
    array.forEach(number => validNumber(number));
    const results = array.map(number => number % 2);
    return results;
}
console.log(divineArr([1,2,3,45,5,6]));

// Bài 6. Cho 1 mảng các chuỗi. Viết hàm lọc ra các phần tử có độ dài lớn nhất. Ví dụ với tham số
// ['aba', 'aa', 'ad', 'c', 'vcd'] thì kết quả trả về ['aba', 'vcd'].
function longString(arr) {
    const array = validArr(arr);
    array.forEach(string => validString(string));
    const max_length = array.map(string => string.length).sort((a,b) => b-a)[0];
    const results = array.filter(string => string.length == max_length);
    return results;
}
// console.log(longString(['aba', 'aaaaa', 'ad', 'c', 'vcdgg']))

// Bài 7: Viết chương trình JavaScript để lấy một phần tử ngẫu nhiên từ một mảng
// sample([3, 7, 9, 11]) => 3
// sample([3, 7, 9, 11]) => 9
function sampleEl(arr) {
    const array = validArr(arr);
    // lay index ngau nhien : 0 - length
    const index = Math.floor(Math.random(0,1) * array.length);
    return array[index];
}
// console.log(sampleEl([3, 7, 9, 11,"aa", "bb"]))

// Bài 8: Viết chương trình đổi chỗ ngẫu nhiên vị trí của các phần tử trong mảng
function randomIndex(arr) {
    const array = validArr(arr);
    const indexA = Math.floor(Math.random(0,1) * array.length);
    const indexB = Math.floor(Math.random(0,1) * array.length);
    if (indexA == indexB) {
        return array;
    }
    let sample = array[indexA];
    array[indexA] = array[indexB];
    array[indexB] = sample;
    return array;
}
// console.log(randomIndex([3, 7, 9, 11,"aa", "bb"]));

// Bài 9: Viết chương trình JavaScript để lấy một mảng các phần tử xuất hiện trong cả hai mảng
// similarity([1, 2, 3], [1, 2, 4]) => [1,2]
function similarity(arrA, arrB) {
    const arrayA = validArr(arrA);
    const arrayB = validArr(arrB);
    let results = [];
    arrayA.forEach(elA => {
        arrayB.forEach(elB => {
            if (elB == elA) {
                results.push(elB);
            }
        })
    })
    return results;
}
// console.log(similarity([1, 2, 3], [1, 2, 4]));
// Bài 10: Viết một chương trình JavaScript để lấy sự phần tử không xuất hiện ở cả 2 mảng
// symmetricDifference([1, 2, 3], [1, 2, 4]) => [3,4] [1,2,3,1,2,4] -> new Set [1,2,3,4] / [1,2] = [3,4]
function removeSameValue(arrChildren, arrParent) {
    const arrC = validArr(arrChildren);
    const arrP = validArr(arrParent);
    if (arrC.length > arrP.length) {
        return "First Array not large Second Array";
    }
    arrC.forEach(elC => {
        arrP.forEach(elP => {
            if (elC == elP) {
                arrP.splice(arrP.indexOf(elC),1);
            }
        })
    })
    return arrP;
}
console.log(removeSameValue([1,2],[1,2,4]))

function symmetricDifference(arrA, arrB) {
    const arraySimi = similarity(arrA, arrB);
    // removeSameValue(arraySimi, arrA);
    // removeSameValue(arraySimi, arrB);
    const newArray = Array.from(new Set([...arrA, ...arrB]));
    // return arrA.concat(arrB);
    return removeSameValue(arraySimi,newArray);
}
// console.log(symmetricDifference([1, 2, 3,5], [1, 2, 4,5]))

// Bài 11: Viết function lấy tất cả các phần tử không trùng nhau trong cả 2 mảng
// union([1, 2, 3], [4, 3, 2]) => [1,2,3,4]
// union([1, 2, 3], [1, 2, 3]) => [1,2,3]

// Bài 12: Viết chương trình JavaScript để tạo mã màu HEX ngẫu nhiên.
// random_hex_color_code() // hex thap luc phan 0-9 A-F 

// Bài 13: Viết một chương trình JavaScript trả về một tập hợp con của một chuỗi.
// sub_String("dog") => ["d","do","dog","o","og","g"]
function subString(str) {
    const string = validString(str);
    let results = [];
    for (let i = 0; i <= string.length ; i++) {
        for (let j = 0; j < i; j++) {
            results.push(string.substring(i,j));
        }
    }
    return results;
}
// console.log(subString("dog"))

function compareArray(arrA, arrB) {
    const arrayA = validArr(arrA);
    const arrayB = validArr(arrB);
    if (arrayA.length !== arrayB.length) {
        return false;
    }
    const result = arrayA.every((elA, index) => elA == arrayB[index]); 
    return result;
}

// Bài 14: Kiểm tra mảng xem có phải mảng tăng dần hay không [1,3,4,2] == [1,2,3,4]
function ascArray(arr) {
    const array = validArr(arr);
    const sortArr = [...array].sort((a,b) => a-b);
    return compareArray(array, sortArr);
}
console.log(ascArray([1,2,3,4]));

// Bài 15 Kiểm tra mảng xem có phải mảng sô lẻ giảm dần hay không
function descArray(arr) {
    const array = validArr(arr);
    const isChecked = array.find(el => el % 2 == 0);
    if (isChecked == undefined) {
        const sortArr = [...array].sort((a,b) => b - a);
        return compareArray(array, sortArr);
    }   
    return false;
}

// console.log(descArray([5,3,1]))
