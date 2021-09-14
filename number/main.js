//  # bai1

function V_GlobalPicture(r) {
    let R = parseFloat(r);

    let V = (4*Math.PI*Math.pow(R,3))/3;

    return V;
}


//  # bai2

function sum(n1,n2) {

    let number1 = parseInt(n1);
    let number2 = parseInt(n2);
    let arr =[];

    for (let index = (number1 + 1) ; index < number2; index++) {
        
        arr.push(index);
        
    }

   return arr.reduce((a,b) => a + b,0);

}

//console.log(sum(3,8));

//  # bai3

function Prime(n) {
    let number = parseInt(n);

    let flag =true;

    if (number < 2) {
        return flag = false;
    }

    for (let index = 2; index < (number - 1); index++) {

        if (number % index == 0) {
             flag = false;
             break;
        }
    }

    return flag
}

console.log(Prime(3))

//  # bai4

function sumPrime(n) {
    let number = parseInt(n);

    if (number < 2) {
        return  false;
    }

    if (number == 2) {
        return  2;
    }

    let sum = 2;

    for (let i = 3; i <= number; i++) {

        let flag = true;

        flag = Prime(i);

        if (flag) {
            sum+= i;
        }
    }

    return sum;
}

//console.log(sumPrime(2));


//  # bai5

function sumdivisor(n) {
    let number = parseInt(n);

    if (number == 1) {
        return  1;
    }

    if (number == 2) {
        return  3;
    }

    let sum = 1 + number;

    for (let index = 2; index < number - 1; index++) {
        
        if(number % index == 0){
            sum += index; 
        }
        
    }

    return sum;
} 

//console.log(sumdivisor(5))

//  # bai6

function minNumber(array) {
    if(!Array.isArray(array))
    return false;

    let arr = array.map(i => Number(i));

    var filterArr = arr.filter((e) => e !== 0);

    return filterArr.reduce((a,b) => a < b ? a : b);
}

console.log(minNumber([34,54,23,3,5,2,6,0]))