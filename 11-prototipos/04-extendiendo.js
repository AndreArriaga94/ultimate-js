Object.prototype.isEqual = function (obj) {
    // ...
}
// Array, Number, Boolean, Object no extender
let x = {};
x.isEqual({a: 1});