//Add the less than operator to the indicated lines so that the return statements make sense.
function testLessThan(val) {
    if (val < 25) {  // Change this line
      return "Under 25"; //return this line 'under 25'
    }
  
    if (val < 55) {  // Change this line
      return "Under 55";
    }
  
    return "55 or Over";
  }
  
  testLessThan(10); //call function val = 10