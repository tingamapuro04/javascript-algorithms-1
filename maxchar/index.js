// To find the highest frequency of a character in a string

function maxChar(str) {
  let maxcharobj = {}
  let maxchar = ""
  let maxCount = 0;

  // Fill out the character object
  for (let i = 0; i < str.length; i ++) {
    const char = str[i];
    maxcharobj[char] = maxcharobj[char] + 1 || 1;
    if (maxcharobj[char] > maxCount) {
      maxChar = char;
      maxCount = maxcharobj[char]
    }
  }
  return maxChar;
}

console.log(maxChar('1337'));
