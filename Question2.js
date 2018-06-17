// Question 2 -- decodeString(s): Given an encoded string, return its corresponding decoded string. 

// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is repeated exactly k times. Note: k is guaranteed to be a positive integer. 

// For s = "4[ab]", the output should be decodeString(s) = "abababab" 
// For s = "2[b3[a]]", the output should be decodeString(s) = "baaabaaa"

function removeBrackets (s) {
  let encodeArray = [];
  for(let i = 0; i < s.length; i++) {
    if (s[i] !== '[' && s[i] !== ']') {
      encodeArray.push(s[i]);
    }
  }
  return encodeArray.join('');
}

function decodeString(s) {
  let toEncode = removeBrackets(s).split(/(\d)/);
  let encoded = '';

    if (s.length === 0) {
      return encoded;
    } else if (parseInt(toEncode[1])) {
      let count = parseInt(toEncode[1]);
      while (count > 0) {
        encoded += toEncode[2];
        encoded += decodeString(s.slice(3));
        count--;
      }
    } else if (!parseInt(toEncode[1])) {
        encoded += decodeString(s.slice(3));
    } 
  return encoded;
}