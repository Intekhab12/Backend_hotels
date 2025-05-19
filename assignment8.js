function performOperation(num1, num2 , callback)
{
    return callback(num1, num2);
}

function add(x, y)
{
    return x + y;
}

function subtract(x, y)
{
    return x - y;
}

function multiply(x, y)
{
    return x * y;
}

function divide(x, y)
{
    return x / y;
}

console.log(performOperation(11, 6, add));
console.log(performOperation(11, 6, subtract));
console.log(performOperation(11, 6, multiply));
console.log(performOperation(11, 6, divide));