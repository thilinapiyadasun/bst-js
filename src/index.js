class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  setLeft(node) {
    this.left = node;
  }

  setRight(node) {
    this.right = node;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  insert(node) {
    if (this.root == null) {
      this.root = node;
    } else {
      this.insertNode(this.root, node);
    }
  }

  inorder(node) {
    if (node != null) {
      this.inorder(node.left);
      console.log(node.data);
      this.inorder(node.right);
    }
  }

  postrder(node) {
    if (node != null) {
      this.inorder(node.left);
      this.inorder(node.right);
      console.log(node.data);
    }
  }
  getRoot() {
    return this.root;
  }
}

const node1 = new Node(10);
const bst = new BST();
bst.insert(node1);

const node2 = new Node(2);
bst.insert(node2);
const node3 = new Node(20);
bst.insert(node3);
const node4 = new Node(15);
bst.insert(node4);
const node5 = new Node(14);
bst.insert(node5);
bst.inorder(bst.getRoot());
console.log(bst);
bst.postrder(bst.getRoot());
