function print(arg1, arg2) {
    console.log(this.name +"-"+ arg1+"-"+arg2);
   }
    
   const obj1 ={name: "obj1"};
   const obj2 ={name: "obj1"};
    
   //obj1 is mapped to this. Arg1 and Arg2 are passed individually
   //output obj1-callArg1-callArg2<br>
   print.call(obj1,"callArg1", "callArg2");
    
   //obj1 is mapped to this. Arg1 and Arg2 are passed inside an array
   //output obj1-callArg1-callArg2<br>
   print.apply(obj1, ["applyArg1", "applyArg2"]);
    
   //bind does not invoke the function, instead it returns a copy
   //output obj1-callArg1-callArg2<br>
   const bindMethod = print.bind(obj1, "bindArg1", "bindArg2");
   bindMethod();