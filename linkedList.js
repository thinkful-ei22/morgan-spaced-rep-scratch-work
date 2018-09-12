'use strict';

class _Node {
  constructor(value, next=null){
    this.value = value;
    this.next = null;
  }
}


class LinkedList {
  constructor(){
    this.head = null;
  }

  insertFirst(value){
    const newNode = new _Node(value);

    if(!this.head){
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  removeFirst(){
    if(this.head){
      this.head = this.head.next;
    } else {
      this.head.value = null;
      this.head.next = null;
    }
  }

  insertQuestion(value){
    const newNode = new _Node(value);

    if(!this.head || this.head.value === 'EMPTY'){
      this.head = newNode;
    } else {
      let prevNode = this.head;
      let currentNode = this.head.next;
      while(currentNode !== null && currentNode.value !== 'EMPTY'){
        prevNode = currentNode;
        currentNode = prevNode.next;
      }

      newNode.next = currentNode ? currentNode.next : null;
      prevNode.next = newNode;
    }
  }

  insertLast(value){
    const newNode = new _Node(value);

    if(!this.head){
      this.head = newNode;
    } else {
      let currentNode = this.head;
      let nextNode = this.head.next;
      while(currentNode.next !== null){
        currentNode = nextNode;
        nextNode = currentNode.next;
      }

      currentNode.next = newNode;
    }
  }

  insertEmpty(){
    const newNode = new _Node('EMPTY');
    if(!this.head){
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while(currentNode.next !== null){
        currentNode = currentNode.next;
      }

      currentNode.next = newNode;
    }
  }
}

module.exports = LinkedList;

const list = new LinkedList();

list.insertLast(8);
list.insertLast(9);
list.insertLast(10);
// list.insertLast({url: 'teseturl', country:'canada'});
// list.insertLast({url: 'teseturl2', country:'united states of america'});
// list.insertLast({url: 'teseturl3', country:'mexico'});

console.log('TESTING INSERT LAST!!!!!!!!!!! SHOULD BE 8 => 9 -> 10     ',JSON.stringify(list, null, 2));