/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
 let wordPattern = function(pattern, s) {
    arr = [...pattern];
    let splitStr = s.split(' ');
    let map = new Map();
    if(splitStr.length !== arr.length) {
    
        return false;
    }
    for(i=0;i<splitStr.length;i++) {
        if(map.get(splitStr[i])) {
            
            if(map.get(splitStr[i]) !== arr[i]) {
                console.log(" not found ");
                return false;
             } 
        } else { 
            var values = [...map.values()];
            const indexBool =[...map.values()].findIndex((m)=> {
                return m == arr[i]
            });
            if(indexBool == -1) {
                 map.set(splitStr[i],arr[i]);
            }
            else {  console.log(" not found "); return false;}
        }
    }
    if(i==splitStr.length) {
        console.log("returning true");
        return true;
    }
};

 

let pattern = "abba";
let s = "dog dog dog dog";
let s1 = "dog cat cat fish";
let s2 = "dog cat cat dog";
let s3 = "jquery";
wordPattern(pattern,s);
wordPattern(pattern,s1);
wordPattern(pattern,s2);
//wordPattern(pattern,s3);