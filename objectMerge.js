const object1 = {
  name: 'Flavio',
location: {c:'c'}
}

const object2 = {
  age: 4,
  location: {a:'a',b:'b'}
}

const object3 = {...object1, ...object2 }
console.log(object3)

const heroes = ['Batman', 'Superman'];
const villains = ['Joker', 'Bane'];
let merge = {...heroes,...villains};
console.log("Merge",merge);