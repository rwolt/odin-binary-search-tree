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
      //Node with two children:
      //Take the key from the smallest value in right subtree and replace key of node that is being deleted
      root.data = this.minValue(root.right);
      //Recursively remove smallest value in right subtree
      root.right = this.deleteRec(root.right, root.data);
    }
    return root;
  };

  minValue = (root) => {
    //Base case: no value for root.left;
    if (!root.left) {
      return root.data;
    }
    return this.minValue(root.left);
  };

  find = (value) => {
    return this.findRec(this.root, value);
  };

  findRec = (root, value) => {
    if (root === null) {
      return root;
    }
    if (value > root.data) {
      return this.findRec(root.right, value);
    } else if (value < root.data) {
      return this.findRec(root.left, value);
    }
    return root;
  };

  levelOrder = (callback) => {
    this.levelOrderRecursive(this.root, callback);
  };

  levelOrderIterative = (root, callback, q = [root], i = 0) => {
    while (i < q.length) {
      const current = q[i];
      current.left ? q.push(current.left) : "";
      current.right ? q.push(current.right) : "";
      callback(current);
      i++;
    }
  };

  levelOrderRecursive = (root, callback, q = [root]) => {
    //Base case: queue is empty
    if (!root) {
      return;
    }
    //Dequeue the first element
    const current = q.shift();
    callback(current);
    //Enqueue child elements
    current.left ? q.push(current.left) : "";
    current.right ? q.push(current.right) : "";
    this.levelOrderRecursive(q[0], callback, q);
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

const bst = new Tree([1, 2, 3, 4, 5, 6]);
bst.levelOrder((node) => {
  console.log(node.data);
});
module.exports = Tree;
