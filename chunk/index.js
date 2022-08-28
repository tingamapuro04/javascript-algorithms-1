const trunc = [];
const pushed = [];
function chunk(arr, size) {
  if (arr.length % size === 0) {
    for (let i = 0; i < arr.length; i++) {
      if (i % size === 0) {
        trunc.push(arr.slice(i, i+size))
      }
    }
  }
  if (arr.length % size !== 0) {
    for ( let i = 0; i < arr.length; i++) {
      if ( i % size === 0) {
        if (i < Math.floor(arr.length / size)*size) {
          trunc.push(arr.slice(i, i+size))
        } else {
          trunc.push(arr.slice(Math.floor(arr.length / size)*size))
        }
      }
    }
  }
  return trunc;
}

console.log(chunk(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], 3));