const object1 = { a: 1, b: 2, c: 3 };

console.log(Object.fromEntries(Object.entries(object1).map(([key,value])=> [key,2*value])));