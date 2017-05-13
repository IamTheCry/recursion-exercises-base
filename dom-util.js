
const visitAllNodes = function(node, callback) {
  //let children = node.childNodes;
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
  // Hint: Use visitAllNodes()
  // Your code here


module.exports = {
  visitAllNodes: visitAllNodes,
  flattenTreeToArray: flattenTreeToArray
};

