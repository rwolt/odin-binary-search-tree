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

  levelorder = (callback) => {
    return this.levelOrderIterative(this.root, callback);
  };

  levelOrderIterative = (root, callback, q = [root], i = 0, d = []) => {
    while (i < q.length) {
      const current = q[i];
      current.left ? q.push(current.left) : "";
      current.right ? q.push(current.right) : "";
      callback ? callback(current) : d.push(q[i].data);
      i++;
    }
    if (!callback) {
      return d;
    }
    return;
  };

  levelOrderRecursive = (root, callback, q = [root], d = []) => {
    //Base cases: queue is empty, queue is empty and no callback
    if (!callback && !root) {
      return d;
    } else if (!root) {
      return;
    }
    //Dequeue the first element
    const current = q.shift();
    //If no callback, store each value in an array
    callback ? callback(current) : d.push(current.data);
    //Enqueue child elements
    current.left ? q.push(current.left) : "";
    current.right ? q.push(current.right) : "";
    //Recursive step
    return this.levelOrderRecursive(q[0], callback, q, d);
  };

  inorder = (callback) => {
    return this.inorderRec(this.root, callback);
  };

  inorderRec = (root, callback, d = []) => {
    //Base case: smallest value in subtree
    if (root === null) {
      return;
    } else {
      this.inorderRec(root.left, callback, d);
      callback ? callback(root) : d.push(root.data);
      this.inorderRec(root.right, callback, d);
    }
    if (!callback) {
      return d;
    }
  };

  preorder = (callback) => {
    return this.preorderRec(this.root, callback);
  };

  preorderRec = (root, callback, d = []) => {
    if (root === null) {
      return;
    } else {
      callback ? callback(root) : d.push(root.data);
      this.preorderRec(root.left, callback, d);
      this.preorderRec(root.right, callback, d);
    }
    if (!callback) {
      return d;
    }
  };

  postorder = (callback) => {
    return this.postorderRec(this.root, callback);
  };

  postorderRec = (root, callback, d = []) => {
    if (root === null) {
      return;
    } else {
      this.postorderRec(root.left, callback, d);
      this.postorderRec(root.right, callback, d);
      callback ? callback(root) : d.push(root.data);
    }
    if (!callback) {
      return d;
    }
  };

  depth = (value) => {
    return this.depthRec(this.root, value);
  };

  depthRec = (root, value, edges = 0) => {
    if (root === null) {
      return root;
    }
    if (value > root.data) {
      edges += 1;
      return this.depthRec(root.right, value, edges);
    } else if (value < root.data) {
      edges += 1;
      return this.depthRec(root.left, value, edges);
    }
    return edges;
  };

  height = (value) => {
    const tmp = this.find(value);
    return this.heightRec(tmp);
  };

  heightRec = (root) => {
    if (root == null) {
      // No edge to this node
      return -1;
    }
    const left = 1 + this.heightRec(root.left);
    const right = 1 + this.heightRec(root.right);

    return Math.max(left, right);
  };

  isBalanced = () => {
    if (
      Math.abs(this.height(this.root.left) - this.height(this.root.right)) > 1
    ) {
      return false;
    }
    return true;
  };

  rebalance = () => {
    let tmp = this.inorder();
    this.root = this.buildTree(tmp, 0, tmp.length - 1);
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
