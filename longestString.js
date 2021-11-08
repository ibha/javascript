
//This is comment
/*var lengthOfLongestSubstring = function(s) {

    var arr = Array.from(s);
    var newArr = [];
    for(var a in arr) {
        if(newArr.findIndex((elem)=>elem==arr[a]) == -1) {
            newArr.push(arr[a])
        } else return newArr.join('');
    }

};

var s = "pwwkew";
var m = new Map();
var str = ""
while(str.length < s.length) {
    var arrlen = lengthOfLongestSubstring(s.substring(str.length));
    str = str + arrlen;
    if(arrlen?.length) {
        m.set(arrlen,arrlen.length);
    }
}
var sortedMap = [...m.entries()].sort((a,b)=>b[1]-a[1])

console.log(sortedMap[0][1]);*/

var lengthOfLongestSubstring = function(s) {
    var m = new Map();
    var str = ""
    if(s.length==0) {
        console.log(0);
    } else {
        while(str.length < s.length) {
            var arrlen = lengthSub(s.substring(str.length));
            console.log("arrlen ",arrlen);
            str = str + arrlen;
            console.log("str ",str);
            if(arrlen?.length) {
                m.set(arrlen,arrlen.length);
            }
        }
        var sortedMap = [...m.entries()].sort((a,b)=>b[1]-a[1])
        console.log(sortedMap[0][1]);
    }
};



var lengthSub = function(s) {
        var arr = Array.from(s);
    var newArr = [];
    for(var a in arr) {
        if(newArr.findIndex((elem)=>elem==arr[a]) == -1) {
            newArr.push(arr[a])
        } else return newArr.join('');
    }
}

var s = "peeka";
lengthOfLongestSubstring(s);