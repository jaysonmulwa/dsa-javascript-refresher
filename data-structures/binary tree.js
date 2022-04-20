/**
 * A tree is a nonlinear data structure that is used to store data in a hierarchical manner. A tree is made up of a set of nodes connected by edges.
 * In terms of search BST > link list
 * In terms of insert, delete BST > array
 * root node = level 0;
 * a binary tree is one where each node can have no more than twochildren
 * A binary search tree is a binary tree in which data with lesser values are stored in left nodes and data with greater values are stored in right nodes.
 * 
 * 
 * Types of BST searches
 * 1. Searh for a value
 * 2. Search for the minimum value
 * 3. Search for the maximum value
 * 
 */

class Node {
    constructor(data, left, right){
        this.data = data;
        this.left = left;
        this.right = right;
    }

    show = () => {
        return this.data;
    }
}

class BST {
    constructor(){
        this.root = null;
        this.insert = this.insert.bind(this);
        this.inOrder = this.inOrder.bind(this);
        this.preOrder = this.preOrder.bind(this);
        this.postOrder = this.postOrder.bind(this);
    }

    insert = (data) => {
        const node = new Node(data, null, null);
        if(this.root === null){
            this.root = node;
        } else {
            let current = this.root;
            let parent;
            while (true) {
                parent = current;
                if (data < current.data) {
                    current = current.left;
                    if (current == null) {
                        parent.left = n;
                        break;
                    }
                } else {
                    current = current.right;
                    if (current == null) {
                        parent.right = n;
                        break;
                    }
                }
            }
                     
        }
    }

    inOrder = (node) => {
        if(node !== null){
            this.inOrder(node.left);
            console.log(node.show());
            this.inOrder(node.right);
        }
    }

    preOrder = (node) => {
        if(node !== null){
            console.log(node.show());
            this.preOrder(node.left);
            this.preOrder(node.right);
        }
    }

    postOrder = (node) => {
        if(node !== null){
            this.postOrder(node.left);
            this.postOrder(node.right);
            console.log(node.show());
        }
    }	
}