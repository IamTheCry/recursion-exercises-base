const _ = require('underscore'); // the real one! :)

// This is what you would do if you liked things to be easy:
// const stringify = JSON.stringify;
// But you don't. So you're going to write it from scratch...

 
const stringify = function(obj) {
  let arrOfKeyVals = [];
  let arrayValues = [];
  let objKeys = [];

    if (typeof(obj) === 'number' || typeof(obj) === 'boolean' || obj === null) {
        return '' + obj;
    } else if (typeof obj === 'string') {
        return '"' + obj + '"';
    } else if (Array.isArray(obj)) {
        if (obj[0] === undefined)
            return '[]';
        else {
          _.each(obj, (val) => arrayValues.push(stringify(val)));
            return '[' + arrayValues + ']';
        };
    }
    /*********CHECK FOR OBJECT**********/
    // else if (obj instanceof Object) {
    //     //get object keys
    //     objKeys = Object.keys(obj);
    //     //set key output;
    //     objKeys.forEach(function(key) {
    //         var keyOut = '"' + key + '":';
    //         var keyValOut = obj[key];
    //         //skip functions and undefined properties
    //         if (keyValOut instanceof Function || typeof keyValOut === undefined)
    //             arrOfKeyVals.push('');
    //         else if (typeof keyValOut === 'string')
    //             arrOfKeyVals.push(keyOut + '"' + keyValOut + '"');
    //         else if (typeof keyValOut === 'boolean' || typeof keValOut === 'number' || keyValOut === null)
    //             arrOfKeyVals.push(keyOut + keyValOut);
    //         //check for nested objects, call recursively until no more objects
    //         else if (keyValOut instanceof Object) {
    //             arrOfKeyVals.push(keyOut + stringify(keyValOut));
    //         }
    //     });
    //     return '{' + arrOfKeyVals + '}';
    // }
}




//   let arrOfKeyVals = [];
//   let arrVals = [];
//   let objKeys = [];

//   if (typeof(obj) === 'number' || typeof obj === 'boolean' || obj === null) {
//     return '' + obj;
//   } else if (typeof obj === 'string') {
//       return '"' + obj + '"';
//   } else if (Array.isArray(obj) && obj.length === 0) {
//       return '[]'      
//   } else if (Array.isArray(obj) && obj.length === 1) {
//       return '[' + obj[0] + ']';
//   // } else if (Array.isArray(obj)) {
//   //     if (obj[0] === undefined) {
//   //       return '[]';
//   //   } else {
//   //       _.each(obj, (val) => arrayValues.push(stringify(val)))
//   //       return '[' + arrayValues + ']';
//   //   }
//   }    else if (Array.isArray(obj)) {
//         //check for empty array
//         if (obj[0] === undefined)
//             return '[]';
//         else {
//             obj.forEach(function(el) {
//                 arrVals.push(stringify(el));
//             });
//             return '[' + arrVals + ']';
//         }
//     }


  // your code goes here


module.exports = {
  stringify: stringify
};