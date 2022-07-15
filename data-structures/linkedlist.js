/**
 * Shortcomings of Arrays
 * The main problem with using JavaScript arrays, however, is that arrays in JavaScript are implemented as objects, causing them to be less efficient than arrays built in languages such as C++ and Java.
 * When you determine that the operations performed on an array are too slow for practical use, you can consider using the linked list as an alternative data structure.
 * 
 * An Object-Based Linked List Design.
 */

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList {

    constructor(){
        this.head = new Node("head");
        this.size = 0;
        this.next = null;
    }

    

    find = (item) => {
        var currNode = this.head;
        while (currNode.value != item) {
            currNode = currNode.next;
        }
        return currNode;
    }

    findPrev = (item) => {
        let current = this.head;
        while(current.next !== null && current.next.value !== item){
            current = current.next;
        }
        return current;
    }

    insert = (item, position) => {
        let newNode = new Node(item);
        let currNode = this.find(position);
        newNode.next = currNode.next;
        currNode.next = newNode;
        this.size++;
    }
    
    remove = (item) =>{
        this.previousNode = this.findPrev(item); 
        this.previousNode.next = this.previousNode.next.next;
    }

    display = () =>{
        let current = this.head;
        while(current.next !== null){
            console.log(current.next.value);
            current = current.next;
        }
    }

    advance = (val, n) => {
        this.current = this.find(val);
        counter = 0;
        while(this.current.next != null && counter < n){
            counter++;
            this.current = this.current.next;
        }

        if(counter == n){
           //this
        }
    }

}


let LL = new LinkedList();
LL.insert("One", "head");
LL.insert("Two", "One");
LL.insert("Three", "Two") 
LL.insert("Four", "Three") 
LL.remove("Three");
LL.display();
