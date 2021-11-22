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

    console.log(newArr);

};
let numbers = [1,2,1,3,2,5];
findSingleNumbers(numbers);