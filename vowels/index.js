function vowels(str) {
  // const maneno = ['a', 'e', 'i', 'o', 'u']
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if ('aeiou'.includes(str[i])) {
      count++
    }
  }
  return count
}

console.log(vowels('whyai'));
