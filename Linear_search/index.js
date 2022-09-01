function linearSearchIncludes(arr, val) {
  for (let x of arr) {
    if (x === val) {
      return true;
    }
  }
  return false;
}

const foods = ['mapera', 'avocado', 'machunga', 'apoyo', 'onger']

console.log(linearSearchIncludes(foods, 'apoy'))


const searchIndexOf = (arr, val) => {
  for (let i =0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i
    }
  }
  return -1;
}


console.log(searchIndexOf(foods, 'apoy'))