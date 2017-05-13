
const visitAllNodes = function(node, callback) {
  for (let i = 0 ; i < node.childNodes.length ; i++) {
    visitAllNodes(node.childNodes[i], callback)
  }
  callback(node)
};


const flattenTreeToArray = function(node) {
  let arr = []
  visitAllNodes(node, (node) => {
    arr.push(node);
  })
  return arr;
};

module.exports = {
  visitAllNodes: visitAllNodes,
  flattenTreeToArray: flattenTreeToArray
};

