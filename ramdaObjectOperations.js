const R = require('ramda');

console.log(R.add(2, 5));
console.log(R.subtract(2, 5));

const data = [
    {name: 'abc', value:10, achievements: ['A','B']}, 
    {name: 'xyz', value: 5, achievements: ['A','B','D','E']}, 
    {name: 'abc', value: 3, achievements: ['D','E']}, 
    {name: 'mno', value: 4, achievements: ['A','B','D']}, 
    {name: 'pqr', value: 8, achievements: ['A','B','C']}, 
    {name: 'Pqr', value: 4}
]

const getName = R.prop('name');
const getRank = R.pipe(R.prop('achievements'),R.length,R.defaultTo(0));

const findAllNames = R.map(getName,data)
console.log('findAllNames ',findAllNames);


const filterAbcName = R.propEq('name','abc')
const findAbc = R.filter(filterAbcName,data)

console.log("getNames ",findAbc)
const transformed = data.map(item => ({
    character: getName(item),
    rank: getRank(item)
}))

console.log('transformed ', transformed);

const greaterThan = R.curry((a,b) => a>b)

//R.__ is used to skip the argument
const greaterThan3 = greaterThan(R.__,3);

console.log(greaterThan3(6));

const list = [['name','Geralt'],['profession','Witcher']];

console.log(Object.fromEntries(list));

const word = ['W','it','cher'];
console.log(word.join());


  const obj1 =  { name: 'Matt', address: { street: 'Hawthorne', number: 22, suffix: 'Ave' }};
  const obj2 =    { address: { street: 'Pine', number: 33 }};

  const obj3 = {...obj1,...obj2};


  console.log(obj3);

  const obj4 = Object.assign({},obj1,obj2);

  console.log(obj4);
