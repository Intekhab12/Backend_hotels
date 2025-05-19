var prompt = require('prompt-sync')();

const guestlist = ["arit", "joydeep", "mondal", "jimson", "abdul"];
var name = prompt("Enter the name you want to check :  ");

if (guestlist.includes(name))
    console.log("You are allowed to the party sir\n");
else
    console.log("Sorry Sir, You are not allowed to the party\n");