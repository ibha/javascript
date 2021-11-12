Array.prototype.printMyArray = function() {
    for(let i=0;i<this.length;i++) {
        this[i]=this[i].toUpperCase();
    }
    console.log(this);
}


arr =  ["Banana", "Orange", "Apple", "Mango"]
arr.printMyArray();