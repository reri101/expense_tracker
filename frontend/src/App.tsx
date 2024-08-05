import React, { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import BackgroundBlur from "./components/BackgroundBlur";

const App: React.FC = () => {
  const [refresh, setRefresh] = useState(false);

  const handleExpenseAdded = () => {
    setRefresh((prev) => !prev); // Toggle refresh state
  };

  return (
    <div>
      <BackgroundBlur />
      <div className="shadow-sm z-10 relative container mx-auto p-4 mt-10 flex flex-col items-center">
        <h1 className="gradient-text text-4xl font-bold mb-4 w-fit">
          Expense Tracker
        </h1>
        <ExpenseForm onExpenseAdded={handleExpenseAdded} />
        <ExpenseList refresh={refresh} />
      </div>
    </div>
  );
};

export default App;
