const Anagram = (stringA, stringB) => {
  // return stringA.toLowerCase().trim().split('').sort().join('') === stringB.toLowerCase().trim().split('').sort().join('');

  stringA = stringA.toLowerCase().replace(/[^a-z0-9]/gi, '');
  stringB = stringB.toLowerCase().replace(/[^a-z0-9]/gi, '');
  if (stringA.length !== stringB.length) return false;

  const Achar = {};
  for (let i = 0; i < stringA.length; i++) {
    const achar = stringA[i];
    Achar[achar] = Achar[achar] + 1 || 1;
  }
  
  for (let x of stringB) {
    if (!Achar[x]) {
      return false
    }
    if (Achar[x]) {
      Achar[x]--
    }
    if (Achar[x] === 0) {
      delete Achar[x]
    }
  }
  return Object.keys(Achar).length === 0;
}
console.log(Anagram('   Hearttt!!#', 'earttth'));


// This solution has a time complexity of O(logn) whereas solution with the sort function has a time complexity of O(NlogN)