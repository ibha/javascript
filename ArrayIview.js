console.log(t);
var t = "var";


var arrayNum=[1,2,3];
arrayNum[5]=5;
console.log("arrayNum",arrayNum);
arrayNum[3]=6;
console.log("arrayNum",arrayNum);

//Double each element by 2 
var arrayOrig=[1,2,3];
arrayOrig.reduce((prev,next,index,arrayOrig)=>
{
    arrayOrig[index] = 2 * arrayOrig[index]
});
console.log("arrayOrig",arrayOrig);

//Output of following
let arrayOfLetters = ['a','b','c','d','e','f'];
const anotherArrayOfLetters = arrayOfLetters;
arrayOfLetters[3]='D';
arrayOfLetters = []; //breaks the reference and creates new array
arrayOfLetters[4]='E';
console.log("anotherArrayOfLetters",anotherArrayOfLetters);

//Unique values of array
const arrOfNum = [1, 2, 2, 4, 5, 6, 6];
console.log("getUniqueValues",getUniqueValues(arrOfNum)); 
function getUniqueValues(arrOfNum) {
    const set= new Set(arrOfNum);
    return set;
  }

  //Array destructuring
  const address = ["583, Margaret Street", "LOS ANGELES, CA", "USA"];
  let [apartment,city,country] = address;
  console.log(apartment," , ",city," , ",country)

  //Array push and unshift
  const arrOfNumPush = [1, 2, 2, 4, 5, 6, 6];
  arrOfNumPush.push(9);
  console.log("arrOfNumPush ",arrOfNumPush);
  const arrOfNumUnShift = arrOfNumPush
  arrOfNumUnShift.unshift(14);
  console.log("arrOfNumPush ",arrOfNumUnShift);

    //Array pop and shift
    const arrOfNumPop = [1, 2, 2, 4, 5, 6, 6];
    const popNumber = arrOfNumPop.pop();
    console.log("arrOfNumPop ",arrOfNumPop);
    const arrOfNumShift = arrOfNumPop;
    arrOfNumShift.shift();
    console.log("arrOfNumShift ",arrOfNumShift);

    //Reverse of array
    let myArray = [1, 2, 3, 4];
    const reverseDoubleArray = myArray.map((element)=>element*element).reverse();
    console.log("reverseDoubleArray ",reverseDoubleArray);

    function func(x){
        console.log(typeof x, arguments.length);
        }
        func(); //==> "undefined", 0
        func(7); //==> "number", 1
        func("1", "2", "3"); //==> "string", 3

        function findUniqueNumbers(duplicateNumbers) {
          var uniqueNumbers = new Set(duplicateNumbers);
          console.log("uniqueNumbers ",uniqueNumbers);
        }
        
        arr = [ "abc", "xyz", "abcd", "bcd", "abc" ];
        arr.sort();
        console.log("arr ",arr);
        sortedArray = new Set(arr.sort());
        console.log("sortedArray ",sortedArray);

        
        function convertNumberToString(num) {
          var strConverted = num.toString();
          console.log(strConverted);
        }
        
        function isArray(arr) {
          console.log("It is array ",arr.constructor === Array);
        }
        
        function duplicate(arr) {
          console.log(arr.concat(arr));
        }



        
        findUniqueNumbers([1,2,2,3,3,4,5,1,2,4]);
        convertNumberToString(234);
        isArray([2,4,3,5,6]);
        duplicate([1, 2, 3, 4, 5]);