//This has multiple Array Operations. 
//The call to functions are disabled at the bottom
//Uncomment any function call to see its functionality

function numberDivisibleBy() {
    for(var i=0;i<=99;i++){
        console.log(i+1);
        var divisibleByThree = (i+1)%3;
        var divisibleByFive = (i+1)%5;
        if(divisibleByThree == 0 && divisibleByFive == 0)
        {
            console.log("Number is divisible by 15");
            console.log("Number is divisible by 5");
            console.log("Number is divisible by 3");
            continue;
        } else if (divisibleByThree == 0) {
            console.log("NNNNNumber is divisible by 3");
        } else if (divisibleByFive == 0) {
            console.log("nnnNumber is divisible by 5");
        }
    
    }
}

//check even numbers
function evenNumber(num) {
    if (num%2 == 0) {
        console.log("Number is even");
    } else {
        console.log("Number is odd");
    }
}
product = 1;
function factorial(num) {
    product = product * (num--);
    if(num>2) {
        factorial(num);
    } else {
        console.log(product);
        return product;
    }
}
function leapYear(num) {
    if(num%400==0) {
        console.log("Leap Year");
    } else if(num%4==0 && !(num%100)==0) {
        console.log("Leap Year");
    } else {
        console.log("Not Leap Year");
    }
}
fibonacciArray=[0];
prevNumber=0;
thisNumber=1;
index=0;
function fibonacci(num) {
    fibonacciArray.push(thisNumber);
    prev=prevNumber; //0
    prevNumber=thisNumber;//1
     thisNumber=thisNumber+prev;//1
    index++;//1
    if(index < num) {
        fibonacci(num);
    } else {
        fibonacciArray.map(val=>console.log(val));
    }
}

function palindrome(str) {

    var strArray=Array.from(str);
    var strNewArray=strArray.reverse();
    var newStr = strNewArray.join('');

    if(str == newStr)
     {
        console.log("Its Palindrome");
    } else console.log("Its not Palindrome");
}

function primeNumber(num) {
    if(num%2==0) {
        console.log("Not prime");
    } else {
        loop = Math.round(num/2);
        for(i=3;i<loop;i++) {
            if(num%i==0) {
         
                console.log("Not Prime");
                break;
            } else {
                continue;
            }
        }
        if(i==loop){
        console.log("Prime");
        }

    }
}

function checkForEquality() {
    arr = [1,1,1,4,1,1,1,1];
    for(i=1;i<arr.length;i++) {
        if(arr[i] == arr[i-1]) {
            continue;
        } else {
            break;
        }
    }
    console.log("i ",i);
    console.log("arr.length ", arr.length);
    if(i==arr.length) {
        console.log("Equal");
    } else {
        console.log("Not Equal");
    }
}
function addArrayElements(arr) {
    sum=arr.reduce((prev,curr)=>prev+curr);
    console.log("sum",sum);
}
function productArrayElements(arr) {
    product=arr.reduce((prev,curr)=>prev*curr);
    console.log("product ",product);
}

function tableOfNumber(num) {
    for (i=0;i<=10;i++) {
        console.log(num," * ",i," = ",num*i);
    }
}

function convertDays(num) {
    months=Math.floor(num/30);
    days=num-30*months;
    console.log("Months: ",months," Days: ",days);
}

//Armstrong number is when sum of cube of all digits is equal to number


function armstrongNumber(num) {
    sum=0;
    newNum=num;
    while(newNum != 0) {
        //371
        n=newNum%10; //1,7
        sum=sum+(n*n*n); //1
        newNum=Math.trunc(newNum/10);
    }
    if(sum==num){
        console.log("Number is armstrong");
    } else {
        console.log("Number is not armstrong");
    }
}

function reverseString(str) {
    strArray=Array.from(str);
    revstrArray=strArray.reverse();
    console.log(revstrArray.join(''));

}
//swap the adjacent elements by comparison
function bubbleSort(arr) {
    for(n=0;n<arr.length;n++) {
        for(i=n;i<arr.length;i++) {        
            if(arr[i]>arr[i+1]) {//0,1
                [arr[i],arr[i+1]]= [arr[i+1],arr[i]]; //swap two elements by destructuring
            }
        }
    }
    
    console.log("Sorted Array ",arr);
}

function insertionSort(arr)
{
    console.log(arr);
    for (var i = 1; i < arr.length; i++) //5
    {
        // a temporary copy of the current element
        var tmp = arr[i]; //2
        var j;

        // find the position for insertion
        for (j = i; j > 0; j--) //1
        {
            if (arr[j - 1] < tmp) //arr[0] (6) < 2
                break;
            // shift the sorted part to right
            arr[j] = arr[j - 1]; //arr[2]=6
        }
        console.log("j ",j);
        console.log("arr ",arr);
        // insert the current element
        arr[j] = tmp; //
    }
    console.log(arr);
}

function swapTwoElementsWithoutTemp(a,b) {
    [a,b]=[b,a];
    console.log("a is ",a);
    console.log("b is ",b);
}

//Set displays unique values
function setDisplay()  
{  
    var set = new Set();    
    set.add("jQuery");    
    set.add("AngularJS");    
    set.add("Bootstrap");  
    set.add("AngularJS");  
    for (let elements of set) {    
    console.log(elements);    
    }     
}  

//binarySearch has tme complexity of O(n log n)
function binarySearch(arr,num) {
    if(num<arr[0] || num>arr[arr.length-1]) {
        console.log("Number not found");
    } else {
        while(arr.length>1) {
            n=Math.ceil(arr.length/2)
            if (num==arr[n]){
                console.log("Found the number")
                return
            } else if(num>arr[n]) {
                arr = arr.slice(n);
                console.log("above ",arr);
            } else {
                arr = arr.slice(0,n);
                console.log("below ",arr);
            } 
        }
    }
    console.log("Number not found");
}

function multiply(num) {
    return function(num1) {
        return num*num1;
    }
}
var y = 1;
if (function f() {}) {
  y += typeof f;
}
console.log(y);

var k = 1;
if (1) {
  eval(function foo() {});
  k += typeof foo;
}
console.log(k);

var k = 1;
if (1) {
  function foo() {};
  k += typeof foo;
}
//console.log(k);

function mul(num1) {
    return function(num2) {
        return function(num3) {
            return num1*num2*num3;
        }
    } 
}

function createBase(num){
    return function(num2) {
        console.log(num+num2);

    }
}

/*emp1 object got company as prototype property. 
delete operator doesn't delete prototype property.
However, we can delete company property directly from 
Employee object using delete Employee.company or we can also 
delete from emp1 object using __proto__ property 
delete emp1.__proto__.company.*/

var Employee = {
    company: 'xyz'
  }
  var emp1 = Object.create(Employee);
  delete emp1.company
  console.log(emp1.company); //output 'xyz'

//deletes object properties but x is primitive type so delete will not have any affect
var output = (function(x) {
    delete x;
 //   return x;
    var obj1={
        name:"Ibha",
        lastName:"Gandhi"
    }
    delete obj1.name;
    console.log(obj1.name)
    return x;
  })(0);
  
  console.log(output); //0
  

function localScope(){
    var private=3;
    return function() {
        return private;
    }
}
scope=localScope()();//localScope() returns inner anonymous function and second () executes it
//priv=scope.getPrivate();
console.log(scope);
console.log(new Boolean(""));

var addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27

console.log(mul(2)(3)(4));
//console.log(multiply(2)(3));
//console.log(typeof function f(){});
//setDisplay();  
//binarySearch([2,4,5,6,8,9,13,15],16);
//swapTwoElementsWithoutTemp(6,8)
//insertionSort([6,2,7,4,5]);
//bubbleSort([6,2,7,4,5]);
//reverseString("uhsnamiH");
//armstrongNumber(371);
//armstrongNumber(153);
//armstrongNumber(20);
//convertDays(265);

//tableOfNumber(3);
//productArrayElements([3,6,2]);
//addArrayElements([6,8,9,1]);
//checkForEquality();
//primeNumber(9);
//primeNumber(43);
palindrome("123454321");

//fibonacci(5);

//factorial(4);
//leapYear(1908);

//evenNumber(65);
//numberDivisibleBy();