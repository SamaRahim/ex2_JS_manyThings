// Code goes here
// This file is showing how to set "strict mode" globally, or more preferably, per function
// NOTE_1 if below line is uncommented then it enables "strict mode" globally for all JS files included by the html that includes this file
// "use strict";
var Module4strict = (function(Module4strict) {
    "use strict"; // NOTE browser sees this as unassigned String and ignores it. It is an instruction for JS engines to "switch into strict mode"
    // NOTE_2 above line inside a function, means apply "strict mode" only inside this function

    var _name = 'ilker';
    alert("Hello Dr. " + _name);


    function _myPrivateFunction() {
        document.getElementById("1234").innerHTML = "Module4strict's private Function myPrivateFunction set this new Content";
    }

    function myPublicFunction_A() {
        document.getElementById("123").innerHTML = "Module4strict's public Function myPublicFunction_A set this new Content";
    }

    function myPublicFunction_B() {
        document.getElementById("1234").innerHTML = "Module4strict's public Function myPublicFunction_B set this new Content";
    }

    // NOTE_3 using "object literal" to return public variables(in this case none) and functions of the module
    return {
        myPublicFunction_A: myPublicFunction_A,
        myPublicFunction_B: myPublicFunction_B
    };
})(Module4strict || {});