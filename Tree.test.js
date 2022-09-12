const Tree = require("./Tree");

it("Null root of BST", () => {
  expect(new Tree()).toHaveProperty("root", null);
});

it("Has root property", () => {
  expect(new Tree([5])).toHaveProperty("root");
});

it("Root value from 1 element array", () => {
  expect(new Tree([5])).toHaveProperty("root.data", 5);
});

it("Root value from 3 element array", () => {
  expect(new Tree([1, 5, 9])).toHaveProperty("root.data", 5);
});

it("Left value from 3 element array", () => {
  expect(new Tree([1, 5, 9])).toHaveProperty("root.left.data", 1);
});

it("Right value from 3 element array", () => {
  expect(new Tree([1, 5, 9])).toHaveProperty("root.right.data", 9);
});

it("Left subtree of leaf node evaluates to null", () => {
  expect(new Tree([5, 6, 7])).toHaveProperty("root.right.left", null);
});

it("Right subtree of leaf node evaluates to null", () => {
  expect(new Tree([5, 6, 7])).toHaveProperty("root.right.right", null);
});

it("Array with even number of elements", () => {
  expect(new Tree([1, 2, 3, 4])).toHaveProperty("root.right.right.data", 4);
});

it("Sorted array with duplicates", () => {
  expect(new Tree([1, 2, 3, 3, 3, 3, 3, 3, 4])).toHaveProperty("root.data", 2);
});

it("Unsorted array 1", () => {
  expect(new Tree([4, 3, 9, 1, 8])).toHaveProperty("root.data", 4);
});

it("Unsorted array 2", () => {
  expect(new Tree([6, 3, 4, 2, 7])).toHaveProperty("root.left.data", 2);
});

it("Unsorted array with duplicates", () => {
  expect(new Tree([7, 1, 6, 2, 3, 5, 4])).toHaveProperty("root.data", 4);
});

it("Insert a value into an empty tree", () => {
  const bst = new Tree();
  bst.insert(4);
  expect(bst).toHaveProperty("root.data", 4);
});

it("Insert a value into a tree", () => {
  const bst = new Tree([1, 2, 3]);
  bst.insert(4);
  expect(bst).toHaveProperty("root.right.right.data", 4);
});

it("Insert a value into a tree created from unsorted array", () => {
  const bst = new Tree([8, 13, 10, 14, 4, 1, 3, 7, 6]);
  bst.insert(5);
  expect(bst).toHaveProperty("root.left.right.right.left.data", 5);
});

it("Deleting a value from an empty tree", () => {
  const bst = new Tree();
  bst.delete(5);
  expect(bst).toHaveProperty("root", null);
});

it("Deleting a leaf node", () => {
  const bst = new Tree([1, 2, 3, 4]);
  bst.delete(4);
  expect(bst).toHaveProperty("root.right.right", null);
});

it("Deleting a node with 1 child", () => {
  const bst = new Tree([1, 2, 3, 4]);
  bst.delete(3);
  expect(bst).toHaveProperty("root.right.data", 4);
});

it("Deleting a node with 2 children", () => {
  const bst = new Tree([1, 2, 3, 4, 5, 6]);
  bst.delete(5);
  expect(bst).toHaveProperty("root.right.data", 6);
});

it("Deleting a node with 2 children: unsorted", () => {
  const bst = new Tree([8, 13, 3, 3, 10, 14, 4, 1, 3, 7, 6]);
  bst.delete(8);
  expect(bst).toHaveProperty("root.data", 7);
});

it("Find a value that does not exist", () => {
  const bst = new Tree();
  const found = bst.find(5);
  expect(found).toBeNull;
});

it("Find a leaf node", () => {
  const bst = new Tree([1, 2, 3, 4]);
  expect(bst.find(1)).toEqual({ data: 1, left: null, right: null });
});

it("Finding a node with 1 child", () => {
  const bst = new Tree([1, 5, 7, 3, 1, 5, 7, 3, 5]);
  expect(bst.find(5)).toEqual({
    data: 5,
    left: null,
    right: { data: 7, left: null, right: null },
  });
});

it("Finding a node with 2 children", () => {
  const bst = new Tree([1, 2, 3, 4, 5, 6]);
  expect(bst.find(5)).toEqual({
    data: 5,
    left: { data: 4, left: null, right: null },
    right: { data: 6, left: null, right: null },
  });
});

// it("console.log each node value", () => {
//   const bst = new Tree([1, 2, 3, 4, 5, 6]);
//   expect(
//     bst.levelOrder((node) => {
//       console.log(node.data);
//     })
//   );
// });

it("Traverse the tree in level order with no callback function", () => {
  const bst = new Tree([1, 2, 3, 4, 5, 6, 7]);
  expect(bst.levelOrder()).toEqual([4, 2, 6, 1, 3, 5, 7]);
});

it("Inorder traversal of empty tree", () => {
  const bst = new Tree([]);
  expect(bst.inorder).toBeNull;
});

it("Preorder traversal of empty tree", () => {
  const bst = new Tree([]);
  expect(bst.preorder).toBeNull;
});
it("Postorder traversal of empty tree", () => {
  const bst = new Tree([]);
  expect(bst.postorder).toBeNull;
});

it("Inorder traversal with no callback", () => {
  const bst = new Tree([6, 3, 7, 2, 5]);
  expect(bst.inorder()).toEqual([2, 3, 5, 6, 7]);
});

it("Preorder traversal with no callback", () => {
  const bst = new Tree([6, 3, 7, 2, 5]);
  expect(bst.preorder()).toEqual([5, 2, 3, 6, 7]);
});

it("Postorder traversal with no callback", () => {
  const bst = new Tree([6, 3, 7, 2, 5]);
  expect(bst.postorder()).toEqual([3, 2, 7, 6, 5]);
});

it("Depth of key not in tree", () => {
  const bst = new Tree([8, 5, 11]);
  expect(bst.depth(15)).toBeNull;
});

it("Depth of zero", () => {
  const bst = new Tree([8, 5, 11]);
  expect(bst.depth(8)).toBe(0);
});

it("Depth of 2", () => {
  const bst = new Tree([8, 3, 10, 1, 14, 6, 13, 4, 7]);
  expect(bst.depth(14)).toBe(3);
});

it("Height of zero (leaf node)", () => {
  const bst = new Tree([8, 3, 10, 1, 14, 6, 13, 4, 7]);
  expect(bst.height(14)).toBe(0);
});

it("Height of root", () => {
  const bst = new Tree([8, 3, 10, 1, 14, 6, 13, 4, 7]);
  expect(bst.height(7)).toBe(3);
});

it("Height of node in middle of tree", () => {
  const bst = new Tree([8, 3, 10, 1, 14, 6, 13, 4, 7]);
  expect(bst.height(10)).toBe(2);
});

it("Height of value not in the tree", () => {
  const bst = new Tree([8, 3, 10, 1, 14, 6, 13, 4, 7]);
  expect(bst.height(19)).toBeFalse;
});

it("Check if balanced tree is balanced", () => {
  const bst = new Tree([8, 3, 10, 1, 14, 6, 13, 4, 7]);
  expect(bst.isBalanced()).toBeTrue;
});

it("Check if unbalanced tree is balanced", () => {
  const bst = new Tree([1, 2, 3, 4, 5]);
  bst.insert(87);
  bst.insert(74);
  bst.insert(24);
  bst.insert(99);
  expect(bst.isBalanced()).toBeFalse;
});

it("Rebalance an unbalanced tree", () => {
  const bst = new Tree([1, 2, 3, 4, 5]);
  bst.insert(87);
  bst.insert(74);
  bst.insert(24);
  bst.insert(99);
  bst.reBalance();
  expect(bst.isBalanced()).toBeTrue;
});
