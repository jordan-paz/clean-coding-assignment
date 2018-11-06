class LinkedList = {
  constructor() {
    this.head = null;
  }
}

class Node = {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

LinkedList.prototype.printList = function() {
  let currentNode = this.head;
  do {
    console.log(current.node)
    currentNode = currentNode.next;
  }
  while (currentNode.next);
}

LinkedList.prototype.push = function(value) {
  let newNode = new Node(value, null);
  let currentNode = this.head;

  //Itereate through each item until the last one is reached.
  //The last item will be the only one with a next value of null.
  while (currentNode.next != null) {
    currentNode = currentNode.next;
  }
  currentNode.next = newNode
}

LinkedList.prototype.pushToHead = function(value) {
  let newNode = new Node(value, this.head);
  this.head = newNode;
};

LinkedList.prototype.deleteNode = function(node){

    //If the target value is at the head, set the node that the head points to.
    //Deletes the current head node
    if(this.head.value == node){
       this.head = this.head.next;
    }

    else{
      let previousNode = this.head;
      let currentNode = previousNode.next;
      while(currentNode){
        if(currentNode == node){
          //Make the previous node point to the node that the current node points to.
          //Deletes the current node.
          previousNode.next = currentNode.next;
          break;
        }
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
    }
  }

LinkedList.prototype.removeDuplicates = function() {
  let startNode = this.head;
  while (startNode.next) {
    let value = startNode.value
    let currentNode = startNode;
    while(currentNode.next) {
      if (currentNode.next.value == value) {
        deleteNode(currentNode.next);
      }
      currentNode = currentNode.next;
    }
    startNode = startNode.next;
  }


let list1 = new LinkedList();
list1.push('Jordan');
list1.push('Chris');
list1.push('Emily');
list1.push('Jacob');
list1.push('Halee');
list1.push('Mia');
