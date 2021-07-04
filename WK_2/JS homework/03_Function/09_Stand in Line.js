//Stand in Line

function nextInLine(arr, item) {
    // Only change code below this line
    arr.push(item); //add new array at the end of queue
    var removed = arr.shift(); //delete first array front of queue
    return removed;  
    // Only change code above this line
  }
  
  // Setup
  var testArr = [1,2,3,4,5];
  
  // Display code
  console.log("Before: " + JSON.stringify(testArr)); //[1,2,3,4,5]
  console.log(nextInLine([5,6,7,8,9], 1)); 
  console.log("After: " + JSON.stringify(testArr));