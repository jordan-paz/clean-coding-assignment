const readline = require('readline-sync');

class HashTable{
  constructor(size){
    this.data = [];
    this.size = size;
  }
  getHash(key){
  var hash = 0, i, chr;
  for (i = 0; i < key.length; i++) {
    chr = key.charCodeAt(i);
    hash = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }
  console.log(hash)
  return hash;
};
  insert(item){
    this.data[this.getHash(item.key)] = item;
  }
  get(key){
    return this.data[this.getHash(key)]
  }
}

//QUESTION 6//

let customers = new HashTable(1000);

customers.addCustomers = function (name, address, phoneNumber){

  if(name && address && phoneNumber){
    let customer = {
      key: name,
      address: address,
      phoneNumber: phoneNumber
    }
    this.insert(customer);
  }
  else{
    let userInput = readline.question("Would you like to add a customer? Enter 'y' to continue. ");
    while (userInput == 'y'){
      let customer = {
        name: readline.question("Enter name "),
        address: readline.question("Enter address "),
        key: readline.question("Enter phone number ")
      }
      this.insert(customer)
      userInput = readline.question("Would you like to add another customer? Enter 'y' to continue. ");
    }
  }
}

customers.lookUpCustomers = function() {
  let userInput = readline.question("Would you like to look up a customer? Enter 'y' to continue. ");
  while (userInput == 'y'){
    let phoneNumber = readline.question("Enter phone number ");
    console.log(this.get(phoneNumber));
    userInput = readline.question("Would you like to look up another customer? Enter 'y' to continue. ");
  }
}

customers.addCustomers();
customers.lookUpCustomers();

//QUESTION 7//

let inventoryHashTable = new HashTable(1000);

class Product{
  constructor(name, amount){
    this.key = name;
    this.amount = amount;
  }
}

inventoryHashTable.createProducts = function(name, amount) {
  if (name && amount) {
    this.insert({
      key: name,
      amount: amount
    })
  }
  else {
    let userInput = readline.question("Create a new product? Enter 'y' to continue. ");
    while(userInput == 'y'){
      let newProduct = {
        key: readline.question("Enter product name "),
        amount: parseInt(readline.question("Enter initial inventory quantity "))
      }
      this.insert(newProduct);
      userInput = readline.question("Would you like to create another new product? Enter 'y' to continue. ");
    }
  }
}

inventoryHashTable.editInventory = function(name, amountChanged) {
  if(name && amountChanged){
    let newAmount = inventoryHashTable.data[this.getHash(name)].amount + amountChanged;
    this.insert({
      key: name,
      amount: newAmount
    })
  }
  else{
    let userInput = readline.question("Edit inventory? Enter 'y' to continue.");
    while(userInput == 'y'){
      let name = readline.question("Enter product name to edit the inventory ");
      let amountChanged = parseInt(readline.question("Enter amount to add or remove. Include a (-) if removing "))
      let oldAmount = this.get(name).amount;
      let newAmount = oldAmount + amountChanged;
      this.insert({
        key: name,
        amount: newAmount
      })
      userInput = readline.question("Edit inventory of another product? Enter 'y' to continue. ");
    }
  }
}

inventoryHashTable.seeInventory = function(name) {
  if(name) {
    console.log(this.get(name))
  }
  else {
    let userInput = readline.question("Check inventory of a product? Enter 'y' to continue ");
    let name = ''
    while(userInput == 'y'){
      name = readline.question("Enter product name to see inventory. ");
      console.log(this.get(name).amount);
      userInput = readline.question("Search for another product? y/n ");
    }
  }
}

inventoryHashTable.createProducts();
inventoryHashTable.editInventory();
inventoryHashTable.seeInventory();


//QUESTION 8//

class Paper{
  constructor(title, publisher, publishDate){
    this.title = title;
    this.publisher = publisher;
    this.publishDate = publishDate;
  }
}

let archive = new HashTable(100)

archive.insertPaper = function(newPaper){
  this.data[this.getHash(newPaper.publisher + newPaper.publishDate)] = newPaper;
}
archive.addPaper = function(title, publisher, publishDate){
  if(title && publisher && publishDate){
    let newPaper = new Paper(title, publisher, publishDate);
    this.insertPaper(newPaper);
  }
  else{
    let userInput = readline.question("Add a newspaper? Enter 'y' to continue. ");
    while(userInput == 'y'){
      let title = readline.question("Enter title ");
      let publisher = readline.question("Enter publisher ");
      let publishDate = readline.question("Enter publish date ");
      let newPaper = new Paper(title, publisher, publishDate);
      this.insertPaper(newPaper);
      userInput = readline.question("Add another newspaper? Enter 'y' to continue. ");
    }
  }
}
archive.search = function(){
  let userInput = readline.question("Searh for a newspaper? Enter 'y' to continue. ");
  while(userInput == 'y'){
      let publisher = readline.question("Enter publisher ");
      let publishDate = readline.question("Enter publish date ");
      console.log (this.data[this.getHash(publisher + publishDate)])
  }
  userInput = readline.question("Search for another paper? Enter 'y' to continue. ");
}


archive.addPaper();
archive.search();
