/**
 * List: Used to organize data in alist like structure
 * More advanced that array in that we dont have to worry about the underlying implementation/operations
 * Effecient when not searching or if we don not need to put elements in sorted order
 * Some operations:
 * insert (function) Inserts new element after existing element
    append (function) Adds new element to end of list
    remove (function) Removes element from list
    front (function) Sets current position to first element of list
    end (function) Sets current position to last element of list
    prev (function) Moves current position back one element
    next (function) Moves current position forward one element
    currPos (function) Returns the current position in list
    moveTo (function) Moves the current position to specified 
 * /


/*
Lists..1
Write a function that inserts an element into a list only if the element to be inserted
is larger than any of the elements currently in the list. Larger can mean either greater
than when working with numeric values, or further down in the alphabet, when
working with textual values
Also delete;
Clear;
*/

class List {
    constructor() {
        this.list = [];
        this.size = 0;
        this.pos = 0;
    }

    insert(element, position) {
        if (position >= 0 && position <= this.size) {
            if(this.isLarger(element)){
                this.list.splice(position, 0, element);
                this.size++;
                return true;
            }
            return false;
        }
        return false;
    }

    displayList() {
        this.list.forEach(element => {
            console.log(element);
        });
    }

    delete(element){
        this.list.splice(this.list.indexOf(element), 1);
        this.size--;
    }

    isLarger(el){
        let marker = false;
        if(this.size > 0){
            this.list.forEach(element => {
                if(typeof element === 'number'){
                    el >= element ? marker = true : marker = false;
                }

                if(typeof element === 'string'){
                    el.length > element.length ? marker = true : marker = false;
                }
            });
            return marker;
        }else{
            return true;
        }
    }

    clear(){
        this.list = [];
        this.size = 0;
        this.pos = 0;
    }

}

let list = new List();
list.insert("cat", 0);
list.insert("mouse", 1);
list.insert("bat", 2);
list.insert("rhinocerous", 1);
list.insert("elepnt", 4);
list.delete("mouse");
list.displayList();