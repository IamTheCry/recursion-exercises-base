const _ = require('underscore'); // the real one! :)

// This is what you would do if you liked things to be easy:
// const stringify = JSON.stringify;
// But you don't. So you're going to write it from scratch...



const stringify = function(obj) {
  if (typeof(obj) === 'number') {
    return obj.toString()
  } else if ( obj === null ){
    return 'null'
  } else if (obj === true) {
    return 'true'
  } else if (obj === false) {
    return 'false'
  } else if (typeof(obj) === 'string') {
    return "\""+ obj+ "\""
  } else if (Array.isArray(obj) && obj.length === 0) {
    return '[]'      
  } else if (Array.isArray(obj) && obj.length === 1) {
    return '[' + obj[0] + ']';
  }// else if (Array.isArray(obj) && typeof(obj[0] !== typeof(obj[1]))) {
   // return '[' + stringify(obj[0]) + ',' + stringify(obj[1]) + ']';
  //}
   else if (Array.isArray(obj)) {
    return '[' + obj.join(',') + ']'
  }
  // your code goes here
};

module.exports = {
  stringify: stringify
};