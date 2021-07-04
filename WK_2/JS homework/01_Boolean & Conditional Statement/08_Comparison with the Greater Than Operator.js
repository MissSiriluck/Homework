//Add the greater than operator to the indicated lines so that the return statements make sense.
function testGreaterThan(val) {
    if (val > 100) {  // Change this line --> false
      return "Over 100";
    }
  
    if (val > 10) {  // Change this line --> false
      return "Over 10";
    }
  
    return "10 or Under"; // will return 10 or under
  }
  
  testGreaterThan(10); 