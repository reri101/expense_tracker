import axios from "axios";

const API_URL = "http://localhost:3001/expenses";

export const getExpenses = async (sort: "asc" | "desc", limit: number) => {
  const response = await axios.get(API_URL, {
    params: { sort, limit },
  });
  return response.data;
};

export const getExpense = async (id: string) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

export const createExpense = async (expense: {
  description: string;
  amount: number;
  date: Date;
}) => {
  const response = await axios.post(API_URL, expense, {
    headers: { "X-API-KEY": "api-key-test" },
  });
  return response.data;
};
