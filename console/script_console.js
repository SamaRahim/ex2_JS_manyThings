// Code goes here
// NOTE_1 in a browser dev tool, you can filter out based on console level
// NOTE_2 error, warn, trace provide more info in browser console
// NOTE_3 the log levels from highest importance to lowest level are; error, warn, info (equivalent to log), debug, trace
function demoConsoleFunc() {
    var myLocalVar1 = "I'm in local scope only";
    myLeakedLocal = "I leaked";

    console.error('myGlobalFunc_A console.error');
    console.warn('myGlobalFunc_A console.warn');
    console.info('myGlobalFunc_A console.info'); // NOTE_4 basically equivalent to console.log
    console.debug('myGlobalFunc_A console.debug');
    console.trace('myGlobalFunc_A console.trace');
    console.log('myGlobalFunc_A console.log'); // NOTE_5 basically equivalent to console.info
}