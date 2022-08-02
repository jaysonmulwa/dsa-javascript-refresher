/**
 * A tree is a nonlinear data structure that is used to store data in a hierarchical manner. A tree is made up of a set of nodes connected by edges.
 * In terms of search BST > link list
 * In terms of insert, delete BST > array
 * root node = level 0;
 *
 * !Binary tree criteria:
 * 1. Each node has 0 or 2 children
 * 2. Exactly one root node
 * 3. Exactly one path to any leaf node
 *
 *
 * !Binary search tree:
 * A binary search tree is a binary tree in which data with lesser values are stored in left nodes and data with greater values are stored in right nodes.
 * Types of BST searches
 * 1. Searh for a value
 * 2. Search for the minimum value
 * 3. Search for the maximum value
 *
 */

class Node {
  constructor(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  }

  show = () => {
    return this.data;
  };
}

class BST {
  constructor() {
    this.root = null;
    this.insert = this.insert.bind(this);
    this.inOrder = this.inOrder.bind(this);
    this.preOrder = this.preOrder.bind(this);
    this.postOrder = this.postOrder.bind(this);
  }

  insert = (data) => {
    const node = new Node(data, null, null);
    if (this.root === null) {
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
  };

  //Find specific value
  find = (val) => {
    let current = this.root;
    while (current.data != val) {
      if (val < current.data) {
        current = current.left;
      }

      if (val > current.data) {
        current = current.right;
      }

      if (current.data == null) {
        return null;
      }
    }

    return current;
  };

  //find minimum
  min = () => {
    current = this.node;
    while (current.data != null) {
      current = current.left;
    }
    return current.data;
  };

  //find maximum
  max = () => {
    current = this.node;
    while (current != null) {
      current = current.right;
    }
    return current.data;
  };

  inOrder = (node) => {
    if (node !== null) {
      this.inOrder(node.left);
      console.log(node.show());
      this.inOrder(node.right);
    }
  };

  preOrder = (node) => {
    if (node !== null) {
      console.log(node.show());
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  };

  postOrder = (node) => {
    if (node !== null) {
      this.postOrder(node.left);
      this.postOrder(node.right);
      console.log(node.show());
    }
  };

  remove = (data) => {
    root = removeNode(this.root, data);
  };

  removeNode(node, data) {
    if (node == null) {
      return null;
    }

    if (data == node.data) {
      if (node.left == null && node.right == null) {
        return null;
      }
      // node has no left child
      if (node.left == null) {
        return node.right;
      }
      // node has no right child
      if (node.right == null) {
        return node.left;
      }
      // node has two children
      var tempNode = getSmallest(node.right);
      node.data = tempNode.data;
      node.right = removeNode(node.right, tempNode.data);
      return node;
    }

    if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    }

    if (data > node.data) {
      node.right = this.removeNode(node.right, data);
      return node;
    }
  }
}

/** 
 * !Depth first traversal
 * Stack
 * Iterative and recursive
 * Time: O(n)
 * Space: O(n)
 * */

//Iterative
const depthFirstValue = (root) => {
  let stack = [root];
  let result = [];
  while (stack.length > 0) {
    let node = stack.pop();
    result.push(node.show());
    if (node.right != null) {
      stack.push(node.right);
    }
    if (node.left != null) {
      stack.push(node.left);
    }
  }
};

//Recursive 
const _depthFirstValue = (root) => {
    if (root == null) return [];
    const leftValues = depthFirstValue(root.left);
    const rightValues = depthFirstValue(root.right);
    return [root.val, ...leftValues, ...rightValues];
}



/**
 * !Breadth-first Traversal
 * Queue
 * Iterative and recursive
 * Time complexity: O(n)
 * Space complexity: O(n)
 */

//Iterative
const breadthFirstValue = (root) => {
    let queue = [root];
    let result = [];
    while (queue.length > 0) {
        let node = queue.shift();
        result.push(node.show());
        if (node.left != null) {
            queue.push(node.left);
        }
        if (node.right != null) {
            queue.push(node.right);
        }
    }
    return result; //we retur object in the order in which they leave the queue.
}

//!Tree includes
//dfs
const treeIncludes = (root, target) => {
  if (root.value == target) return true;
  if (root == null) return false;
  let leftValues = treeIncludes(root.left, target);
  let rightValues = treeIncludes(root.right, target);
  return (leftValues || rightValues) ? true : false;
}

//Iterative bfs
const _treeIncludes = (root, target) => {
  let queue = [root];
  while (queue.length > 0) {
    let node = queue.shift();
    if (node.value == target) return true;
    if (node.left != null) {
      queue.push(node.left);
    }
    if (node.right != null) {
      queue.push(node.right);
    }
  }
  return false;
}

//!Tree sum
//also has iterative and recursive
const treeSum = (root) => {
  if (root == null) return 0;
  return root.value + treeSum(root.left) + treeSum(root.right);
}



//!Max path sum
//time complexity: O(n)
//space complexity O(n)
const maxPathSum = (root) => {
  if (root == null) return -Infinity;
  if (root.left == null && root.right == null) return root.value;
  let left = maxPathSum(root.left);
  let right = maxPathSum(root.right);
  let max = Math.max(left, right);
  return root.value + max;
}