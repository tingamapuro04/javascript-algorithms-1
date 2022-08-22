const capitalise = (str) => {
  return str.split(" ").map(item => item.charAt(0).toUpperCase() + item.slice(1,)).join(" ");
}

console.log(capitalise('I am here today'))