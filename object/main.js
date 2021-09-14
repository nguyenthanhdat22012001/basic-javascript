function validateArray(array) {
    if(Array.isArray(array) ){
        return array;
    }
    throw new Error(`${array} is type ${typeof array}, not string`);
}
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
function valid_object(object) {
    if(object == null){
        throw new Error(`object is not null`);
    }

    if(typeof object == 'object'){
        return object;
    }
    throw new Error(`${object} is type ${typeof object}, not object`);
}
// # bai1 

function getKeys() {
    let user = {
            name : "Nguyễn Tiến Đạt",
            age : 25,
            email : 'support@xtp.vn'
        };

    return Object.keys(user);
}

//console.log(getKeys());

// # bai2

function getValues() {
    let user = {
            name : "Nguyễn Tiến Đạt",
            age : 25,
            email : 'support@xtp.vn'
        };

    return Object.values(user);
}

//console.log(getValues());

// # bai3

function keyExist(key) {
    let user = {
            name : "Nguyễn Tiến Đạt",
            age : 25,
            email : 'support@xtp.vn'
        };

   return user[key] != undefined ? true : false;
}

//console.log(keyExist("name"))

// # bai4

function checkLengthOject() {
    let user = {
            name : "Nguyễn Tiến Đạt",
            age : 25,
            email : 'support@xtp.vn'
        };

        return Object.keys(user).length;
}
//console.log(checkLengthOject())

// # bai5

function getUser(array) {
    // user = {
    //         name : string,
    //         age : number,
    //         isStatus : bool
    //     }
    let valid_array = validateArray(array);
    let valid_array_object = valid_array.map(item => valid_object(item));

    let arr = valid_array_object.filter((item) => item.age > 25 && item.isStatus == true );

    return arr
}

console.log(getUser(
    [
        {
                name : "nguyen dat",
                age : 26,
                isStatus : true
        },
        {
                name : "nguyen nam",
                age : 23,
                isStatus : true
        }
    ]
    ));


// # bai 6

function sortUser(array) {
    let valid_array = validateArray(array);
    let valid_array_object = valid_array.map(item => valid_object(item));
   return valid_array_object.sort((ele1,ele2) => ele1.age - ele2.age);
}


console.log(sortUser(
    [
        {
                name : "nguyen nam",
                age : 23,
                isStatus : true
        },
        {
                name : "nguyen nam",
                age : 27,
                isStatus : true
        }
    ]
    ));