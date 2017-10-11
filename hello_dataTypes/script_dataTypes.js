// Code goes here
// This JS shows many things; data types; string, number, object, array(which is object), function var
// VARIABLEs
// String variables
var myStrVar1 = "string1";
var myStrVar2 = 'string2';
// Number variable
var myNumberVar1 = 101;
var myNumberVar2 = 200.345;
// Object variable, like an instance of a Class in other OO languages
var myObject = {
    myInt: 101,
    myStr: 'string',
    // NOTE below one is variable pointing to a function, basically "function pointer", or "method" of class instance
    myFuncVarInObject: demoConsoleFunc,
    // NOTE objects can contain other objects
    myInnerObj: {
        myInnerStr: "string value"
    }
};
// NOTE you access "attributes" of an object in 2 ways;
// method_1 Accessing object attributes(elements) via .
console.log("myObject.myStr is " + myObject.myStr);
console.log("myObject.myInnerObj.myInnerStr is " + myObject.myInnerObj.myInnerStr);
// method_2 Accessing object attributes(elements) via object's "associative array" behaviour. Via ["attributeName"]
console.log("myObject['myStr'] is " + myObject['myStr']);

// Array variable
var myArray1 = [1, 2, 3, 4, 5];
var myArray2 = [1, 2, 3, 4, "zztop"]; // NOTE arrays can have mixed type elements. In this example, number and string

// variable pointing to a function
var myFuncVar = demoConsoleFunc;


var useHoistedVar = myGlobalVarHoisted + " is used";
// myFuncVar1();

// NOTE the value of myUnInitializedVar will be "undefined", meaning any uninitialized variable will have value undefined
var myUnInitializedVar;

// NOTE "null" is a value by itself. null and undefined are different.
var myNullInitializedVar = null;

function demoConsoleFunc() {
    demoConsoleFuncInner("INPUT_1");
    var myLocal2 = "I'm local variable in local scope only";
    myGlobalVarHoisted = "I'm hoisted 2";
    console.info('exiting demoConsoleFunc');
    debugger;
}

function demoConsoleFuncInner(inp1) {
    console.log('entered demoConsoleFuncInner with input:' + inp1);
    var myLocalVar1 = "I'm in local scope only";
    myLeakedLocal = "I leaked";
    debugger;
}

// NOTE variables decleration is "hoisted", but NOT their value (initialization takes place when below line executes. So any code above this line relying on hoisted variable's value will get "undefined" as its value)
var myGlobalVarHoisted = "I'm hoisted 3";

// NOTE below variable that is initialized to point to a function. The variable it hoisted, but not its value. So any code above this that tries to invoke the function will fail 
//var myFuncVar1 = demoConsoleFunc;