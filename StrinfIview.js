
function reverseSentence(str) {
    arrayOfString=str.split(' ');
    var newarrayOfString=[];
    arrayOfString.forEach((arr)=>{
        //Convert arr to array of characters, then reverse and then join to make the word back again
        newarrayOfString.push(Array.from(arr).reverse().join(''));
    })
    console.log(newarrayOfString);
    
}

reverseSentence("Welcome to this Javascript Guide!");