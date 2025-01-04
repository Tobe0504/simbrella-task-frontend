import { AxiosResponse } from "axios";
import { useState, useEffect } from "react";
import { getAccountSummary } from "../Services/services";
import { accountSummaryType } from "../Utilities/types";

export const useAccountSummary = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<accountSummaryType | null>(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAccountSummary = async () => {
      try {
        const response: AxiosResponse = await getAccountSummary();
        if (response) {
          setData(response?.data as accountSummaryType);
        }
      } catch (err) {
        setError(err as any);
      } finally {
        setLoading(false);
      }
    };

    fetchAccountSummary();
  }, []);

  return { loading, data, error };
};
