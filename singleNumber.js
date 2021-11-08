/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findSingleNumbers = function(nums) {
    let m = new Map();
    nums.forEach((num)=> {
        let value = m.get(num);
        if(!value) value=0;
        m.set(num,value+1);
    })
    console.log(m);
    let newArr = [];
    for (const [key,value] of m.entries()) {
        if(value == 1) {
            newArr.push(key);
        }
    }
   // let newArr = [...m.entries()].sort((a,b) => b[1]-a[1]).splice(2);
    console.log(newArr);
/*    let newArr = [...m.entries()].filter(([key,value])=>value==1)
    let convertToObj = Object.fromEntries(newArr);
    let arr = [];
    for(obj in convertToObj) {
        arr.push(Number(obj));
    }
return arr;*/
};
let numbers = [1,2,1,3,2,5];
findSingleNumbers(numbers);