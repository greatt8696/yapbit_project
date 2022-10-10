import React from "react";

const MyWallet = () => {
  return (
    <div className="grid grid-row-2 gap-4 mx-auto max-w-6xl h-5/6 my-1">
      <div className="w-full h-full row-span-3 bg-slate-100/10 m-3 rounded-lg"></div>
      <div className="w-full h-full row-span-3 bg-slate-100/10 m-3 rounded-lg p-2">
        <table className="border border-slate-500 table-auto w-full border-solid ">
          <thead>
            <tr>
              <th className="border p-3 border-slate-600 ...">State</th>
              <th className="border p-3 border-slate-600 ...">City</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-3 border-slate-700 ...">Indiana</td>
              <td className="border p-3 border-slate-700 ...">Indianapolis</td>
            </tr>
            <tr>
              <td className="border p-3 border-slate-700 ...">Ohio</td>
              <td className="border p-3 border-slate-700 ...">Columbus</td>
            </tr>
            <tr>
              <td className="border p-3 border-slate-700 ...">Michigan</td>
              <td className="border p-3 border-slate-700 ...">Detroit</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyWallet;
