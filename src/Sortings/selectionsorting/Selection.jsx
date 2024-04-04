
const Selection = (arr) => {
  const animate=[];
  let i,lowest;
  for ( i = 0; i < arr.length-1; i++) {
    lowest = i
    for (let j = i + 1; j < arr.length; j++) {
      animate.push([j,lowest,false,false])
      if (arr[j] < arr[lowest]) {
        lowest = j
        animate.push([j,lowest,false,true])
      }
    }
    if (lowest !== i) {
        [arr[i], arr[lowest]] = [arr[lowest], arr[i]]
        animate.push([i,lowest,false,true])
        animate.push([i,lowest,true,false])
    }
  }
    return animate;
}

export default Selection
