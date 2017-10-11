// Code goes here
// NOTE using IIFE (Immediately Invoked Function Expression) below to declare Module Module4index
//      Basically, the IIFE (anonymous function) is declared and then executed Immediately with (Module4index || {}) input
//      The object returned by IIFE is assigned to only variable added to global scope by this file, Module4index, which becomes available to html's JS code
var Module4index = (function(Module4index) {
    "use strict"; // NOTE browser sees this as unassigned String and ignores it. It is an instruction for JS engines to "switch into strict mode"

    var _name = 'ilker';
    alert("Hello Dr. " + _name);

    function _myPrivateFunction() {
        document.getElementById("1234").innerHTML = "Module4index's private Function myPrivateFunction set this new Content";
    }

    function myPublicFunction_A() {
        document.getElementById("123").innerHTML = "Module4index's public Function myPublicFunction_A set this new Content";
    }

    function myPublicFunction_B() {
        document.getElementById("1234").innerHTML = "Module4index's public Function myPublicFunction_B set this new Content";
    }

    // NOTE_3 using "object literal" to return public variables(in this case none) and functions of the module
    return {
        myPublicFunction_A: myPublicFunction_A,
        myPublicFunction_B: myPublicFunction_B
    };
})(Module4index || {});