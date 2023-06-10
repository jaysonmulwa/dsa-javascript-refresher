let set = new Set([1, 2, 3, 4, 5]);
console.log(set.has(1));
set.delete(1);
set.add(6);
set;

debugger;

let map = new Map();
map.set("name", "John");
map.set("age", 25);
console.log(map.get("name"));
console.log(map.has("name"));

//dfs = recursively
const dfs = (root) => {
  if (root === null) {
    return;
  }
  console.log(root.value);
  dfs(root.left);
  dfs(root.right);
};

//bfs = queue
const bfs = (root) => {
  let queue = [];
  queue.push(root);
  while (queue.length > 0) {
    let node = queue.shift();
    console.log(node.value);
    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }
  }
};
