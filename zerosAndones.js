const findOnesAndZeros = (arr) =>{

    sum = arr.reduce((prev,curr) => prev+curr);
    console.log(sum);
    console.log(`Number of ones = ${sum}`);
    console.log(`Number of zeros = ${arr.length - sum}`);

}


const arr = [1,0,1,0,1,1,0,1,0,1];
findOnesAndZeros(arr);