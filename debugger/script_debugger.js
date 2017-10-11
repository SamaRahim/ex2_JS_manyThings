// Code goes here
function myGlobalFunctionWithDebugger(inp) {
    console.log("BEFORE calling myGlobalFunctionWithDebugger2('INP2') in myGlobalFunctionWithDebugger");
    myGlobalFunctionWithDebugger2('input2');
    console.log("BEFORE debugger in myGlobalFunctionWithDebugger");
    debugger;
    document.getElementById("1").innerHTML = "myGlobalFunctionWithDebugger set this new Content with inp:" + inp;
}

function myGlobalFunctionWithDebugger2(inp) {
    console.log("BEFORE debugger in myGlobalFunctionWithDebugger2");
    debugger;
    document.getElementById("1").innerHTML = "myGlobalFunctionWithDebugger2 set this new Content with inp:" + inp;
}