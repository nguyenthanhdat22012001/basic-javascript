// # bai 1 

function minNumbers(array) {
   
   if(!Array.isArray(array) )
        return false;

   return array.reduce((a,b) =>{
       return a <= b ? a : b;
   });
}
//console.log(minNumbers([4,6,3,6,23,67,5,1,]));


// # bai 2

function max2Numbers(array) {
    if(!Array.isArray(array) )
    return false;

    let arr =   array.sort((a,b) => a - b);

    return arr[arr.length - 2]

}

//console.log(max2Numbers([4,6,3,6,23,67,5,1,45,23,75,4,100,99,342]));

// # bai 3
function sortStudents(array) {
    if(!Array.isArray(array) )
    return false;

    let arr =   array.sort();

    return arr.reverse();
}
//console.log(sortStudents(['Nam', 'Hoa', 'Tuấn']));

// # bai 4

function sumArrayDivisbleBy5(n) {
    let number = parseInt(n);

    let sum = 0;
    for (let index = 1; index <= number; index++) {
       
        if(index % 5 == 0){
            sum += index
            console.log(index);
        }
          
    }
 
    return sum;
}

//console.log(sumArrayDivisbleBy5(10))

// # bai 5

function arrayDivisbleBy2(array) {
    if(!Array.isArray(array) )
    return false;

    let arr = array.filter((item) => item % 2 == 0 );

    return arr;
}

//console.log(arrayDivisbleBy2([2,3,4,7,8]))

// # bai 6
function fillterArrayString(array) {
    if(!Array.isArray(array) )
    return false;

    let arr = array.sort((a,b) => b.length - a.length);
    let longest = arr[0].length;

    let newArr = arr.filter( value => value.length == longest );
    return newArr;
}

//console.log(fillterArrayString(['sdfsdf','aba', 'aa', 'ad', 'c', 'vcd']))

// # bai 7

function sample(array) {
    if(!Array.isArray(array) )
    return false;

    let arr = array;
    let arrLength = arr.length;
    let random = Math.floor(Math.random() * arrLength);


    return arr[random]
}

//console.log(sample([3, 7, 9, 11]));

// # bai 8

function changeIndexArray(array,indexChange,index) {
    if(!Array.isArray(array) )
    return false;

    let arr = array;
    let eleChange = arr[indexChange];
    let temp = arr[index];

    arr[index] = eleChange;
    arr[indexChange] = temp;

    return arr
}

//console.log(changeIndexArray([3, 7, 9, 11],0,2));

// # bai 9

function similarity(array1,array2) {

    let arr1 = array1;
    let arr2 = array2;
    let newArr = arr1.filter((value) => {
        return arr2.includes(value) == 1;
    })
    return newArr
}

//console.log(similarity([1, 2, 3], [1, 2, 4]))

// # bai 10

function symmetricDifference(array1,array2) {

    let arr1 = array1;
    let arr2 = array2;

    let newArr1 = arr1.filter((value) => {
        return arr2.includes(value) != 1;
    })

    let newArr2 = arr2.filter((value) => {
        return arr1.includes(value) != 1;
    })


    return newArr1.concat(newArr2);
}

//console.log(symmetricDifference([1, 2, 3], [1, 2, 4]))

// # bai 11

function union(array1,array2) {

    let arr1 = array1;
    let arr2 = array2;

    let newArr1 = arr1.filter((value) => {
        return arr2.includes(value) != 1 || arr2.includes(value) == 1 ;
    })

    let newArr2 = arr2.filter((value) => {
        return newArr1.includes(value) != 1;
    })



    return newArr1.concat(newArr2);
}
//console.log(union([1, 2, 3], [1, 2, 4]))


// # bai 12

function random_hex_color_code(){
  return  Math.floor(Math.random()*16777215).toString(16);
}
//console.log(random_hex_color_code());

// # bai 13
function sub_String(string) {
    var len = string.length;
    var list = [];
    for(var i = 0; i <= len; i++) {
      for (var s = 0; s < i; s++) {
        list.push(string.substring(s, i));
      }
    }
    return list;
}

//console.log(sub_String("dog"));

// # bai 14
function checkArrayIncrease(array) {
    if(!Array.isArray(array) )
        return false;

    let checkArray = true;

    array.forEach((element1 ,index) => {
        for (let i = index + 1; i < array.length; i++) {
            let element2 = array[i];
            
            if(element1 > element2){
                 checkArray = false;
                 break;
            }
        }
    });
    return checkArray;
}

//console.log(checkArrayIncrease([2,4,6,7,4]));


// # bai 15

function checkArrayDecrease(array) {
    if(!Array.isArray(array) )
        return false;

    let checkArray = true;

    array.forEach((element1 ,index) => {
        
        if(element1 % 3 != 0){
        return  checkArray = false;
        }

        for (let i = index + 1; i < array.length; i++) {
            let element2 = array[i];

            
            if(element1 < element2){
               return  checkArray = false;
            }
        }
    });

    return checkArray;
}

//console.log(checkArrayDecrease([15,12,9,6,3]));