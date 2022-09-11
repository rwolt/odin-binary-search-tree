const Node = require("./Node");

class Tree {
  constructor(array) {
    if (array) {
      let tmp = removeDuplicatesAndSort(array);
      this.root = this.buildTree(tmp, 0, tmp.length - 1);
    } else {
      this.root = null;
    }
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

  insert = (value) => {
    this.root = this.insertRec(this.root, value);
  };

  insertRec = (root, value) => {
    //If leaf node is found, add new node and return it
    if (root == null) {
      root = new Node(value);
      return root;
    }
    //Otherwise recur down the tree
    if (value < root.data) {
      // If value is less than root, search the left subtree
      root.left = this.insertRec(root.left, value);
      // If value is greater than root, search right subtree
    } else if (value > root.data) {
      root.right = this.insertRec(root.right, value);
    }
    return root;
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
