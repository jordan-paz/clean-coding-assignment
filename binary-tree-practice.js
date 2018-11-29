class Node
{
  constructor(data)
  {
      this.data = data;
      this.left = null;
      this.right = null;
  }
}

class BinarySearchTree
{
  constructor()
  {
    this.root = null;
  }

  insert(data) {
    let newNode = new Node(data);
    if (this.root == null) {
      this.root = newNode
    }
    else {
      this.insertNode(this.root, newNode)
    }
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left == null) {
        node.left = newNode;
      }
      else {
        this.insertNode(node.left, newNode)
      }
    }
    else {
      if (node.right == null) {
        node.right = newNode;
      }
      else {
        this.insertNode(node.right, newNode)
      }
    }
  }

  search(node, value) {
    if (node == null) {
      return null
    }
    else if (value > node.data) {
      return this.search(node.right, value);
    }
    else if (value < node.data) {
      return this.search(node.left, value);
    }
    else {
      return node;
    }
  }

  distanceFromChild(ancestor, child) {
    let recursiveCount = function(node1, node2, steps) {
      if (node1 == null) {
        return null
      }
      else if (node2.data > node1.data) {
        return recursiveCount(node1.right, node2, steps + 1);
      }
      else if (node2.data < node1.data) {
        return recursiveCount(node1.left, node2, steps + 1);
      }
      else {
        return steps;
      }
    }
    let ancestorNode = this.search(this.root, ancestor);
    let childNode = this.search(this.root, child);
    return recursiveCount(ancestorNode, childNode, 0)
  }

  findCommonAncestor(node, value1, value2) {
    if (
      (this.search(node.right, value1) && this.search(node.left, value2))
      ||
      (this.search(node.left, value1) && this.search(node.right, value2))
    ){
      return node;
    }
    else if (value1 > node.data || value2 > node.data) {
      return this.findCommonAncestor(node.right, value1, value2);
    }
    else {
      return this.findCommonAncestor(node.left, value1, value2);
    }
  }

  distanceBetweenNodes(value1, value2) {
    //if value1 is an ancestor to value2
    if (this.distanceFromChild(value1, value2)) {
      return this.distanceFromChild(value1, value2);
    }
    //or if value2 is an ancestor to value1
    else if (this.distanceFromChild(value2, value1)){
      return this.distanceFromChild(value2, value1);
    }
    else{
      let commonAncestor = this.findCommonAncestor(this.root, value1, value2)
      return (this.distanceFromChild(commonAncestor, value1) + this.distanceFromChild(commonAncestor, value2))
    }
  }
}

let tree = new BinarySearchTree();

tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(8);
tree.insert(12);
tree.insert(4);
tree.insert(16);
tree.insert(6);

console.log(tree.distanceBetweenNodes(12, 8))
