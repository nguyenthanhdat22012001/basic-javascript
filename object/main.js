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
 
    let arr = [];

    array.forEach(element => {
        console.log(element.age)
      if (element.age > 25 && element.isStatus == true) {
          arr.push(element);
      }
    });

    return arr
}

// console.log(getUser(
//     [
//         {
//                 name : "nguyen dat",
//                 age : 26,
//                 isStatus : true
//         },
//         {
//                 name : "nguyen nam",
//                 age : 23,
//                 isStatus : true
//         }
//     ]
//     ));

// # bai 6

function sortUser(array) {
   return array.sort((ele1,ele2) => ele1.age - ele2.age);
}


console.log(sortUser(
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
        },
        {
                name : "nguyen nam",
                age : 27,
                isStatus : true
        }
    ]
    ));