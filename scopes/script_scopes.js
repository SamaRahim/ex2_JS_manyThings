// Code goes here
// This JS showing scopes; global and local
// NOTE There are really 2 scopes; "global scope" and "local function scope". 
//      If one forgets to put "var" in front of a local variable in a Function and if "strict mode" is disabled(default), then JS engine makes that local variable global, causing Leakage of it to global scope
var myGlobalVar = 'ilker'; // NOTE_1 variable declaration outside of functions put them into "global scope"

function myGlobalFunc_A() {
    var myLocalVar1 = 'kiris';
    var myLocalVar2 = 'Dr.'; // NOTE_2 this and above are in "local Function scope"
    console.log('in myGlobalFunc_A, myGlobalVar:' + myGlobalVar + ', myLocalVar1:' + myLocalVar1 + ', myLocalVar2:' + myLocalVar2);
    // console.log('in myGlobalFunc_A, myLocalVarB1:' + myLocalVarB1 + ', myLocalVarC1:' + myLocalVarC1 + ', myVarIntendedToBeLocalButLeakedToGlobal:' + myVarIntendedToBeLocalButLeakedToGlobal);
    // NOTE_3 when you unComment above line, execution of this function throws "Uncought ReferenceError" and stops. Because myLocalVarB1, myLocalVarC1, myVarIntendedToBeLocalButLeakedToGlobal is not defined
    debugger;
    myGlobalFunc_B(myLocalVar1);
}

function myGlobalFunc_B(inpIsLocal) {
    var myLocalVarB1 = "I am local to this function ONLY";
    console.log('in myGlobalFunc_B, inpIsLocal:' + inpIsLocal + ', myGlobalVar:' + myGlobalVar + ', myLocalVarB1:' + myLocalVarB1);
    // console.log('myLocalVar1:' + myLocalVar1 + ', myLocalVar2:' + myLocalVar2);
    // NOTE_3 when you unComment above line, execution of this function throws "Uncought ReferenceError" and stops. Because myLocalVar1, myLocalVar2 are not defined
    debugger;
    myGlobalFunc_C(myGlobalVar + inpIsLocal);
    // NOTE_4 myVarIntendedToBeLocalButLeakedToGlobal gets to be leaked to global scope after above Function call
    debugger;
}

// NOTE_5 "function declaration" pushes declared function name to global scope. And also "hoists" them
function myGlobalFunc_C(inpIsLocal) {
    var myLocalVarC1 = "I am correctly local";
    console.log('in myGlobalFunc_C, ');
    myVarIntendedToBeLocalButLeakedToGlobal = "LEAKed to 'global scope' due to programming bug"; // NOTE_6 this leaks to global scope (if not in strict mode), because forgot to put var in front of it
    debugger;
    document.getElementById("1").innerHTML = "myGlobalFunc_C set this new Content with inpIsLocal:" + inpIsLocal;
}