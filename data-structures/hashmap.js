

let newMap2 = new Map([
    ['Gandalf', '1'],
    ['John', '2'],
    ['Tyrion', '3']
]);

newMap2.get('Gandalf');	// 1

newMap2.set('Gandalf', '1');	// 1

newMap2.delete('John');	// 2

newMap2.clear();	// undefined