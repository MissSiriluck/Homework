//Combine the if statements into a single if/else statement.

function testElse(val) {
    var result = "";
    // Only change code below this line
  
    if (val > 5) {
      result = "Bigger than 5";
    } else {
      result = "5 or Smaller"; //result = this line
    }
  
    // Only change code above this line
    return result; //return "5 or Smaller"
  }
  
  testElse(4); //call function val = 4