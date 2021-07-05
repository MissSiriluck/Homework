// Counting Cards

var count = 0;

function cc(card) {
  // Only change code below this line

    if (1 < card && card < 7){
        count++;
      } else if (card === 10 || card === 'J'|| card === 'Q' || card === 'K'|| card === 'A'){ 
        count --;
      } 

    if (count > 0){
      return`${count} Bet` ;
    } else {
      return`${count} Hold`;
    }
    
  // Only change code above this line
}

cc(2); cc(3); cc(4); cc(5); cc(6);