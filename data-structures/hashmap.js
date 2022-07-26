

let map = new Map([
    ['Gandalf', '1'],
    ['John', '2'],
    ['Tyrion', '3']
]);

map.get('Gandalf');	// 1

map.set('Gandalf', '1');	// 1

map.delete('John');	// 2

map.has('Gandalf');	// false -- returns true if key exists

map.size // returns size of map

map.clear();	// undefined
