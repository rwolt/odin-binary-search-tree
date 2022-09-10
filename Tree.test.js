const Tree = require("./Tree");

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

it("Unsorted array with duplicated", () => {
  expect(new Tree([7, 1, 6, 2, 3, 5, 4])).toHaveProperty("root.data", 4);
});
