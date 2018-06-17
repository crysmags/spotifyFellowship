// Question 1 -- sortByStrings(s,t): Sort the letters in the string s by the order they occur in the string t. You can assume t will not have repetitive characters. For s = "weather" and t = "therapyw", the output should be sortByString(s, t) = "theeraw". For s = "good" and t = "odg", the output should be sortByString(s, t) = "oodg".

function sortyByString (s,t) {
  let sortedS = new Array(s.length);
  
    for (let i = 0; i < s.length; i++) {
      let currentS = s[i];
      if(t.indexOf(currentS) !== -1) {
        let place = t.indexOf(currentS);
        if (sortedS[place] === undefined ) {
          sortedS[place] = currentS;
        } else if (sortedS[place] !== undefined) {
          sortedS.splice((place+1), 0, currentS);
        }
      }
    }
    return sortedS.join('');
}
