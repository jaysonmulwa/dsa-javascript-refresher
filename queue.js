/**
 * Golden rule: is used to store data in the order which they occur
 * Inserted at the end, removed from the front
 * Can be used to sort: Radix sort.
 * Can be used i Priority queues.
 * 
 * Array-Based implementation:
 */
class Queue {
    constructor(){
        this.queue = [];
        this.size = 0;
        this.pos = 0;
    }

    enqueue(element){
        this.size++;
        this.queue.push(element);
    }

    dequeue(){
        this.queue.shift();
        this.size--;   
    }

    length(){
        return this.size;
    }

    clear(){
        this.queue = [];
    }

    front(){
        return this.queue[0];
    }

    back(){
        return this.queue[this.size-1];
    }

    what(){
        return this.queue;
    }
}

let q = new Queue();
q.enqueue("Mary");
q.enqueue("had");
q.enqueue("a");
q.enqueue("little");
q.enqueue("lamb");

q.dequeue();
console.log(q.what());

