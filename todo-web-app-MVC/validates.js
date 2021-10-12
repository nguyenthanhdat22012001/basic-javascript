export function validateSting(string) {
    const trimString = string.trim();
    if(trimString == ""){
        return {error: true, message: 'not empty'};
    }else{
        return {error: false};
    }
}

export function validateArray(array) {
    if(Array.isArray(array) ){
        return array;
    }
    throw new Error(`${array} is type ${typeof array}, not string`);
}
