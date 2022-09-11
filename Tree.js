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

  // Calls the recursive insert function on the root node
  insert = (value) => {
    this.root = this.insertRec(this.root, value);
  };

  insertRec = (root, value) => {
    // If leaf node is found, add new node and return it
    if (root == null) {
      root = new Node(value);
      return root;
    }
    //Otherwise recur down the tree
    if (value < root.data) {
      root.left = this.insertRec(root.left, value);
    } else if (value > root.data) {
      root.right = this.insertRec(root.right, value);
    }
    return root;
  };

  delete = (value) => {
    this.root = this.deleteRec(this.root, value);
  };

  deleteRec = (root, value) => {
    if (root == null) {
      return root;
    }

    if (value < root.data) {
      root.left = this.deleteRec(root.left, value);
    } else if (value > root.data) {
      root.right = this.deleteRec(root.right, value);
    } else {
      //If the matching key has no children or 1 child
      if (root.right == null) {
        return root.left;
      } else if (root.left == null) {
        return root.right;
      }
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
