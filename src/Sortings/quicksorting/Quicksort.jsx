import { disableButtons, enableButtons } from '../../Helper';
import Quick from './Quick'

const Quicksort = (array, speed) => {
  disableButtons()
  const animations = Quick(array);
const animationPromises=animations.map(([val1,val2,doSwap],i)=>{
  return new Promise((resolve)=>{
    setTimeout(() => {
      const bar1 = document.getElementById(val1);
      const bar2 =document.getElementById(val2);
      const ncolor="blue"
      bar1.style.background = ncolor
      bar2.style.background = ncolor
      
      if (doSwap === true) {
        const newColor='red'
        let h1 = bar1.style.height;
        let h2 = bar2.style.height;
        bar1.style.backgroundColor = newColor
        bar2.style.backgroundColor = newColor
        bar1.style.height = h2;
        bar2.style.height = h1;
      }
      resolve()
    }, i * 1000/speed);
  });
})

  Promise.all([animationPromises]).then(()=>{
    setTimeout(() => {
      for (let j = 0; j < array.length; j++) {
        const bar = document.getElementById(j);
        bar.style.backgroundColor = 'black';
      }
      enableButtons()
    }, animations.length * (1000/speed));
  })
    return array;   
  };

export default Quicksort;