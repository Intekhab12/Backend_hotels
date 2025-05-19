var prompt = require('prompt-sync')();

let age = prompt("Enter your age : ");


if (age < 18)
    {
        console.log("You've got 20 % discount");
    }

    else if (age >= 18 && age <= 65)
    {
        console.log("Normal pricing for you");
    }
    
    else 
    {
        console.log("You've got 30 % senior discount");
    }