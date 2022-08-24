function myFunction(message){
    console.log(message);
}

myFunction('this can be any data type');

console.log("---------------------------");

function myFunctionWithReturn(message){
    return message + ' This is Return Value.';
}

console.log(myFunctionWithReturn('Hello World!'));

console.log("---------------------------");

const arrowSum  = (a, b) => a + b;

console.log(arrowSum(3,5));
