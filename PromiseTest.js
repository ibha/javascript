let myPromise = new Promise(function(resolve, reject) {
    // "Producing Code" (May take some time)
    
      setTimeOut(resolve(),5000); // when successful
      reject();  // when error
    });
    
    // "Consuming Code" (Must wait for a fulfilled Promise)
    myPromise.then(
      function(value) { console.log("code if successful") },
      function(error) { console.log("code if some error")  })

