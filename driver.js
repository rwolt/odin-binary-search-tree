const Tree = require("./Tree");

const randomArray = (length) => {
  let arr = [];
  while (length > 0) {
    arr.push(Math.floor(Math.random() * 99) + 1);
    length--;
  }
  return arr;
};

const bst = new Tree(randomArray(8));
console.log(`Balanced: ${bst.isBalanced()}`);
console.log(`Preorder: ${bst.preorder()}`);
console.log(`Postorder: ${bst.postorder()}`);
console.log(`Level Order: ${bst.levelorder()}`);
console.log(`Inorder: ${bst.inorder()}`);

//Unbalance the tree

for (let i = 0; i <= Math.floor(Math.random() * 10) + 1; i++) {
  const inserted = Math.floor(Math.random() * 99 + 1);
  console.log("Inserting value: " + inserted);
  bst.insert(inserted);
}

//Rebalance the tree

console.log(`Unbalanced: ${bst.isBalanced()}`);
console.log("Rebalancing tree...");
bst.rebalance();
console.log(`Balanced: ${bst.isBalanced()}`);
console.log(`Preorder: ${bst.preorder()}`);
console.log(`Postorder: ${bst.postorder()}`);
console.log(`Level Order: ${bst.levelorder()}`);
console.log(`Inorder: ${bst.inorder()}`);
