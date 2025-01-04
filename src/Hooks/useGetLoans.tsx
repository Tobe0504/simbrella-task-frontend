import { AxiosResponse } from "axios";
import { useState, useEffect } from "react";
import { getAllLoans, getAllTransactions } from "../Services/services";
import { loanTypes, transactionTypes } from "../Utilities/types";

export const useGetLoan = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<loanTypes[] | null>(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLoans = async () => {
      try {
        const response: AxiosResponse = await getAllLoans();
        if (response) {
          setData(response?.data as loanTypes[]);
        }
      } catch (err) {
        setError(err as any);
      } finally {
        setLoading(false);
      }
    };

    fetchLoans();
  }, []);

  return { loading, data, error };
};
