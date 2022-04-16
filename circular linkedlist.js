/**
 * when created, has its head node’s next property point back to itself
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
        this.head.next = this.head;
        this.size = 0;
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

}


let LL = new LinkedList();
LL.insert("One", "head");
LL.insert("Two", "One");
LL.insert("Three", "Two") 
LL.insert("Four", "Three") 
LL.remove("Three");
LL.display();
