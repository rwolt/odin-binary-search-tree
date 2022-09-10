const Node = require("./Node");

class Tree {
  constructor(array) {
    this.root = this.buildTree(array);
  }

  buildTree = (array) => {
    let start = 0;
    let end = array.length - 1;
    let middle = parseInt((start + end) / 2);
    return array[middle];
  };
}

module.exports = Tree;
