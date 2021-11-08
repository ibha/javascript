//First Way
/*const patternMatching = (str,matchStr) => {
    let arrays = Array.from(str);
    let strArr=[];
    let count = 0;
    arrays.forEach((arr,index)=>{
        if(/[aeiou]/.test(arr) === true) {
            strArr.push(0);
        } else {
            strArr.push(1);
        }
    })
    let newStr = strArr.join('');
    //0101011
    //010


    for(i=0;i<=newStr.length;i++) {
        for(j=0;j<=matchStr.length;j++) {

            if(matchStr[j] !== newStr[i+j]) {
                break;
            }
            if(j==matchStr.length-1) {
                count++;
            }
        }
    }
   console.log(count);
}*/

//Alternate Way
const patternMatching = (str,matchStr) => {
    let count = 0;
    str = str.replace(/['aeiou']/gi,0)
          .replace(/['bcdfghjklmnpqrstvwxyz']/gi,1)
    for(i=0;i<str.length-matchStr.length;i++) {
        substringLen = str.substring(i,matchStr.length+i)
        if(substringLen === matchStr ) {
            count++;
        }
    }
    console.log("Count ",count);
}

let matchBeginningHello = (str) =>{
    if(/^hello/.test(str) === true ) {
        console.log("String starts from Hello");
    } else console.log("String doesn't starts from Hello");;
}

var str = "amazing";
matchStr = "010"
patternMatching(str,matchStr);

var helloStr = "helloTiya";
var notHelloStr = "tiyaHello"
var randomStr = "tiya"
matchBeginningHello(helloStr);
matchBeginningHello(notHelloStr);
matchBeginningHello(randomStr);