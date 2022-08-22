const capitalise = (str) => {
  const splitted = str.split(" ");
  const capped = splitted.map(item => item.charAt(0).toUpperCase() + item.slice(1,));
  return capped.join(" ");
}

console.log(capitalise('I am here today'))