import { disableButtons, enableButtons } from "../../Helper";
import Merge2 from "./Merge2";

const MergeSort = (array, speed) => {
    disableButtons()
    const animations = Merge2(array);
    const animationPromises = animations.map(([val1, val2, doSwap], i) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                if (doSwap) {
                    const bar = document.getElementById(val1);
                    bar.style.height = val2 + 'px';
                    bar.style.backgroundColor='red';
                } 
                else{
                  const bar1 = document.getElementById(val1);
                  const bar2 = document.getElementById(val2);
                  const ncolor = "blue";
                  bar1.style.background = ncolor;
                  bar2.style.background = ncolor;
               }
                resolve();
                }, i * 1000 / speed);
        });
    });
    Promise.all([animationPromises]).then(()=>{
        setTimeout(()=>{
            for (let j = 0; j < array.length; j++) {
                const bar = document.getElementById(j);
                bar.style.backgroundColor = 'black';
            }
            enableButtons()
        },animations.length * (1000/speed));
    })

    return array;
};

export default MergeSort;
