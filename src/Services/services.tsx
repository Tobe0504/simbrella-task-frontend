import axiosInstance from ".";
import {
  accountSummaryType,
  loanTypes,
  responseType,
  transactionTypes,
} from "../Utilities/types";

export const getAllTransactions = () => {
  return axiosInstance.get<responseType<transactionTypes[]>>(
    "/api/transactions"
  );
};

export const getAllLoans = () => {
  return axiosInstance.get<responseType<loanTypes[]>>("/api/loans");
};

export const getAccountSummary = () => {
  return axiosInstance.get<responseType<accountSummaryType>>(
    "/api/calculate-balance"
  );
};
