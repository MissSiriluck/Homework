//Convert the logic to use else if statements.

function testElseIf(val) {
    if (val > 10) {
      return "Greater than 10";
    } else if (val < 5) {
      return "Smaller than 5";
    } else {
      return "Between 5 and 10"; //this func return this line at val = 7
    } 
  }
  
  testElseIf(7); // call function at val = 7