var topKFrequent = function(words, k) {
    var m = new Map();
    words.forEach((word)=>{
        var val = m.get(word);
        if(!val) {
            val=0;
        }
        m.set(word,val+1);

    }) 
    m2=[...m.entries()].sort(
        (a,b)=>b[1]-a[1]
    );
    m2.forEach((key,value)=> {
        console.log("key",value);
    });
    console.log(m2.slice(0,2));
};

words = ["i","love","love","leetcode","i","love","coding"];
topKFrequent(words,2)