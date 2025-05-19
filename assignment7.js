var prompt = require('prompt-sync')();

function calculateArea(radius)
{
    return 3.14*radius*radius;
}

var radius = prompt('Enter the radius of the circle :   ');
const area = calculateArea(radius);
console.log("The area of the circle is  : " + area);