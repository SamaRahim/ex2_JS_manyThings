// Code goes here
// NOTE_1 this is a "function declaration"
function myFunctionDelaration(inp) {
    console.log("BEF myFunctionDelaration with inp:" + inp);
    document.getElementById("1").innerHTML = "myFunctionDelaration set this new Content with inp:" + inp;
}

debugger;
myFunctionDelaration('ilker - using function declaration');
myFunctionDelaration();
myFunctionDelaration;

// f2aV();  // NOTE this is wrong, because although f2aV variable is hoisted, its value is not, and it is not initialized at this line.

// NOTE_2a this is a "anonymous function expression" (meaning the function expression did not have a name) assigned to var f2aV 
var f2aV = function(inp) {
    console.log("BEF anonymous function expression assigned to var f2aV with inp:" + inp);
    document.getElementById("1").innerHTML = "anonymous function expression assigned to var f2aV set this new Content with inp:" + inp;
}

debugger;
f2aV('kiris - using anonymous function expression assigned to a var')
f2aV();
f2aV;

// NOTE_2b this is a "named function expression" (meaning the function expression have a name) assigned to var f2bV 
var f2bV = function func2bName(inp) {
    console.log("BEF named function expression assigned to var f2bV with inp:" + inp);
    document.getElementById("1").innerHTML = "anonymous function expression assigned to var f2bV set this new Content with inp:" + inp;
}

debugger;
f2bV('kiris - using named function expression assigned to a var')

debugger;
// NOTE_2c1 this is a "self invoking function expression", "IIFE (Immediately Invoked Function Expression)" using named Function 
(function func2cName(inp) {
    console.log("BEF IIFE using named function with inp:" + inp);
    document.getElementById("1").innerHTML = "IIFE using named function set this new Content with inp:" + inp;
})('IIFE_namedFunc_inp');


// NOTE_2c2 this is a "self invoking function expression", "IIFE (Immediately Invoked Function Expression)" using anonymous Function 
(function(inp) {
    console.log("BEF IIFE using anonymous function with inp:" + inp);
    document.getElementById("1").innerHTML = "IIFE using anonymous function set this new Content with inp:" + inp;
})('IIFE_anonymousFunc_inp');