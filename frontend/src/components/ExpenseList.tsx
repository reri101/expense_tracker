import React, { useEffect, useState } from "react";
import axios from "axios";

interface ExpenseListProps {
  refresh: boolean;
}

const ExpenseList: React.FC<ExpenseListProps> = ({ refresh }) => {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchExpenses = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3001/expenses?sort=desc&limit=10"
      );
      setExpenses(response.data);
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch expenses.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, [refresh]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <ul className="space-y-4 flex-col w-full">
      {expenses.map((expense: any) => (
        <li
          key={expense.id}
          className="bg-white bg-opacity-20 border p-4 rounded"
        >
          <div>Description: {expense.description}</div>
          <div>Amount: ${expense.amount}</div>
          <div>Date: {new Date(expense.date).toLocaleDateString()}</div>
        </li>
      ))}
    </ul>
  );
};

export default ExpenseList;
