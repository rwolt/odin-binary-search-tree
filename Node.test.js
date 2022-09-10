const Node = require("./Node");

it("Node with root value", () => {
  expect(new Node(5)).toEqual({
    left: null,
    data: 5,
    right: null,
  });
});

it("Root is undefined", () => {
  expect(new Node()).toEqual({
    left: null,
    data: undefined,
    right: null,
  });
});
