import { AxiosResponse } from "axios";
import { useState, useEffect } from "react";
import { getAllTransactions } from "../Services/services";
import { transactionTypes } from "../Utilities/types";

export const useGetTransactions = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<transactionTypes[] | null>(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response: AxiosResponse = await getAllTransactions();
        if (response) {
          setData(response?.data as transactionTypes[]);
        }
      } catch (err) {
        setError(err as any);
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  return { loading, data, error };
};
