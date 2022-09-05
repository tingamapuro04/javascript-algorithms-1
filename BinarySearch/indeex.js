const Binary = (SortedArry,value) => {
  let left = 0;
  let right = SortedArry.length - 1;
  while(left <= right) {
    let mid = Math.floor((left + right)/ 2)
    const midV = SortedArry[mid];
    if (midV === value){
      return mid
    } else if (midV < value) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  return -1;
}

// console.log(Binary([1,2,3,4,5,6,7,8,9,10], 10))