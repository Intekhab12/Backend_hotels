var _ = require('lodash');
const arr = [3, 5, 2, 6, 8, 4, 9, 11];

const evens = _.filter(arr, (nums) => nums % 2 == 0);
var sum =_.sumBy(evens);
console.log(sum);

// const evens = arr.filter(giveevens);

// function giveevens(arr)
// {
//     return (arr % 2 == 0)             can do this also
// }
// console.log(evens)