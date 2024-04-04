 const Insertion = (arr) => {
    const animate=[];
    let i, key, j;
    for (i = 1; i < arr.length; i++)
    {
        key = arr[i];
        j = i - 1;

        while (j >= 0 && arr[j] > key)
        {
          animate.push([j+1,j,false]);
            arr[j + 1] = arr[j];
            animate.push([j+1,arr[j],true]);
            j = j - 1;
          }
          arr[j+1]=key;
          animate.push([j+1,key,true])
        }
console.log(arr)
return animate;
}

export default Insertion