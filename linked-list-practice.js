class LinkedList {
  constructor() {
    this.head = null;
  }
}


class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}


LinkedList.prototype.printList = function() {
  let currentNode = this.head;
  while (currentNode.next) {
    console.log(currentNode.value + '->' + currentNode.next.value)
    currentNode = currentNode.next;
  }
  console.log(currentNode.value);
}

LinkedList.prototype.push = function(value) {
  let newNode = new Node(value, null);
  let currentNode = this.head;

  //Itereate through each item until the last one is reached.
  //The last item will be the only one with a next value of null.
  //If no head node, make the new node the head.
  if (this.head) {
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode
  }
  else {
    this.head = newNode
  }
}

LinkedList.prototype.pushToHead = function(value) {
  let newNode = new Node(value, this.head);
  this.head = newNode;
};

LinkedList.prototype.deleteNode = function(node){

  //If the target value is at the head, set the node that the head points to.
  //Deletes the current head node
  if(this.head == node){
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
    let currentNode = startNode
    while(currentNode.next) {
      if (currentNode.next.value == value) {
        this.deleteNode(currentNode.next);
      }
      if(currentNode.next){
        currentNode = currentNode.next;
      }
      else if (currentNode.value == value){
        this.deleteNode(currentNode);
      }
    }
    if(startNode.next){
      startNode = startNode.next;
    }
  }
}

LinkedList.prototype.copyToArray = function() {
  let currentNode = this.head
  let nodesArray = []
  while (currentNode){
    nodesArray.push(currentNode.value);
    currentNode = currentNode.next
  }
  return (nodesArray);
}

LinkedList.prototype.reverseLinkedList = function() {
  let reversedLinkedList = new LinkedList();
  let reversedNodesArray = this.copyToArray().reverse();
  console.log(reversedNodesArray);
  for (i = 0; i < reversedNodesArray.length; i++){
    reversedLinkedList.push(reversedNodesArray[i]);
  }
  return reversedLinkedList;
}
