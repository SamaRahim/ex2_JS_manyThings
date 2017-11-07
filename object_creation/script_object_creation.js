// There are multiple ways to create object

// 1) using  new Object() along with ". notation""
var _myObj1 = new Object();
_myObj1.myBoolean = true;
_myObj1.myNull = null;
_myObj1.myUndefined; // by default unassigned properties and variables are undefined (NOTE not null)
_myObj1.myNumber = 1234;
_myObj1.myStr1 = 'string1';
_myObj1.myStr2 = "string2";

// 2) using new Object along with "bracket notation", since objects are "associative arrays"
var propertyValue = 'myStr1'
var _myObj2 = new Object();
_myObj2['myBoolean'] = true;
_myObj2['myNull'] = null;
_myObj2['myUndefined']; // by default unassigned properties and variables are undefined (NOTE not null)
_myObj2['myNumber'] = 1234;
_myObj2[propertyValue] = 'string1'; // NOTE this
_myObj2['myStr2'] = "string2";

// 3) using "object initializer" ("object literal")
var _myObj3 = {
    myBoolean: false,
    myNull: null,
    myUndefined: undefined,
    myNumber: new Number(1234),
    myStr1: 'string1',
    myStr2: "string2",
    myFunc1: function() {
        console.log('myStr2 is ' + this.myStr2);
    },
    mySubObjectAttr: {
        subObjectStrAttr: "I'm attribute of a sub object, which is an attribute of outer object"
    }
};

// 4) Creating object via "factory function" 
// 4a) declare factory function to create object
function myFactoryFunc(_name, _lastName) {
    return {
        name: _name,
        lastName: _lastName
    }
}
// 4b) create objects using above factory function 
var myFactoryFuncCreated_1 = myFactoryFunc('ilker', 'kiris');
var myFactoryFuncCreated_2 = myFactoryFunc('hakan', 'gider');

// 5) using constructor Function using "this" along with "new" operator
function MyObjConstructorFunc(vBoolean, vNumber, vString1, vString2) {
    this.myBoolean = vBoolean;
    this.myNumber = vNumber;
    this.myStr1 = vString1;
    this.myStr2 = vString2;
}
var _myObj4 = new MyObjConstructorFunc(true, 1234, 'string1', "string2");
var _myObj4b = new MyObjConstructorFunc(false, 4321, 'str1', "str2");

// 5b) relationship of prototype attribute of a constructor function and its instance's __proto__ attribute
console.log("NOTE MyObjConstructorFunc.prototype === _myObj4.__proto__ %s", (MyObjConstructorFunc.prototype === _myObj4.__proto__));
console.log(MyObjConstructorFunc.prototype);
console.log(_myObj4.__proto__);


// prototype - object prototype
var myObjPrototypeObject = {
    myBoolean: false, // default value of false for myBoolean property
    myNumber: new Number(1234), // default value of 1234
    myStr1: 'string1',
    myStr2: "string2",
    myFunc1: function(inp) {
        console.log('MyObjPrototypeObject myFunc1 called with inp ' + inp + ', myStr1 is ' + this.myStr1 + ', myStr2 is ' + this.myStr2);
    }
};

// example object 5 - using Object.create along with a Prototype object and Object.create
var _myObj5 = Object.create(myObjPrototypeObject); // NOTE Object.create takes in an object(i.e prototype object), not Prototype
// NOTE that above 1 line is equivalent to below 2 lines;
var _myObj5d = {};
_myObj5d.__proto__ = myObjPrototypeObject;
//
_myObj5.myFunc1('ILKER');
var _myObj5b = Object.create(myObjPrototypeObject);
_myObj5b.myStr1 = "newString1";
_myObj5b.myFunc1('KIRIS');
var _myObj5c__proto__ = myObjPrototypeObject;


// extend(add a 2nd method) to prototype object
myObjPrototypeObject.myFunc2 = function(inp1, inp2) {
    console.log('myObjPrototypeObject myFunc2 called with inp1 ' + inp1);
    this.myFunc1(inp2);
};
// NOTE all instances created using that Prototype, get(inherit) the above addition to their Prototype
_myObj5.myFunc2('ship', 'shak', 'shok');
_myObj5b.myFunc2('SHIP', 'SHAK', 'SHOK');

// prototype - using "object constructor function"
function MyObjPrototype(vBoolean, vNumber, vString1, vString2) {
    var myLocalStr1 = vString1; // OK - NOTE if you don't prefix with this. then it is local to constructor Function and not available to objects created by the Prototype
    // myLocalStr2 = vString2; // WRONG - NOTE when you enable "use strict" mode, then you realize that it is trying to leak it to global scope, which stric mode does not allow and errors out on this line and stops JS execution at this line

    this.myBoolean = vBoolean;
    this.myNumber = new Number(vNumber);
    this.myStr1 = vString1;
    this.myStr2 = vString2;
    this.myFunc1 = function(inp) {
        console.log('MyObjPrototype myFunc1 called with inp ' + inp + ', myStr1 is ' + this.myStr1 + ', myStr2 is ' + this.myStr2);
    }
}

// example object 6 - using new keyword and Prototype
var _myObj6 = new MyObjPrototype(true, 12, 'st1', "st2");
_myObj6.myFunc1('ILKER');
var _myObj6b = new MyObjPrototype(false, 1234567, 'str1', "str2");
_myObj6b.myStr1 = "newString1";
_myObj6b.myFunc1('KIRIS');

// extend(add a 2nd method) to Prototype
MyObjPrototype.prototype.myFunc2 = function(inp1, inp2) {
    console.log('MyObjPrototype myFunc2 called with inp1 ' + inp1);
    this.myFunc1(inp2);
};
// NOTE all instances created using that Prototype, get(inherit) the above addition to their Prototype
_myObj6.myFunc2('ship', 'shak', 'shok');
_myObj6b.myFunc2('SHIP', 'SHAK', 'SHOK');


// LOOP in in object's attributes
// you can loop over the attributes of object with for... in loop
for (var attrName in _myObj2) {
    console.log(attrName + ":" + _myObj2[attrName]);
}
// with ES5 you can also do loop over attributes of an object using forEach
Object.keys(_myObj2).forEach(function(key, index) {
    console.log('using forEach, index:%s, attrName:%s, attrValue:%s', index, key, _myObj2[key]);
});