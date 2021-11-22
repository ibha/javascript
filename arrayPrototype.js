Array.prototype.myUcase = function() {
  for (let i = 0; i < this.length; i++) {
    this[i] = this[i].toUpperCase();
  }
  console.log(this);
};
["Banana", "Orange", "Apple", "Mango"].myUcase();;
