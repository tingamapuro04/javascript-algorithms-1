console.log('popo');
function ceasercipher(str, shift) {
  const alpha = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let res = '';
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    const ind = alpha.indexOf(char)
    if (ind === -1) {
      res += char;
      continue;
    }


    let findind = (ind + shift) % 26;
    res += alpha[findind]
  }
  return res
}

console.log(ceasercipher('x3yz', 27))

// O(N) time complexity