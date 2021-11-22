var arr1 = "john".split('');
var arr2 = arr1.reverse();
console.log(arr1,arr2);

var arr = [
    {name:"tiya", age:7},
    {name:"ibha", age:40},
    {name:"chiya", age:10},
    {name:"navdeep", age:47},
    ]

newarr = arr.sort((a,b) => b.age-a.age);
console.log("newarr ",newarr,' arr ',arr);
newarr1 = arr.filter((a)=>a.age>10);
console.log("newarr1 ",newarr1,' arr ',arr);

num = 32243
arr = Array.from(num);
console.log("Num ",arr.reverse().join(''))