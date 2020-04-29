"use strict;"
/** 
 * function to sort single arguments Object
 * arr.sort(ds('field'));
 * @param {string} p - field to sort.
*/
const ds = function(p){
    var s = 1;
    if(p[0] === "-") {
        s = -1;
        p = p.substr(1);
    }
    return function (a,b) {
        var r = (a[p] < b[p]) ? -1 : (a[p] > b[p]) ? 1 : 0;
        return r * s;
    }
}

/** 
 * ObSort: Object sort package helpful to sort array of object
 * @license MIT
 * @example
 * [{...},{...}].sort(obsort('field'));
 * [{...},{...}].sort(obsort('field1','field2'));
*/
const obsort = function() {
    var a = arguments;
    return function (o1, o2) {
        var i = 0, r = 0, n = a.length;
        while(r === 0 && i < n) {
            r = ds(a[i])(o1, o2);
            i++;
        }
        return r;
    }
}

module.exports = obsort;