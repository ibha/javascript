//https://www.telerik.com/blogs/debouncing-and-throttling-in-javascript

let timer;
var  divBodyDom  =  document.getElementById('div-body');

// This represents a very heavy method which takes a lot of time to execute
function  makeAPICall() {
	var  debounceDom  =  document.getElementById('debounc-count');
	var  debounceCount  =  debounceDom.innerHTML  ||  0;

	debounceDom.innerHTML  =  parseInt(debounceCount) +  1
}

const throttle = (func,delay) => {
    if(timer) {
        console.log("return");
        return;
    }
    timer = setTimeout(()=>{
        console.log("setTimeout called");
        func();
        timer = undefined;
    },delay)

}



// Event listener on the input box
divBodyDom.addEventListener('scroll', function () {
	var  apiCallCountDom  =  document.getElementById('show-api-call-count');
	var  apiCallCount  =  apiCallCountDom.innerHTML  ||  0;
	apiCallCount  =  parseInt(apiCallCount) +  1;

	// Updates the number of times makeAPICall method is called
	apiCallCountDom.innerHTML  =  apiCallCount;

	// Throttles makeAPICall method such that it is called once in every 200 milliseconds
	throttle(makeAPICall, 5000)
})