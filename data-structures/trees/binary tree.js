/**
 * A tree is a nonlinear data structure that is used to store data in a hierarchical manner. A tree is made up of a set of nodes connected by edges.
 * 
 * ! Trees:
 * 1. Binary Search Trees
 * 2. Red-Black Trees
 * 3. B-Trees (An advanceed data structure - particularly good for maintaining databases on secondary (disk) storage)
 * 4. Augmented Trees [Interval trees, Order-statistic trees]
 * 5. van Emde Boas Trees
 * 6. Tries/ Radix trres/Retrieval trees.
 *
 * ! Binary tree criteria:
 * 1. Each node has 0 or 2 children
 * 2. Exactly one root node
 * 3. Exactly one path to any leaf node
 * 
 * In terms of search BST > linked list
 * In terms of insert, delete BST > array
 * root node = level 0;
 *
 *
 * ! Binary search tree:
 * - A binary search tree is a binary tree in which data with lesser values are stored in left nodes and data with greater values are stored in right nodes.
 * - Supports many dynamic-set operations, including: SEARCH, MINIMUM, MAXIMUM, PREDECESSOR, SUCCESSOR, INSERT, and DELETE. Thus, we can use a search tree both as a dictionary and as a priority queue
 * Types of BST searches
 * 1. Search for a value
 * 2. Search for the minimum value
 * 3. Search for the maximum value
 * 
 * Basic operations on a bst take time proportional to the height of the tree. 
 * For a complete binary tree with n nodes, such operations run in O (lg n) worst-case time
 * If the tree is a linear chain of n nodes worst-case is O(n)
 * 
 * 
 * ! Red-Black Trees 
 * If height of a bst is large, the set operations may run no faster than with a linked list.
 * Red-black trees are one of many search-tree schemes that are “balanced” in order to guarantee that basic dynamic-set operations take O(lg n) time in the worst case
 * A red-black tree is a binary search tree with one extra bit of storage per node: its color, which can be either RED or BLACK. 
 * By constraining the node colors on any simple path from the root to a leaf, red-black trees ensure that no such path is more than twice as long as any other, so that the tree is approximately balanced.
 * 
 *  * * Red Black Tree properties
 * 1. Every node is either red or black.
 * 2. The root is black.
 * 3. Every leaf (NIL) is black.
 * 4. If a node is red, then both its children are black.
 * 5. For each node, all simple paths from the node to descendant leaves contain the same number of black nodes.
 * 
 * * black-height of the node, denoted bh(x) - The number of black nodes in aany simple path from a node x down to the leaf (but not inluding x)
 * To preserve properties of red-black tree we can do rotations [left rotation, right rotation].
 * 
 * Are also known as balanced binary trees.
 * Other variations of balanced binary trres are:
 * - weightbalanced trees, k-neighbor trees, and scapegoat trees
 * - Splay trees (Self-adjusting trees - maintain balance without any explicit balance condition such as color)
 *
 * Skip lists provide an alternative to balanced binary trees. 
 * A skip list is a linked list that is augmented with a number of additional pointers. Each dictionary operation runs in expected time O(lg n) on a skip list of n items
 * 
 * !Augmented Trees.
 * 1. Order statistics trees. A redblack tree which also stores a vlue size in each node. size is the vnumber of nodes below it excluding the sentinel node.
 * 2. Interval trees. The value stored is an interval. the size value is the maximum value betwwen the range differences in the child nodes.
 * 
 * 
 * ! B-Trees.
 * - Are balanced binary search trees (similar to red-black trees) optimized for databse I/O oprations.
 * - The differ from red0black trees in the can have a large branching factor (more than 2 children per node).
 * - satellite information associated with a key, or the pointer to such satellite information, travels with the key whenever the key is moved from node to node
 * 
 * B + -tree, stores all the satellite information in the leaves and stores only keys and child pointers in the internal nodes, thus maximizing the branching factor of the internal nodes.
 * 
 * * B Tree Properties
 * - Every node x has the following attributes:
 * - - the x.n. keys themselves stored in nondecreasing order
 * - - x.leaf , a boolean value that is TRUE if x is a leaf and FALSE if x is an internal node
 * - All leaves have the same depth, which is the tree’s height h.
 * - Nodes have lower and upper bounds on the number of keys they can contain. We express these bounds in terms of a fixed integer t-2 called the minimum degree of the B-tree.
 * - - Every node other than the root must have at least t - 1 keys
 * - -  Every node may contain at most 2t - 1 keys. Its full if it has 2t - 1 keys.
 * - - //? The simplest B-tree occurs when t D 2. Every internal node then has either 2, 3, or 4 children, and we have a 2-3-4 tree
 * - Each internal node x also contains x.n + 1 pointers
 *
 */

//? Implementation
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

  insert = (data) => { //INSERT
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
            parent.left = node;
            break;
          }
        } else {
          current = current.right;
          if (current == null) {
            parent.right = node;
            break;
          }
        }
      }
    }
  };

  //Find specific value //TREE-SEARCH //ITERATIVE
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

  find_recursive = (node, value) => { //TREE-SEARCH //RECURSIVE
    if (node == null || value == node.value) return node;
    if (value < node.value) {
      return this.find_recursive(node.left, value);
    } else {
      return this.find_recursive(node.right, value);
    }
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

  inOrder = (node) => { //left, base, right
    if (node !== null) {
      this.inOrder(node.left);
      console.log(node.show());
      this.inOrder(node.right);
    }
  };

  preOrder = (node) => { //base, left, right
    if (node !== null) {
      console.log(node.show());
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  };

  postOrder = (node) => { //left, right, base
    if (node !== null) {
      this.postOrder(node.left);
      this.postOrder(node.right);
      console.log(node.show());
    }
  };

  remove = (data) => { //DELETE
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

//? Common topical areas:
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