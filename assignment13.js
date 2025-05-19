const jsonString = '{"name": "Alice", "age": 25, "hobbies": ["reading", "painting"]}';
const jsonObject = JSON.parse(jsonString);

console.log(jsonObject.age);

const object = {title: "Book", pages:200};
const conv_string = JSON.stringify(object);

console.log(conv_string);