import React, { useState, useEffect } from "react";
import Bar from "./Components/Bar";
import Bubblesort from "./Sortings/bubblesorting/Bubblesort";
import Insertionsort from "./Sortings/insertionsorting/Insertionsort";
import Selectionsort from "./Sortings/selectionsorting/Selectionsort";
import Quicksort from "./Sortings/quicksorting/Quicksort";
import MergeSort2 from "./Sortings/mergesorting/MergeSort2";
import Details from "./Components/Details";

const App = () => {
  const [elementrange, setElementRange] = useState(10);
  const [speed, setSpeed] = useState(4);
  const [array, setArray] = useState([]);
  const [sortChoosed, setSortChoosed] = useState("");

  var Wsize = 1;
  if (window.innerWidth <= 768) Wsize = 0.75;
useEffect(()=>{

},[array])
  const generateArray = (e) => {
    e.preventDefault();
    const arr = new Array();
    for (let index = 0; index < elementrange; index++) {
      arr[index] = Math.floor(Math.random() * (350 - 100) + 100);
    }
    setArray(arr);
    setSortChoosed("")
    const bars = document.getElementsByClassName("bars");
  for (let i = 0; i < bars.length; i++) {
    bars[i].style.background = "linear-gradient(90deg, rgba(155,155,158,1) 42%, rgba(157,157,173,1) 56%, rgba(157,157,166,1) 71%, rgba(30,33,33,1) 100%)";
  }
  };

  const handleBubbleSort = () => {
    setTimeout(()=>{
      setArray(Bubblesort(array, speed));
    },100)
    setSortChoosed("Bubble Sort")
  };

  const handleInsertionSort = () => {
    setTimeout(()=>{
      setArray(Insertionsort(array, speed));
    },100)
    setSortChoosed("Insertion Sort")
  };

  const handleSelectionSort = () => {
    setTimeout(() => {
      setArray(Selectionsort(array, speed));
    }, 100);
    setSortChoosed("Selection Sort")
  };

  const handleMergeSort = () => {
    setTimeout(() => {
      setArray(MergeSort2(array, speed));
    }, 100);
    setSortChoosed("Merge Sort")
  };

  const handleQuickSort = () => {
    setTimeout(() => {
      setArray(Quicksort(array, speed));
    }, 100);
    setSortChoosed("Quick Sort")
  };

  const handleReset = () => {
    setElementRange(10);
    setSpeed(4);
    setArray([]);
    setSortChoosed("");
  };

  const sorts = [
    {
      id: 1,
      name: "Bubble Sort",
      funcName: handleBubbleSort,
    },
    {
      id: 2,
      name: "Insertion Sort",
      funcName: handleInsertionSort,
    },
    {
      id: 3,
      name: "Selection Sort",
      funcName: handleSelectionSort,
    },
    {
      id: 4,
      name: "Merge Sort",
      funcName: handleMergeSort,
    },
    {
      id: 5,
      name: "Quick Sort",
      funcName: handleQuickSort,
    },
  ];
 
  return (
    <>
      <div className="bg-gray-800 w-full m-0 p-1 flex justify-center items-center flex-col ">
        <div>
          <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl animate-pulse">
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
              SORTING VISUALIZER
            </span>
          </h1>
        </div>
        <div className="bg-gray-300 shadow-lg w-full h-fit rounded-md flex flex-col gap-20">
          <div className="flex justify-around mt-4 flex-wrap">
            {sorts.map(({ id, name, funcName }) => {
              return (
                <button
                  key={id}
                  id={name}
                  className="text-white bg-gradient-to-br from-slate-300 to-slate-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 cursor-pointer"
                  onClick={funcName}
                >
                  {name}
                </button>
              );
            })}
          </div>
          <div className="flex flex-col lg:flex-row gap-24 m-1 mb-4">
            <div className="bg-slate-600 font-semibold text-zinc-200 rounded-md shadow-sm p-4 h-fit flex flex-col items-center">
              <form>
                <div className="mb-4">
                  <label htmlFor="elements">Number Of Elements</label>
                  <input
                    type="range"
                    min="5"
                    max="40"
                    id="elements"
                    defaultValue={elementrange}
                    className="range cursor-pointer ml-2"
                    step="5"
                    onChange={(event) => {
                      setElementRange(event.target.value);
                    }}
                    />
                </div>
                <div className="mb-4">
                  <label htmlFor="speed">Speed Of Sorting</label>
                  <input
                    type="range"
                    min="2"
                    max="10"
                    id="speed"
                    defaultValue={speed}
                    className="cursor-pointer ml-2"
                    step="2"
                    onChange={(event) => {
                      setSpeed(event.target.value);
                    }}
                    />
                </div>
                <button
                  id="gen-arr"
                  onClick={(e) => generateArray(e)}
                  className="p-0.5 mb-2 mr-2 w-full text-sm font-medium hover:opacity-90 hover:border-2 text-gray-900 rounded-lg group bg-gradient-to-br from-gray-400 to-slate-500  hover:text-white px-5 py-2.5 transition-all ease-in duration-75"
                  >
                  <span>Generate Array</span>
                </button>
                <input
                  type="reset"
                  id="reset"
                  onClick={handleReset}
                  className="p-0.5 mb-2 mr-2  w-full  text-sm font-medium hover:opacity-90 hover:border-2 hover:text-white text-gray-900 rounded-lg group bg-gradient-to-br from-gray-400 to-slate-500  px-5 py-2.5 transition-all ease-in duration-75"
                  />
              </form>
            </div>
            <div className= "w-full flex gap-1 justify-center flex-row-reverse rotate-180">
              {console.log(array)}
              {array.map((value, index) => {
                return (
                  <Bar
                  key={index}
                  index={index}
                  length={value * Wsize}
                  />
                  );
                })}
            </div>
          </div>
                {sortChoosed!="" && <Details sortChoosed={sortChoosed} />}
        </div>
      </div>
    </>
  );
};

export default App;
