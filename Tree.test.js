const Tree = require("./Tree");

it("Null root of BST", () => {
  expect(new Tree([])).toHaveProperty("root", null);
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
