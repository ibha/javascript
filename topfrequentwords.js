var topKFrequent = function(words) {
    var m = new Map();
    words.forEach((word)=>{
        var val = m.get(word);
        if(!val) {
            val=0;
        }
        m.set(word,val+1);

    }) 
    //JavaScript maps don't have chainable helpers like filter(), sort() or map() for arrays. 
    //m.entries converts map into iterable.
    //... spread operator to convert it into Array. You can also use Array.from
    m2=[...m.entries()].sort(
        (a,b)=>b[1]-a[1]
    );
    m2.forEach((key,value)=> console.log("key",value));
    console.log(m2.slice(0,2));
    //Convert Array back to Object
    let mapObj = Object.fromEntries(m);
    console.log("MapObj ",mapObj);
};

words = ["i","love","love","leetcode","i","love","coding"];
topKFrequent(words)