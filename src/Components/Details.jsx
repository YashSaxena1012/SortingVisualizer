import React, { useState, useEffect } from "react";
import sortingDetails from "../sortingDetails.json";

const Details = ({ sortChoosed }) => {
  const [algo, setAlgo] = useState({});
console.log(sortChoosed)
  useEffect(() => {
    const temp = sortingDetails.find((item) => sortChoosed === item.name);
    setAlgo(temp);
    console.log(algo);
  }, [sortChoosed]);

  return (
    <>
      <div className="flex flex-col bg-gray-100 shadow-lg rounded-lg p-2 mb-3 mx-2">
        <h2 className="text-2xl text-center mb-3">{sortChoosed}</h2>
        <div className="flex flex-col  md:flex-row gap-2">
          <div className="flex flex-col w-full gap-2 uppercase">
            <div className="bg-gray-700 flex flex-col gap-2 p-2 h-3/4 rounded">
              <p className="text-white uppercase font-semibold">
                Time Complexity
              </p>
              <div className="flex justify-between gap-4 h-full">
                <div className="w-1/3 bg-gray-300 rounded-lg p-1">
                  WORST CASE {algo.worstCase}
                </div>
                <div className="w-1/3 bg-gray-300 rounded-lg p-1">
                  BEST CASE {algo.bestCase}
                </div>
                <div className="w-1/3 bg-gray-300 rounded-lg p-1">
                  AVERAGE CASE {algo.averageCase}
                </div>
              </div>
            </div>
            <div className="w-full p-2 bg-gray-300 rounded-lg">
              <span className="font-semibold">
                Space Complexity: {algo.spaceComplexity}
              </span>
            </div>
          </div>
          <div className="h-40 overflow-scroll rounded-lg">
            <pre className="p-2 bg-gray-300 w-fit">{algo.code}</pre>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
