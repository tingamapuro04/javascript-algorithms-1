const Anagram = (stringA, stringB) => {
  return stringA.toLowerCase().trim().split('').sort().join('') === stringB.toLowerCase().trim().split('').sort().join('');
}

console.log(Anagram('   Heart1', 'earth'));