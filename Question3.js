// Question 3 -- changePossibilities(amount,amount): Your quirky boss collects rare, old coins. They found out you're a programmer and asked you to solve something they've been wondering for a long time. 

// Write a function that, given an amount of money and an array of coin denominations, computes the number of ways to make the amount of money with coins of the available denominations. 

// Example: for amount=4 (4¢) and denominations=[1,2,3] (1¢, 2¢ and 3¢), your program would output 4—the number of ways to make 4¢ with those denominations: 

// 1¢, 1¢, 1¢, 1¢
// 1¢, 1¢, 2¢
// 1¢, 3¢
// 2¢, 2¢


function changePossibilities (amount, denominations) {
  let times = amount * denominations.length;
  let possibilities = {};

    while (times > 0) { // this section account for numbers in the denominations array that where repeating number can add up to the amount
      for (let i = 0; i < denominations.length; i++) {
        let  temp = [];
        let  count = 0;
        let current = denominations[i];
        count += current;
        temp.push(current);
        for ( let j = 0; j < denominations.length; j++) {
          let next = denominations[j];
          if (count + next === amount) {
            temp.push(next);
            temp.sort((a,b) => a-b);
            if (!possibilities[temp] ) {
              possibilities[temp] = temp;
              }     
            }
          }
        }
      times --;
      }
      let check = Object.values(possibilities);
      if (check.length === 0) {
        times = amount * denominations.length
         while (times > 0) { // this part of thee section accounts for congruent numbers in  the denominations that can add up to amount
        let  count = 0;
        let  temp = [];
        let tempDenom = denominations.slice()
      for (let i = 0; i < tempDenom.length; i++) {
        i = 0;
        let current = tempDenom[i];
        count += current;
        temp.push(current);
        for ( let j = i+1; j < tempDenom.length; j++) {
          let next = tempDenom[j];
          temp.push(next);
          count += next;
          if (count === amount) {
            temp.sort((a,b) => a-b);
            if (!possibilities[temp] ) {
              possibilities[temp] = temp;
              } 
            }
              if ( count < amount && j === tempDenom.length-1 ) {
                count = 0;
                i = 0;
                temp.push(next);
                tempDenom.shift();
            } else if (count >= amount) {
              temp = [];
              count = 0;
              tempDenom.shift()
              i = 0;
            }
          }
        }
      times --;
      }
    }
      let values = Object.values(possibilities);
      let temp = [];
      // this section accounts for combinations already found and the combinations possible in the current possibilites
      for (let i = 0; i < values.length; i++) {
        for(let j = 0; j < denominations.length; j++) {
        let value = values[i][i];
          if (amount % denominations[j] === 0 ) {
            let array = new Array(amount / denominations[j])
            array.fill(denominations[j], 0);
            if (!possibilities[array] ) {
                possibilities[array] = array;
              }   
            } 
            if (value % denominations[j] === 0) {
              let spread = value / denominations[0];
              if (denominations[j]* spread + value === amount) {
                let array = new Array(spread);
                array.fill(denominations[j], 0,spread);
                array.push(value);
                if (!possibilities[array] ) {
                possibilities[array] = array;
                  }
                }
              }
          }
        }
    return Object.values(possibilities).sort((a,b) => a-b);
  
  }