// var add = (a , b) => a + b;

// var ans = add(446, 8);
// console.log(ans);

// (function(){
//     console.log('i am okay')
// })();

// function callback()
// {
//     console.log("I have called a callback function\n");
// }

// const add = function(a, b , callback)
// {
//     result = a + b;
//     console.log("result :" + result);
//     callback();
// }

// add(41, 6, callback);
// add(41, 6, () =>  console.log("Add is completed\n"));

// var fs = require('fs');
// var os = require('os');

// var user = os.userInfo();
// console.log(user.username);

// fs.appendFile('greeting.txt','Hi ' + user.username+ '!' , () => {console.log('function is created')}); 

// console.log(fs);

var notes = require('./notes.js');
var _ = require('lodash');
console.log("Processing\n");

var age = notes.age;
var result = addNumber( age, 16);      /// can use notes.addnumber as well

console.log('The result is  '+ result);

var data = ["person", "person", 1, 4, 3, 1, 3 , 'name'];
var filter = _.uniq(data);
console.log(filter);
console.log(_.isString('helo'));







