// block_1a - In JS, there are 6 primitive data types + objects + functions
var my_undefined = undefined; // primitive "undefined"
var my_null = null; // primitive null, which due to legacy reasons returns "object" when you do; typeof null

var my_boolean = true; // primitive "boolean"

var my_string = "string"; // primitive "string"
var my_string_2 = 'string too'; // primitive "string" too

var my_number = 123; // primitive "number"
var my_number_2 = 123.456; // primitive "number" too
var my_number_3 = NaN; // primitive "number" too
var my_number_4 = Infinity; // primitive "number" too

var my_symbol = Symbol(); // primitive 'symbol', introduced in ES6, which is basically ENUM of java, C#, C++
var my_symbol_ANIMAL_DOG = Symbol("dog");
var my_symbol_ANIMAL_CAT = Symbol("cat");

var my_object = { attr1: 'attr1Value', attr2: 'attr2Value' }; // "object"
var my_object_new = new Date(); // "object"
var my_object_array = [1, 2, 3, 4]; // arrays are "object" too

function MyFunctionDecleration() { console.log("MyFunctionDecleration executed") }; // "function"
var my_function_expression = function() { console.log("my_function_expression executed") }; // "function"

// block_1b
console.log("-----> block_1b");
console.log("typeof undefined %s", typeof undefined);
console.log("typeof null %s", typeof null);
console.log("typeof true %s", typeof true);
console.log("typeof 'my string' %s", typeof 'my string');
console.log("typeof 123 %s", typeof 123);
console.log("typeof 123.456 %s", typeof 123.456);
console.log("typeof NaN %s", typeof NaN);
console.log("typeof Infinity %s", typeof Infinity);
console.log("typeof Symbol('ENUM_ANIMAL_DOG') %s", typeof Symbol('ENUM_ANIMAL_DOG'));

console.log("typeof my_object %s", typeof my_object);
console.log("typeof new Date %s", typeof new Date());
console.log("typeof [1,2,3,4] %s", typeof [1, 2, 3, 4]);

function myFunction() {}
console.log("typeof myFunction %s", typeof myFunction);
var myFunctionExpression = function() {};
console.log("typeof myFunctionExpression %s", typeof myFunctionExpression);