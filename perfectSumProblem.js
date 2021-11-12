const perfectSum = (arr,total) => {
    for(i=0;i<arr.length;i++) {
        num = arr[i];
        sum = num;
        let finalarr = [];
        let temparr=[];
        temparr.push(num);
        for(j=i+1;j<arr.length;j++) {
            while(sum<total) {
                temparr.push(arr[j]);
                sum = num + arr[j];
            }
                if(sum==total) {
                    finalarr.push(temparr);

                }
            }
        }
    }


let arr = [2, 3, 5, 6, 8, 10];
let sum = 10
perfectSum(arr,sum);