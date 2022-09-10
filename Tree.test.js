const Tree = require("./Tree");

it("Has root property", () => {
  expect(new Tree([5])).toHaveProperty("root");
});

it("Root value from 1 element array", () => {
  expect(new Tree([5])).toHaveProperty("root", 5);
});
