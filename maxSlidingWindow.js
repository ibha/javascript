//https://leetcode.com/problems/sliding-window-maximum
var maxSlidingWindow = function(nums, k) {
    let max=[];
    if(nums.length <= k) {
        var newarr = nums.sort((a,b) => b-a);
        max.push(newarr[0]);      
    } else {
      
        for(i=0;i<=nums.length-k;i++) {
        var newarr = nums.slice(i,k+i).sort((a,b) => b-a);
        
        max.push(newarr[0]);       
        }  
    }
    console.log(max);
    return max

  };

  maxSlidingWindow([1,3,-1,-3,5,3,6,7],3)
  maxSlidingWindow([9,11],2)
  maxSlidingWindow([9,10,9,-7,-4,-8,2,-6],5)