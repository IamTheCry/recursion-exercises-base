const _ = require('underscore'); // the real one! :)

// This is what you would do if you liked things to be easy:
// const stringify = JSON.stringify;
// But you don't. So you're going to write it from scratch...

 
const stringify = function(obj) {
  let arrayKeyValues = [];
  let arrayValues = [];
  let objKeys = [];

    // Arrays

    if (typeof(obj) === 'number') {
      return '' + obj + '';
    } else if (typeof(obj) === 'boolean') {
      return '' + obj + '';
    } else if (obj === null) {
      return '' + obj + ''
    } else if (typeof(obj) === 'string') {
        return '"' + obj + '"';
    } else if (Array.isArray(obj)) {
        if (obj[0] === undefined)
            return '[]';
        else {
          _.each(obj, (val) => arrayValues.push(stringify(val)));
            return '[' + arrayValues + ']';
        };
    }
    // Objects 
      else if (typeof(obj) === 'object') {
        objKeys = Object.keys(obj);
        _.each(objKeys, (key) => {
          let suffix = '"' + key + '":';
          let currentKey = obj[key];
          if (typeof(currentKey) === 'string') {
            arrayKeyValues.push(suffix + '"' + currentKey + '"');
          } else if (typeof(currentKey) === 'object') {
              arrayKeyValues.push(suffix + stringify(currentKey));
          }
        });
        return '{' + arrayKeyValues + '}';
      };
}





  // your code goes here


module.exports = {
  stringify: stringify
};