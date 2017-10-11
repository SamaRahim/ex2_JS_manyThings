// Code goes here
// NOTE using IIFE (Immediately Invoked Function Expression) below to declare Module MyIIFE
//      Basically, the IIFE (anonymous function) is declared and then executed Immediately with (), without input
//      The object returned by IIFE is assigned to only variable added to global scope by this file, MyIIFE, which becomes available to html's JS code
var MyIIFE = (function() {
    "use strict"; // NOTE browser sees this as unassigned String and ignores it. It is an instruction for JS engines to "switch into strict mode"

    // NOTE local variables are started with _ as a good JS style
    var _name = 'ilker';

    var _f0 = function(inp1) { console.log("in _f0 of MyIFFE with inp1:" + inp1); }

    var _f1 = function(inp1) { console.log("in _f1 of MyIFFE with inp1:" + inp1); }

    var _f2 = function(inp1) {
        _f0();
        console.log("in _f2 of MyIFFE with inp1:" + inp1);
    }

    // NOTE this IIFE returns the below object, which effectively sets the publicly available attributes and functions of this module
    return {
        name: 'ilker',
        lastName: 'kiris',
        f1: _f1,
        f2: _f2
    }
})();

// NOTE below is usage of MyIFFE module declared above
console.log('LOOK here for MyIFFE working' + MyIIFE);
console.log('LOOK here for MyIFFE working' + MyIIFE.name);
console.log('LOOK here for MyIFFE working' + MyIIFE.lastName);
// MyIIFE._f1(); // NO, it is not publicly available
MyIIFE.f1(); // OK
MyIIFE.f1(); // OK