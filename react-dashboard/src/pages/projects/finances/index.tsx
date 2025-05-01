import React from "react";

type Props = {};

const Finances = (props: Props) => {
  return (
    <>
    {/* Header to show to earnings, spendings and current balance */}
    <div className="flex flex-col items-center justify-center w-full h-1/2 bg-gray-100">
      <h1 className="text-3xl font-bold">Finances</h1>
      <div className="flex flex-row justify-around w-full px-4 py-2">
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-semibold">Earnings</h2>
          <p className="text-lg">$5000</p>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-semibold">Spendings</h2>
          <p className="text-lg">$2000</p>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-semibold">Current Balance</h2>
          <p className="text-lg">$3000</p>
        </div>
      </div>
    </div>

    {/* Table to show the transactions */}
    <div className="flex flex-col items-center justify-center w-full h-1/2 bg-gray-200">
      <h1 className="text-3xl font-bold">Transactions</h1>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b">Date</th>
            <th className="px-4 py-2 border-b">Description</th>
            <th className="px-4 py-2 border-b">Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border-b">01/01/2023</td>
            <td className="px-4 py-2 border-b">Gym Membership</td>
            <td className="px-4 py-2 border-b">$50</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>

    {/* Button to add a new transaction */}
    <div className="flex flex-col items-center justify-center w-full h-1/2 bg-gray-300">
      <h1 className="text-3xl font-bold">Add Transaction</h1>
      <form className="flex flex-col items-center justify-center w-full px-4 py-2">
        <input
          type="date"
          className="px-4 py-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          placeholder="Description"
          className="px-4 py-2 border border-gray-300 rounded"
        />
        <input
          type="number"
          placeholder="Amount"
          className="px-4 py-2 border border-gray-300 rounded"
        />
        <button className="px-4 py-2 mt-4 text-white bg-blue-500 rounded">
          Add Transaction
        </button>
      </form>
    </div>
    </>
  );
};

export default Finances;
