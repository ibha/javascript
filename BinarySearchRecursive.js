function binarySearch(arr,searchTerm) {
    newArr=[];
    if(arr.length>1) {
        
        middle=Math.ceil(arr.length/2);
    } else {
        console.log("Number not found");
        return;
    }
    if(searchTerm==arr[middle]) {
        console.log("Element Found");
        return;
    }
    else if(searchTerm>arr[middle]) {
        for(i=middle;i<arr.length;i++) {
       //     console.log("greater");
            newArr.push(arr[i]);
        }
    } else {
        for(i=0;i<middle;i++) {
        //    console.log("lesser",arr[i]);
            newArr.push(arr[i]);
        }
    }
    binarySearch(newArr,searchTerm);
}

binarySearch([1,3,5,6,7,8,9],2);
binarySearch([1,3,5,6,7,8,9],3);
binarySearch([1,3,5,6,7,8,9],9);