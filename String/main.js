function validateString(str) {
    if(typeof str == 'string'){
        return str;
    }
    throw new Error(`${str} is type ${typeof str}, not string`);
}

//  # BAI 1 #
function checkExistString(originString, subString) {

    let toString_originString =   originString.toString();
    let toString_subString =   subString.toString();
    
    return toString_originString.includes(toString_subString);
}

//console.log(checkExistString('','d'));

//  # BAI 2 #
function shortenString(string) {
    let toString_string = string.toString();
    toString_string.trim();

    if(toString_string.length > 7)
         toString_string = toString_string.substr(0, 7) ;

    return toString_string+"...";
}

//console.log( shortenString('Xin chao'));

//  # BAI 3 #
function capitalizeString(string) {
    let toString_string = string.toString();
    toString_string.trim();

    toString_string.toLowerCase();
    let new_string ='';
    let arr_string = toString_string.split(" ");

    arr_string.forEach(element => {
        element =  element.charAt(0).toUpperCase() + element.slice(1);
        new_string += element+" ";
    });

    return new_string;
}

//console.log(capitalizeString('chÀo MừnG đẾn với xTP'))

//  # BAI 4 #

function multipleString(string) {
    let toString_string = string.toString();
    toString_string.trim();

    let newString ='';
    for (let index = 0; index < 10; index++) {
        newString += toString_string + " ";
    }

    return newString;

}

//console.log(multipleString("hello"));

//  # BAI 5 #

function repeatString(string) {
    let toString_string = string.toString();
    toString_string.trim();

    let newString ='';
    for (let index = 0; index < 10; index++) {
        if(index == 9){
            newString += toString_string;
        }else{
            newString += toString_string + "-";
        }
    }

    return newString;
}

//console.log(repeatString('a'))

//  # BAI 6 #

function repeatString(string,number) {
    let toString_string = string.toString();
    toString_string.trim();

    let toNumber_number = parseInt(number);

    let newString ='';
    for (let index = 0; index < toNumber_number; index++) {
        if(index == (toNumber_number - 1)){
            newString += toString_string;
        }else{
            newString += toString_string + "-";
        }
    }

    return newString;
}

//console.log(repeatString('a',5));

//  # BAI 7 #

function reverseString(string) {
    let toString_string = string.toString();
    toString_string.trim();

    return toString_string.split("").reverse().join("");
}
//console.log(reverseString('hello'));

//  # BAI 8 #

function  palindrome(string) {

    let toString_string = string.toString();
    toString_string.trim();

    let str = toString_string.toLowerCase();

    return str === str.split('').reverse().join('');
}
//console.log(palindrome('racecar'));

//  # BAI 9 #

function isStringUpper(string) {
    let toString_string = string.toString();
    toString_string.trim();

    return toString_string === toString_string.toUpperCase();
}

console.log(isStringUpper('aDASD',));