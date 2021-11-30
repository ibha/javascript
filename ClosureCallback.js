var funcs = [];
// let's create 3 functions
for (let i = 0; i < 3; i++) {
  // and store them in funcs
  funcs[i] = function() {
    // each should log its value.
    console.log("My value: " + i);
  };
}
for (var j = 0; j < 3; j++) {
  // and now let's run each one to see
  funcs[j]();
}

obj1={
    emp:"123",
    firstname:"ibha"
}
obj2=obj1;
obj3=Object.assign({},obj1,{lastname:"gandhi"},{salary:"NaN"});
console.log(obj1);
console.log(obj2);
console.log(obj3);


function test() {
    return function(){
        return dispatchEvent("abc")
    }
} 
function dispatchEvent(abc) {
    console.log(abc);
}
bool = test()();

console.log(bool);

var arr = [
    {name:"tiya", age:7},
    {name:"ibha", age:40},
    {name:"chiya", age:10},
    {name:"navdeep", age:47},
    ]
arr1 = arr.filter((data)=>data.age>10);
console.log("arr ",arr1);    


a={food:{veg:"cheese",nonveg:"chicken"},test:"abc"};
b = Object.assign({},a) 

b.food.veg = "pasta"
b.test = "btest";
console.log(a); 

let dragon = 
name => 
size =>
element=>name + ' is a ' + size + ' dragon '+element+'!';

console.log(dragon('inja')('20')('lightning'))

