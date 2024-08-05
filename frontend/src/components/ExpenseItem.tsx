import React from "react";

interface ExpenseItemProps {
  expense: {
    id: string;
    description: string;
    amount: number;
    date: string;
  };
}

const ExpenseItem: React.FC<ExpenseItemProps> = ({ expense }) => {
  return (
    <li className="border border-gray-300 rounded-md shadow-sm p-4">
      <div className="text-lg font-medium text-gray-900">
        {expense.description}
      </div>
      <div className="text-sm text-gray-500">{expense.amount}</div>
      <div className="text-sm text-gray-500">
        {new Date(expense.date).toLocaleDateString()}
      </div>
    </li>
  );
};

export default ExpenseItem;
