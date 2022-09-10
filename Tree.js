const Node = require("./Node");

class Tree {
  constructor(array) {
    let tmp = removeDuplicatesAndSort(array);
    this.root = this.buildTree(tmp, 0, tmp.length - 1);
  }

  buildTree = (arr, start, end) => {
    //Base case
    if (start > end) {
      return null;
    }
    //Recursive step
    let middle = parseInt((start + end) / 2);
    let current = new Node(arr[middle]);
    current.left = this.buildTree(arr, start, middle - 1);
    current.right = this.buildTree(arr, middle + 1, end);
    return current;
  };
}

const removeDuplicatesAndSort = (array) => {
  // Keep only the first occurence of an item
  let tmp = array.filter((item, index) => {
    return array.indexOf(item) === index;
  });
  // Sort the de-duped array by number ascending
  return tmp.sort((a, b) => a - b);
};

module.exports = Tree;
