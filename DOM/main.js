import {data} from './data.js'

// validate
function validateString(str) {
    if(typeof str == 'string'){
       return str;
    }
    throw new Error(`${str} is type ${typeof str}, not string`);
}

function validateNumber(number) {
    if (typeof(number) == "number") {
        return number;
    }
    throw new Error(`${number} is type ${typeof(number)}, not number`);
}

function validatedArray(arr) {
    if (Array.isArray(arr)) {
        return arr;
    }
    throw new Error(`${arr} is type ${typeof(arr)}, not array`);
}

function compareArray(arrA, arrB) {
    const arrayA = validatedArray(arrA);
    const arrayB = validatedArray(arrB);
    if (arrayA.length !== arrayB.length) {
        return false;
    }
    const result = arrayA.every((elA, index) => elA == arrayB[index]); 
    return result;
}

// init tag main
const tagMain = document.getElementById('main');

// create tags

function createTagDiv(className='',id=''){
    const validClassName = validateString(className);
    const validId = validateString(id);
    const div = document.createElement('div');
    div.className = validClassName;
    div.id = validId;

    return div;
}

function createTagText(nameTag,text='',className='',id='') {
    const validNameTag = validateString(nameTag);
    const validText = validateString(text);
    const validClassName = validateString(className);
    const validId = validateString(id);

    const tag = document.createElement(validNameTag);
    tag.innerHTML = validText;
    tag.className = validClassName;
    tag.id = validId;

    return tag;
}

function createTagSelect(data=[],className='') {
    const validData = validatedArray(data);
    const validClassName = validateString(className);

    const select = document.createElement('select');
    select.className = validClassName;

    validData.forEach((item)=>{
        const option = document.createElement('option');
        option.value = item.title;
        option.text = item.title;
        option.setAttribute('data-input',`${JSON.stringify(item.input)}`);
        select.appendChild(option);
    })

    return select;
}

function createInput(type='text',className='',placeholder='',name='') {
    const validType = validateString(type);
    const validClassName = validateString(className);
    const validPlaceholder = validateString(placeholder);
    const validName = validateString(name);

    const input = document.createElement('input');
    input.type = validType;
    input.className = validClassName;
    input.placeholder = validPlaceholder;
    input.name = validName;

    return input;
}

function createButton(type='',text='',className='') {
    const validText = validateString(text);
    const validClassName = validateString(className);
    const validType = validateString(type);

    const button = document.createElement('button');
    button.type = validType;
    button.className = validClassName;
    button.textContent = validText;

    return button;
}

function createAlert(text='',className='') {
    const validText = validateString(text);
    const validClassName = validateString(className);

    const div = document.createElement('div');
    div.className = validClassName;
    div.innerHTML = validText;

    return div;
}

function createFormForLab(title,inputs,parentElement) {
    const lengthChildNodes  = parentElement.childNodes.length;
    if(lengthChildNodes > 2){
        parentElement.lastChild.remove();
    }
    const divWrapper = createTagDiv("lab mt-4");
    const h4 = createTagText("h4",title);
    const button = createButton("submit","Kiểm tra","btn btn-primary mt-4")

    const form = createTagText('form');
    form.name = title;

    inputs.forEach((item)=>{
        const input = createInput(item.type,item.name,item.placeholder,item.name);
        input.className = 'form-control mt-3'
        form.appendChild(input);
    })
    form.appendChild(button);
    form.addEventListener('submit',(e) => {
        e.preventDefault();
        submitForm(e);
    });

    divWrapper.appendChild(h4);
    divWrapper.appendChild(form);
    parentElement.appendChild(divWrapper);
}

// init Skeleton

function createSkeleton(topic,data) {
    const divWrapper = createTagDiv("col-5 mt-5",topic);
    const h2 = createTagText('h2',topic);
    const divSelect = createTagDiv("form-group");
    const select = createTagSelect(data,"form-control");
    
    divSelect.appendChild(select);
    divWrapper.appendChild(h2);
    divWrapper.appendChild(divSelect);
    tagMain.appendChild(divWrapper);
}


data.forEach((item) =>{
    createSkeleton(item.topic,item.listLab);
});

// add event select
const selects =  document.getElementsByTagName('select');

for (let i = 0; i < selects.length; i++) {
   selects[i].addEventListener('change',(e)=>{
     const select = e.target;
     const value = select.value;
     const optionIndex = select.options.selectedIndex;
     const inputs = JSON.parse(select.options[optionIndex].getAttribute('data-input'));
     const parentElement = select.parentNode.parentNode;
      createFormForLab(value,inputs,parentElement)
    }); 
};



//router lab 
function submitForm(e) {
    const callback = e.target.name;

    switch (callback) {
        // string
        case "checkStringExist":
            checkStringExist(e);
            break;
        case "shortenString":
            shortenString(e);
            break;
        case "capitalizeString":
            capitalizeString(e);
            break;
        case "repeatString":
            repeatString(e);
            break;
        case "repeatStr":
            repeatStr(e);
            break;
        case "palindrome":
            palindrome(e);
            break;
        case "checkcapitalizeString":
            checkcapitalizeString(e);
            break;

         // array
         case "minNumbers":
            minNumbers(e);
            break;
        case "max2Number":
            max2Number(e);
            break;
        case "sortStudents":
            sortStudents(e);
            break;
        case "Total":
            Total(e);
            break;
        case "divineArr":
            divineArr(e);
            break;
        case "longString":
            longString(e);
            break;
        case "sampleEl":
            sampleEl(e);
            break;
        case "randomIndex":
            randomIndex(e);
            break;
        case "similarity":
            similarity(e);
            break;
        case "removeSameValue":
            removeSameValue(e);
            break;
        case "subString":
            subString(e);
            break;
        case "ascArray":
            ascArray(e);
            break;
        case "descArray":
            descArray(e);
            break;
    
        default:
            break;
    }
}

//string
function alertResult(result,parentElement) {
    const lengthChildNodes  = parentElement.childNodes.length;
    if(lengthChildNodes > 2){
        parentElement.lastChild.remove();
    }
    const divAlert = createAlert(result,"alert alert-success mt-4");
   
    parentElement.appendChild(divAlert);
}

function checkStringExist(e) {
    const form = e.target;
    const inputs = form.getElementsByTagName('input');
     let inputStr1 = validateString(inputs[0].value);
     let inputStr2 =  validateString(inputs[1].value);
    
    let result = `${inputStr1.includes(inputStr2)}`;

    alertResult(result,form.parentNode);
}

function shortenString(e) {
    const form = e.target;
    const inputs = form.getElementsByTagName('input');
    let inputStr =  validateString(inputs[0].value);
    
    let result = `${inputStr.substr(0,8)}...`;

    alertResult(result,form.parentNode);
}

function capitalizeString(e) {
    const form = e.target;
    const inputs = form.getElementsByTagName('input');
    let inputStr =  validateString(inputs[0].value);
    
    const arrString = inputStr.split(" ").map(function(str) {
        let newStr = str.toLowerCase();
        return newStr[0].toUpperCase() + newStr.substr(1);
    })
    let result =  arrString.join(" ");

    alertResult(result,form.parentNode);
}

function repeatString(e) {
    const form = e.target;
    const inputs = form.getElementsByTagName('input');
    let inputStr =  validateString(inputs[0].value);
     let inputnum =  parseInt(inputs[1].value);

     let result = inputStr.repeat(inputnum);

     alertResult(result,form.parentNode);
}
function repeatStr(e) {
    const form = e.target;
    const inputs = form.getElementsByTagName('input');
    let inputStr =  validateString(inputs[0].value);
     let inputnum =  parseInt(inputs[1].value);

     let arrStr = inputStr.repeat(inputnum);
     let result = [...arrStr].join("-");
     

     alertResult(result,form.parentNode);
}

function palindrome(e) {
    const form = e.target;
    const inputs = form.getElementsByTagName('input');
    let inputStr =  validateString(inputs[0].value);

    let result =  [...inputStr].reverse().join("");

    alertResult(result,form.parentNode);
}

function checkcapitalizeString(e) {
    const form = e.target;
    const inputs = form.getElementsByTagName('input');
    let inputStr =  validateString(inputs[0].value);

    let strCap = inputStr.toUpperCase();
    let result =  `${inputStr == strCap}`;

    alertResult(result,form.parentNode);
}

// array
function minNumbers(e) {
    const form = e.target;
    const inputs = form.getElementsByTagName('input');
    let inputStr =  validateString(inputs[0].value);
    let inputArr = validatedArray(JSON.parse(inputStr));
    inputArr.forEach((item)=> validateNumber(item));

    inputArr.sort((a,b) => {
        return a-b
    });

    let result =  `${inputArr[0]}`;

    alertResult(result,form.parentNode);
}

function max2Number(e) {
    const form = e.target;
    const inputs = form.getElementsByTagName('input');
    let inputStr =  validateString(inputs[0].value);
    let inputArr = validatedArray(JSON.parse(inputStr));
    inputArr.forEach((item)=> validateNumber(item));

    const newSet = new Set(inputArr.sort((a,b) => b-a));
    
    let result =  `${[...newSet][1]}`;

    alertResult(result,form.parentNode);
}

function sortStudents(e) {
    const form = e.target;
    const inputs = form.getElementsByTagName('input');
    let inputStr =  validateString(inputs[0].value);
    let inputArr = validatedArray(JSON.parse(inputStr));
    inputArr.forEach((item)=> validateString(item));

    inputArr.sort((a,b) => b.localeCompare(a));
    let result =  `${inputArr}`;

    alertResult(result,form.parentNode);
}

function Total(e) {
    const form = e.target;
    const inputs = form.getElementsByTagName('input');
    let inputNum =  parseInt(inputs[0].value);

    let sum = 0;
    for (let i = 0; i <= inputNum ; i++) {
        if (i % 5 == 0) {
            sum += i;
        }
    }
    let result =  `${sum}`;

    alertResult(result,form.parentNode);
}

function divineArr(e) {
    const form = e.target;
    const inputs = form.getElementsByTagName('input');
    let inputStr =  validateString(inputs[0].value);
    let inputArr = validatedArray(JSON.parse(inputStr));
    inputArr.forEach((item)=> validateNumber(item));

    const arrNew = inputArr.map(number => number % 2);
    
    let result =  `${arrNew}`;

    alertResult(result,form.parentNode);
}

function longString(e) {
    const form = e.target;
    const inputs = form.getElementsByTagName('input');
    let inputStr =  validateString(inputs[0].value);
    let inputArr = validatedArray(JSON.parse(inputStr));
    inputArr.forEach((item)=> validateString(item));

    const max_length = inputArr.map(string => string.length).sort((a,b) => b-a)[0];
    const arrNew = inputArr.filter(string => string.length == max_length);
    
    let result =  `${arrNew}`;

    alertResult(result,form.parentNode);
}

function sampleEl(e) {
    const form = e.target;
    const inputs = form.getElementsByTagName('input');
    let inputStr =  validateString(inputs[0].value);
    let inputArr = validatedArray(JSON.parse(inputStr));

    const index = Math.floor(Math.random(0,1) * inputArr.length);
    
    let result =  `${inputArr[index]}`;

    alertResult(result,form.parentNode);
}

function randomIndex(e) {
    const form = e.target;
    const inputs = form.getElementsByTagName('input');
    let inputStr =  validateString(inputs[0].value);
    let inputArr = validatedArray(JSON.parse(inputStr));

    const indexA = Math.floor(Math.random(0,1) * inputArr.length);
    const indexB = Math.floor(Math.random(0,1) * inputArr.length);
    if (indexA == indexB) {
        return inputArr;
    }
    let sample = inputArr[indexA];
    inputArr[indexA] = inputArr[indexB];
    inputArr[indexB] = sample;
    
    let result =  `${inputArr}`;

    alertResult(result,form.parentNode);
}

function similarity(e) {
    const form = e.target;
    const inputs = form.getElementsByTagName('input');
    const inputA = inputs[0].value;
    const inputB = inputs[1].value;
    let inputArrA = validatedArray(JSON.parse(inputA));
    let inputArrB = validatedArray(JSON.parse(inputB));

    let arrNew = [];
    inputArrA.forEach(elA => {
        inputArrB.forEach(elB => {
            if (elB == elA) {
                arrNew.push(elB);
            }
        })
    })
    
    let result =  `${arrNew}`;

    alertResult(result,form.parentNode);
}

function removeSameValue(e) {
    const form = e.target;
    const inputs = form.getElementsByTagName('input');
    const inputA = inputs[0].value;
    const inputB = inputs[1].value;
    let inputArrA = validatedArray(JSON.parse(inputA));
    let inputArrB = validatedArray(JSON.parse(inputB));

    
    if (inputArrA.length > inputArrB.length) {
        throw new Error("First Array not large Second Array");
    }
    inputArrA.forEach(elA => {
        inputArrB.forEach(elB => {
            if (elA == elB) {
                inputArrB.splice(inputArrB.indexOf(elC),1);
            }
        })
    })
    
    let result =  `${inputArrB}`;

    alertResult(result,form.parentNode);
}

function subString(e) {
    const form = e.target;
    const inputs = form.getElementsByTagName('input');
    let inputStr =  validateString(inputs[0].value);

    let newArr = [];
    for (let i = 0; i <= inputStr.length ; i++) {
        for (let j = 0; j < i; j++) {
            newArr.push(inputStr.substring(i,j));
        }
    }
    
    let result =  `${newArr}`;

    alertResult(result,form.parentNode);
}

function ascArray(e) {
    const form = e.target;
    const inputs = form.getElementsByTagName('input');
    let inputStr =  validateString(inputs[0].value);
    let inputArr = validatedArray(JSON.parse(inputStr));

    const sortArr = [...inputArr].sort((a,b) => a-b);
    let check = compareArray(inputArr, sortArr)
    let result =  `${check}`;

    alertResult(result,form.parentNode);
}

function descArray(e) {
    const form = e.target;
    const inputs = form.getElementsByTagName('input');
    let inputStr =  validateString(inputs[0].value);
    let inputArr = validatedArray(JSON.parse(inputStr));

    let result='';
    const isChecked = inputArr.find(el => el % 2 == 0);
    if (isChecked == undefined) {
        const sortArr = [...inputArr].sort((a,b) => b - a);
        result =`${ compareArray(inputArr, sortArr)}`;
    }   

    alertResult(result,form.parentNode);
}


