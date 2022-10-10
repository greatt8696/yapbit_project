import React from "react";
import ChartComp from '../components/ChartComp'

const MyWallet = () => {
  return (
    <div className="grid grid-row-2 gap-4 mx-auto max-w-6xl h-5/6 my-1">
      <div className="w-full h-full row-span-3 bg-slate-100/10 m-3 rounded-lg flex justify-center">
        <ChartComp></ChartComp>
      </div>
    </div>
  );
};

export default MyWallet;
