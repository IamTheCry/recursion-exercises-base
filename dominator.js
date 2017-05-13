const { flattenTreeToArray } = require('./dom-util');
const _ = require('underscore');

const getElementById = function(root, id) {
  let flattenedArray = flattenTreeToArray(root);
  //console.log(flattenedArray)
  let filteredArray = _.filter(flattenedArray, (el) => el.id === id );
  return filteredArray[0];
};

const getElementsByClassName = function(root, className) {
  let classesArray = flattenTreeToArray(root);
  let filteredClasses = _.filter(classesArray, (x) => _.contains(x.classList, className));
    //x.classList.contains(className))  ;
  return(filteredClasses);
  // Your code here
};

const getElementsByTagName = function(root, tagName) {
  let tagArray = flattenTreeToArray(root);
  let filteredTags = _.filter(tagArray, (x) => x.tagName === tagName)
  return filteredTags;
  // Your code here
};

module.exports = {
  getElementById: getElementById,
  getElementsByClassName: getElementsByClassName,
  getElementsByTagName: getElementsByTagName
};
